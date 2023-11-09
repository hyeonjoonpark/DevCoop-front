import axios from "axios";

const currentDomain = window.location.hostname;
export const axiosInstance = axios.create({
    baseURL: `http://${currentDomain}/api`,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true  // 이렇게 설정하면 요청시에 자동으로 쿠키가 포함됩니다.
});

// Response interceptor: Handle token renewals.
axiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    async function (error) {
        if (error.response && error.response.status === 401) {
            const { access, refresh } = error.response.data;

            // If a new access or refresh token is provided, just retry the request.
            if (access || refresh) {
                return axiosInstance.request(error.config);
            }

            // If no tokens are provided, it's likely an authentication error.
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

export default axiosInstance;
