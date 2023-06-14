import React, { useState } from "react";
import imgLogo from "../../assets/AriPayL.svg";
import styled from "styled-components";
import axios from "axios";

function Login ()  {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const handleInputId = (e) => {
    setInputId(e.target.value)
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value)
  };

    
  const onClickLogin = () => {
    const url = "http://10.129.57.252:6002/api/login";
    const data = {
      'email' : inputId,
      'password' : inputPw
    };
    const config = {"Contest-Type": 'application/json'};
    console.log('click login')
    console.log('ID : ', inputId)
    console.log('PW : ', inputPw)
    axios.post(url, null, {
      params: {
      'email': inputId,
      'password': inputPw
      }
  })
    .then(res => console.log(res))
    .catch()
  }
  return (
    <div>
      {
        <LoginWrap>
          <LogoImg src={imgLogo} alt='logo image' />
          <LoginInput type = 'email' name='input_id' value={inputId} onChange={handleInputId}
          placeholder="아이디를 입력해주세요"/>
          <LoginInput type = 'password' name='input_pw' value={inputPw} onChange={handleInputPw}
          placeholder="비밀번호를 입력해주세요"/>
          <LoginButton onClick ={onClickLogin}>로그인</LoginButton>
        </LoginWrap>
      }
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