import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../axios";

export const useAuth = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const refreshtoken = localStorage.getItem("refreshtoken");

    if (token || refreshtoken) {
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
      const { token, refreshtoken, name, point, message } = await login(
        email,
        password
      );
      // const { acctoken } = await checkToken("token");
      localStorage.setItem("token", token);
      localStorage.setItem("refreshtoken", refreshtoken);
      // setIsLoggedIn((prev) => !prev); // 로그인 성공 시 isLoggedIn을 true로 설정
      console.log(name, point, message, isLoggedIn);
      navigate("/");
    } catch (error) {
      console.log("로그인에 실패했습니다.", error);
    }
  };

  const handleLogout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshtoken");
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
