import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://10.129.57.252:6002/api",
});

export const login = async (email, password) => {
  try {
    console.log(email);
    console.log(password);
    const response = await axiosInstance.post("/login", {
      email: email,
      password: password,
    });
    return {
      token: response.data.accToken,
      refreshtoken: response.data.refToken,
      name: response.data.name,
      point: response.data.point,
      message: response.data.message
    };
  } catch (error) {
    throw error;
  }
};

// 토큰이 없거나 있는데 둘 다 만료된 ->로그인페이지
// 나머지는 메인

export const checkToken = (hello) => {
  try {
    const accToken = localStorage.getItem("token");
    const refToken = localStorage.getItem("refreshtoken");
    const response = axiosInstance.post(
      "/me",
      { hello },
      {
        headers: {
          accessToken: `${accToken}`,
          refrashToken: `${refToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
