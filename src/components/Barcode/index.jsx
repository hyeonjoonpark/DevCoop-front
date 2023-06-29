import React from "react";
import styled from "styled-components";
import imgLogo from "../../assets/AriPayL.svg"
import axios from "axios";

export const Barcode = () => {
  const url = "http://10.1.1.5/api";

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <BarcodeWrap>
      <BarcodeIn>
        <LogoImg src={imgLogo} alt='logo image' />
        <BarcodeInput
          placeholder="바코드를 스캔해주세요"
          onSubmit={handleChange}
          type="password"
          autoFocus
        />
        <br />
        <ConfirmButton>확인</ConfirmButton>
      </BarcodeIn>
    </BarcodeWrap>
  );
};

const BarcodeWrap = styled.div`
  width: 100%;
  height: 600px;
`;

const BarcodeIn = styled.div`
  margin: 0 auto;
  width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BarcodeInput = styled.input`
  width: 500px;
  height: 50px;
  border: none;
  border-bottom: 2px solid #D3D3D3;
  border-radius: 0%;
`;


const ConfirmButton = styled.button`
  width: 500px;
`;

const LogoImg = styled.img`
  height: 130px;
  margin-bottom: 30px;
`;