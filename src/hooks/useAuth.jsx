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

export const logout = async () => {
  try {
    await axiosInstance.post("/logout"); // Assuming your server uses "/logout" endpoint for logout
  } catch (error) {
    throw error;
  }
};

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Check if user is logged in by trying to access a protected resource or endpoint
    // Alternatively, server could return isLoggedIn status
    // Here I'm assuming it's based on the presence of cookies.
    // If cookies are not present or invalid, server should handle it.
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
      console.log(name, point, message, isLoggedIn);
      window.location.replace("/");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleLogout = async (e) => {
    try {
      await logout();
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
  };
};
