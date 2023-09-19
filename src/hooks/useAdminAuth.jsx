import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../axios";

export const adminlogin = async (email, password) => {
  try {
    const response = await axiosInstance.post("/admin/login", {
      email: email,
      password: password,
    });
    // access와 refresh 토큰은 서버에서 쿠키로 설정되므로 여기에서 반환할 필요가 없습니다.
    return {
      name: response.data.name,
      point: response.data.point,
      message: response.data.message,
    };
  } catch (error) {
    throw error;
  }
};

export const useAdminAuth = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Check if user is logged in by trying to access a protected resource or endpoint
    // Alternatively, server could return isLoggedIn status
    // Here I'm assuming it's based on the presence of cookies.
    // If cookies are not present or invalid, server should handle it.
    setIsLoggedIn(document.cookie.includes('isAdminLoggedIn')); 
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
      const { name, point, message } = await adminlogin(email, password);
      localStorage.setItem("adminname", name);
      navigate("/studentinfo"); // React Router의 navigate를 사용하여 페이지 리다이렉트
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleLogout = async () => {
    // 서버에 로그아웃 요청을 보내 쿠키를 제거합니다.
    try {
      await axiosInstance.post("/logout");
      setIsLoggedIn(false);
      navigate("/admin");
    } catch (error) {
      console.error("Logout error:", error);
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
  };
};
