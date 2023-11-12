import styled from "styled-components";

export const LogoImg = styled.img`
  height: 130px;
  margin-bottom: 30px;
`;

export const LoginWrap = styled.form`
  margin: 0 auto;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 600px;
`;

export const LoginInput = styled.input`
  width: 500px;
  height: 50px;
  border: none;
  border-bottom: 2px solid #d3d3d3;
  border-radius: 0%;
`;

export const LoginButton = styled.button`
  width: 500px;
  margin-top: 20px;
  background-color: #f5d410;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  width: 300px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
`;
