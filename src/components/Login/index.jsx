import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import imgLogo from "../../assets/AriPayL.svg";
import { useAuth } from "../../context/authContext";
import * as L from "./style";
  
function Login() {
  const navigate = useNavigate();
  const { 
    unifiedLogin, 
    errorMessage
  } = useAuth();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await unifiedLogin(email, password, navigate);
    } catch (error) {
      console.error("Login component error:", error);
    }
  };

  return (
    <div>
        <L.LoginWrap onSubmit={handleSubmit}>
          <L.LogoImg src={imgLogo} alt="logo image" />
          <L.LoginInput
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            placeholder="이메일 주소를 입력해주세요"
          />
          <L.LoginInput
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            placeholder="비밀번호를 입력해주세요"
          />
          <L.LoginButton>로그인</L.LoginButton>
        </L.LoginWrap>
        {errorMessage && (
          <L.ModalOverlay>
            <L.ModalContent>
              {errorMessage}
            </L.ModalContent>
          </L.ModalOverlay>
        )}
    </div>
  );
}

export default Login;
