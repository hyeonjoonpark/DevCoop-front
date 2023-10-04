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
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // 쿠키에서 로그인 상태를 가져와 초기 값으로 설정
    return document.cookie.includes('isLoggedIn');
  });
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    // 쿠키에서 관리자 로그인 상태를 가져와 초기 값으로 설정
    return document.cookie.includes('isAdminLoggedIn');
  });
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
      const { name, point, message } = response.data; // 여기에서 name 값을 구조 분해 할당으로 받음
      if (admin) {
        localStorage.setItem("adminname", name); // 관리자 로그인 성공시 name 값을 localStorage에 저장
        setIsAdminLoggedIn(true);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(true);
      }
      navigate(admin ? "/admin" : "/");
      setErrorMessage("")
      return {
        name,
        point,
        message
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
      
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
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