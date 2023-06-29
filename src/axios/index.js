import axios from "axios";


export const axiosInstance = axios.create({
  baseURL: `http://${process.env.REACT_APP_backip}/api`,
  headrs: {
    "Content-Type": "application/json",
    withCredentials: true,
  }
});

// 엑세스 토큰 체킹 후 없으면 헤더에 추가하지 않고 있으면 둘다 추가해서 서버에 보냄
axiosInstance.interceptors.request.use(
  function (config) {

    const accToken = localStorage.getItem("access");
    const refToken = localStorage.getItem("refresh");

    if (!accToken) {
      console.log("no accToken")
      config.headers["access"] = null;
      config.headers["refresh"] = refToken;
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

// 재발급된 토큰 저장하기
axiosInstance.interceptors.response.use(
  function (response) {
    console.log("No problem")
      return response
  },
  // 에러가 발생하면, 토큰이 data에 같이 날라온다.
  async function (error) {
    console.log("error")
    console.log(error)
    // err에 담긴 access토큰과 refresh토큰을 변수에 저장 한다
    const AccToken = error.response.data.access
    const RefToken = error.response.data.refresh
    if (error.response && error.response.status === 403) {
      if (AccToken !== undefined) {
        try {
          localStorage.setItem("access", AccToken)
          console.log(AccToken)
          console.log(RefToken)
          const originalRequest = error.config;
          console.log("access is renewed");
          return await axiosInstance.request(originalRequest);
          // const data = await client.get('auth/refreshtoken')
          // if (data) {
          //     const {accessToken, refreshToken} = data.data
          //     localStorage.setItem('user', JSON.stringify(data.data, ['accessToken', 'refreshToken']))
          //     originalRequest.headers['accessToken'] = accessToken;
          //     originalRequest.headers['refreshToken'] = refreshToken;
          //     return await client.request(originalRequest);
        }
        catch (error){
          localStorage.removeItem('access');
          localStorage.removeItem('refresh'); 
          console.log("New access has a problem, all token is deleted");
        }
      }
      if (RefToken !== undefined) {
        try {
          localStorage.setItem("refresh", RefToken)
          const originalRequest = error.config;
          console.log("refresh is renewed");
          return await axiosInstance.request(originalRequest);
          // const data = await client.get('auth/refreshtoken')
          // if (data) {
          //     const {accessToken, refreshToken} = data.data
          //     localStorage.setItem('user', JSON.stringify(data.data, ['accessToken', 'refreshToken']))
          //     originalRequest.headers[S'accessToken'] = accessToken;
          //     originalRequest.headers['refreshToken'] = refreshToken;
          //     return await client.request(originalRequest);S
        }
        catch (error){
          localStorage.removeItem('access');
          localStorage.removeItem('refresh'); 
          console.log("New refresh has a problem, all token is deleted");
        }
      }
      return Promise.reject(error)
    }
    return Promise.reject(error)
  }
)


export const login = async (email, password) => {
  try {
    console.log(email);
    console.log(password);
    const response = await axiosInstance.post("/login", {
      email: email,
      password: password,
    });
    return {
      access: response.data.accToken,
      refresh: response.data.refToken,
      name: response.data.name,
      point: response.data.point,
      message: response.data.message
    };
  } catch (error) {
    throw error;
  }
};

export const adminlogin = async (email, password) => {
  try {
    console.log(email);
    console.log(password);
    const response = await axiosInstance.post("/adminlogin", {
      email: email,
      password: password,
    });
    return {
      access: response.data.accToken,
      refresh: response.data.refToken,
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
    const accToken = localStorage.getItem("access");
    const refToken = localStorage.getItem("refresh");
    const response = axiosInstance.post(
      "/me",
      { hello },
      {
        headers: {
          accessToken: `${accToken}`,
          refreshToken: `${refToken}`,
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
    const access_token = localStorage.getItem("access");
    const refresh_token = localStorage.getItem("refresh");
    if ((access_token !== null) && (refresh_token !== null)) {
      const response = await axiosInstance.get("/studentinfo", {
        headers: { 
          access: access_token,
          refresh: refresh_token
       },
      });
      return {
        number: response.data.number,
        name: response.data.name,
        code: response.data.code,
        point: response.data.point
      };

    }

  } catch (error) {
    throw error;
  }
};




export default axiosInstance;