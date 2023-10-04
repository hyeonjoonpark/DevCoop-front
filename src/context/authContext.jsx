// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { axiosInstance } from '../axios'; 

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};

function useProvideAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    setIsLoggedIn(document.cookie.includes('isLoggedIn'));
    setIsAdminLoggedIn(document.cookie.includes('isAdminLoggedIn'));
    console.log("Here is authContext : " + isLoggedIn)
  }, []);

  
  const unifiedLogin = async (email, password, navigate, admin = false)  => {
    try {
      const url = admin ? "/admin/login" : "/login";
      const response = await axiosInstance.post(url, {
        email: email,
        password: password,
      });
      if (admin) {
        setIsAdminLoggedIn(true);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(true);
      }
      navigate(admin ? "/admin" : "/");
      setErrorMessage("")
      return {
        name: response.data.name,
        point: response.data.point,
        message: response.data.message,
      };
    } catch (error) {

      let errMsg = "내부 서버 오류"; // 기본 에러 메시지
      if (error.response) {
          if (error.response.status === 401) {
              errMsg = "아이디 또는 암호가 잘못되었습니다.";
          } else if (error.response.status === 403) {
              errMsg = "관리자가 아닙니다.";
          }
      }  
      setErrorMessage(errMsg); 
    }
  };

  const logout = async (admin = false, navigate) => {
    try {
        await axiosInstance.post("/logout");

        // isMounted 체크를 제거하고 바로 상태 업데이트를 수행
        if (admin) {
            setIsAdminLoggedIn(false);
            setIsLoggedIn(false);
            navigate("/admin");
            console.log(isLoggedIn)
        } else {
            setIsLoggedIn(false);
            navigate("/");
            console.log(isLoggedIn)
        }

    } catch (error) {
        console.error("Error during logout:", error);
    }
};

  return {
    isLoggedIn,
    isAdminLoggedIn,
    unifiedLogin,
    logout,
    setIsLoggedIn,
    setIsAdminLoggedIn,
    errorMessage,
    setErrorMessage
  };
};
export const useAuth = () => {
  return useContext(AuthContext);
};