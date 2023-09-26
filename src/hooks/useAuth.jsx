import { useEffect, useState } from "react";
import { axiosInstance } from "../axios";

export const login = async (email, password) => {
  try {
    const response = await axiosInstance.post("/login", {
      email: email,
      password: password,
    });
    return {
      name: response.data.name,
      point: response.data.point,
      message: response.data.message,
    };
  } catch (error) {
    throw error;
  }
};

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoggedIn(document.cookie.includes('isLoggedIn')); 
  }, [isLoggedIn]);

  const handleInputId = (e) => {
    setEmail(e.target.value);
  };

  const handleInputPw = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { name, point, message } = await login(email, password);
      setIsLoggedIn(true);
      // 알림 혹은 로그로 사용자 정보와 로그인 상태 표시
      console.log(name, point, message, isLoggedIn);
      // 로그인 후 리디렉션 처리
      window.location.replace("/");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage("아이디 혹은 암호가 잘못되었습니다");
      } else {
        setErrorMessage("내부 서버 오류");
      }
      setTimeout(() => setErrorMessage(""), 3000);
    }
  };

  const handleLogout = async () => {
    try {
      await axiosInstance.post("/logout");
      setIsLoggedIn(false);
      window.location.replace("/");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return {
    email,
    password,
    handleInputId,
    handleInputPw,
    handleSubmit,
    handleLogout,
    isLoggedIn,
    errorMessage,
  };
};
