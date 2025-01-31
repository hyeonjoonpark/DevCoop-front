import React from "react";
import styled from "styled-components";
import imgLogo from "assets/DevCoopL.svg";
import { useEffect, useState } from "react";
import axiosInstance from "utils/Axios";
import { useNavigate } from 'react-router-dom';

export const sendBarcode = async (barcode) => {
  try {
    console.log(barcode);
    const response = await axiosInstance.post("/admin/barcode", {
      code_number: barcode,
    });
    return {
      stName: response.data.studentname,
      nowPoint: response.data.point,
      message: response.data.message,
    };
  } catch (error) {
    throw error;
  }
};


export const Barcode = () => {
  const [barcode, setBarcode] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    // console.log(e.target.value);
    setBarcode(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const { message } = await sendBarcode(barcode)
        console.log(message)
        localStorage.setItem("clientbarcode", barcode)
        navigate("/admin/payments"); // 네비게이트 서야 됨
    } catch (error) {
        console.log("바코드 인식에 실패했습니다.", error);
    }
};


  return (
    <BarcodeWrap>
      <BarcodeIn onSubmit={handleSubmit}>
      <div style={{fontSize:'27px',  marginBottom : '20px', textAlign:'center', fontWeight: 600, color: '#51515E'}}> 학생증 스캔 페이지</div>
        <LogoImg src={imgLogo} alt='logo image' />
        <BarcodeInput
          placeholder="바코드를 스캔해주세요"
          onChange={handleChange}
          type="password"
          autoFocus
        />
        <br />
        <ConfirmButton>확인</ConfirmButton>
      </BarcodeIn>
    </BarcodeWrap>
  );
};

export default Barcode;

const BarcodeWrap = styled.div`
  width: 100%;
  height: 600px;
`;

const BarcodeIn = styled.form`
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