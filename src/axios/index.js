import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://10.129.57.252:6002/api",
  headrs: {
    "Content-Type": "application/json",
    withCredentials: true,
  }
});

// 엑세스 토큰 체킹 후 없으면 헤더에 추가하지 않고 있으면 둘다 추가해서 서버에 보냄
axiosInstance.interceptors.request.use(
  function (config) {
    const accToken = localStorage.getItem("token");
    const refToken = localStorage.getItem("refreshtoken");
    if (!accToken) {
      console.log("no accToken")
      config.headers["access"] = null;
      config.headers["refresh"] = null;
      return config
    }
    config.headers["access"] = accToken;
    config.headers["refresh"] = refToken;
    return config
  },
  function (error) {
    console.log("interceptor >", error);
    return Promise.reject(error);
  }
)


// axiosInstance.interceptors.response.use(
//   function (response) {
//     console.log("No problem")
//       return response
//   },
//   async function (error) {
//     console.log("error")
//     console.log(error)
//     if (error.response && error.response.status === 403) {
//         try {
//             // const originalRequest = error.config;
//             // const data = await client.get('auth/refreshtoken')
//             // if (data) {
//             //     const {accessToken, refreshToken} = data.data
//             //     localStorage.setItem('user', JSON.stringify(data.data, ['accessToken', 'refreshToken']))
//             //     originalRequest.headers['accessToken'] = accessToken;
//             //     originalRequest.headers['refreshToken'] = refreshToken;
//             //     return await client.request(originalRequest);
//             //     }
//         } catch (error){
//             localStorage.removeItem('user');
//             console.log(error);
//         }
//         return Promise.reject(error)
//     }
//     return Promise.reject(error)
//   }
// )


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

// export const checkToken = (hello) => {
//   try {
//     const accToken = localStorage.getItem("token");
//     const refToken = localStorage.getItem("refreshtoken");
//     const response = axiosInstance.post(
//       "/me",
//       { hello },
//       {
//         headers: {
//           accessToken: `${accToken}`,
//           refrashToken: `${refToken}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };



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



export const getPoint = async () => {
  try {
    const access_token = localStorage.getItem("token");
    const refrash_token = localStorage.getItem("refrashtoken");
    const response = await axiosInstance.get("/studentinfo", {
      headers: { 
        access: access_token,
        refrash: refrash_token
     },
    });
    return {
      number: response.data.number,
      name: response.data.name,
      code: response.data.code,
      point: response.data.point
    };
  } catch (error) {
    throw error;
  }
};


export default axiosInstance;