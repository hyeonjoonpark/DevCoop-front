import React from "react";
import imgLogo from "../../assets/AriPayL.svg";
import styled from "styled-components";
import { useAuth } from "../../hooks/useAuth";

function Login() {
  const {
    email,
    password,
    handleInputId,
    handleInputPw,
    handleSubmit,
  } = useAuth();

  return (
    <div>
      {
        <LoginWrap onSubmit={handleSubmit}>
          <LogoImg src={imgLogo} alt="logo image" />
          <LoginInput
            type="email"
            name="email"
            value={email}
            onChange={handleInputId}
            placeholder="아이디를 입력해주세요"
          />
          <LoginInput
            type="password"
            name="password"
            value={password}
            onChange={handleInputPw}
            placeholder="비밀번호를 입력해주세요"
          />
          <LoginButton>로그인</LoginButton>
        </LoginWrap>
      }
    </div>
  );
}

export default Login;

const LogoImg = styled.img`
  height: 130px;
  margin-bottom: 30px;
`;

const LoginWrap = styled.form`
  margin: 0 auto;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 600px;
`;

const LoginInput = styled.input`
  width: 500px;
  height: 50px;
  border: none;
  border-bottom: 2px solid #d3d3d3;
  border-radius: 0%;
`;

const LoginButton = styled.button`
  width: 500px;
  margin-top: 20px;
  background-color: #f5d410;
`;
