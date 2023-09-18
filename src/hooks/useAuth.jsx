import { useEffect, useState } from "react";
import { axiosInstance } from "../axios";


export const login = async (email, password) => {
  try {
    const response = await axiosInstance.post("/login", {
      email: email,
      password: password,
    });
    return {
      access: response.data.accToken,
      refresh: response.data.refToken,
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
      const { access, refresh, name, point, message } = await login(
        email,
        password
      );
      localStorage.setItem("access", access);
      localStorage.setItem("refresh", refresh);
      localStorage.setItem("clientname", name);
      // setIsLoggedIn((prev) => !prev); // 로그인 성공 시 isLoggedIn을 true로 설정
      console.log(name, point, message, isLoggedIn);
      window.location.replace("/");
    } catch (error) {
      throw error;
    }
  };

  const handleLogout = (e) => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("clientbarcode");
    localStorage.removeItem("clientpoint");
    localStorage.removeItem("adminname");
    localStorage.removeItem("clientname");
    setIsLoggedIn(false);
    window.location.replace("/");
  };

  const handleAdminLogout = (e) => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("clientbarcode");
    localStorage.removeItem("clientpoint");
    localStorage.removeItem("adminname");
    localStorage.removeItem("clientname");
    setIsLoggedIn(false);
    window.location.replace("/adminLogin");
  }

  return {
    email,
    password,
    handleInputId,
    handleInputPw,
    handleSubmit,
    handleLogout,
    isLoggedIn,
    handleAdminLogout,
  };
};
