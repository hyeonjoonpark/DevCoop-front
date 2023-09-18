import axios from "axios";

const currentDomain = window.location.hostname;
export const axiosInstance = axios.create({
    baseURL: `http://${currentDomain}/api`,
    headers: {
        "Content-Type": "application/json",
    },
});

// Request interceptor: Add tokens to headers if they exist.
axiosInstance.interceptors.request.use(
    function (config) {
        const accToken = localStorage.getItem("access");
        const refToken = localStorage.getItem("refresh");
        if (accToken) config.headers["Access"] = accToken;
        if (refToken) config.headers["Refresh"] = refToken;
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// Response interceptor: Handle token renewals.
axiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    async function (error) {
        if (error.response && error.response.status === 403) {
            const { access, refresh } = error.response.data;

            // If a new access token is provided, save it and retry the request.
            if (access) {
                localStorage.setItem("access", access);
                error.config.headers["Access"] = access;
                return axiosInstance.request(error.config);
            }
            
            // If a new refresh token is provided, save it and retry the request.
            if (refresh) {
                localStorage.setItem("refresh", refresh);
                error.config.headers["Refresh"] = refresh;
                return axiosInstance.request(error.config);
            }

            // If no tokens are provided, clear the existing ones.
            localStorage.removeItem("access");
            localStorage.removeItem("refresh");
        }

        return Promise.reject(error);
    }
);

export const checkToken = async (hello) => {
    try {
        const response = await axiosInstance.post("/me", { hello });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getPoint = async () => {
    try {
        const response = await axiosInstance.get("/studentinfo");
        return {
            number: response.data.number,
            name: response.data.name,
            code: response.data.code,
            point: response.data.point,
        };
    } catch (error) {
        throw error;
    }
};

export default axiosInstance;