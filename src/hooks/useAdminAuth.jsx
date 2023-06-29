import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminlogin } from "../axios";

export const useAdminAuth = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const access = localStorage.getItem("access");
    const refresh = localStorage.getItem("refresh");

    if (access && refresh) {
      setIsLoggedIn(true); // 로그인 성공 시 isLoggedIn을 true로 설정
    } else {
      setIsLoggedIn(false);
    }
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
      const { access, refresh, name, point, message } = await adminlogin(
        email,
        password
      );
      localStorage.setItem("access", access);
      localStorage.setItem("refresh", refresh);
      // setIsLoggedIn((prev) => !prev); // 로그인 성공 시 isLoggedIn을 true로 설정
      console.log(name, point, message, isLoggedIn);
      window.location.replace("/payments")
    } catch (error) {
      console.log("로그인에 실패했습니다.", error);
    }
  };

  const handleLogout = (e) => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setIsLoggedIn(false);
    window.location.replace("/")
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