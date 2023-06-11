import React from "react";
import useLogin from "../../hooks/useLogin";
import imgLogo from "../../assets/AriPayL.svg";
import styled from "styled-components";

const Login = () => {
  const { isLoggedIn, userData, handleGoogleLogin, handleGoogleLogout } = useLogin();

  return (
    <div>
      {isLoggedIn && userData ? (
        <button onClick={handleGoogleLogout}>로그아웃</button>
      ) : (
        <LoginWrap>
          <LogoImg src={imgLogo} alt='logo image' />
          <LoginInput
          placeholder="아이디를 입력해주세요"/>
          <LoginInput
          placeholder="비밀번호를 입력해주세요"/>
          <LoginButton onClick={handleGoogleLogin}>로그인</LoginButton>
        </LoginWrap>
      )}

      {userData ? userData.displayName : null}
    </div>
  );
};

export default Login;

const LogoImg = styled.img`
  height: 130px;
  margin-bottom: 30px;
`;

const LoginWrap = styled.div`
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
  border-bottom: 2px solid #D3D3D3;
  border-radius: 0%;
`;


const LoginButton = styled.button`
  width: 500px;
  margin-top: 20px;
  background-color: #F5D410;
`;