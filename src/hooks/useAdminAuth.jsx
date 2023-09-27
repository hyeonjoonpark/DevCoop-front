import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../axios";

export const adminlogin = async (email, password) => {
  try {
    const response = await axiosInstance.post("/admin/login", {
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

export const useAdminAuth = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(document.cookie.includes('isAdminLoggedIn'));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // 모달에 표시될 에러 메시지

  useEffect(() => {
    setIsLoggedIn(document.cookie.includes('isAdminLoggedIn')); 
  }, []);

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
      navigate("/admin");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage("아이디 혹은 암호가 잘못되었습니다");
      } else {
        setErrorMessage("내부 서버 오류");
      }
      setTimeout(() => setErrorMessage(""), 3000);
    }
  };

  const handleModalClose = () => {
    setErrorMessage("");
  };

  const handleLogout = async () => {
    try {
      await axiosInstance.post("/logout");
      setIsLoggedIn(false);
      navigate("/admin/login");
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
    errorMessage, 
    handleModalClose 
  };
};
