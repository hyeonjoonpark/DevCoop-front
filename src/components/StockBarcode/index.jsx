import React, { useState } from "react";
import styled from "styled-components";
import imgLogo from "../../assets/DevCoopL.svg";
import Modal from "../Modal";
import * as _ from "./style";
import { useNavigate } from 'react-router-dom';

export const sendBarcode = async (barcode) => {
  try {
    const response = await axiosInstance.post("/admin/addItemBarcode", {
      barcode: barcode,
    });
    return response.data; // 서버에서 반환하는 데이터를 반환
  } catch (error) {
    throw error;
  }
};

export const StockBarcode = () => {
  const [barcode, setBarcode] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [itemInfo, setItemInfo] = useState(null); // 재고명을 저장할 상태

  const handleChange = (e) => {
    setBarcode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await sendBarcode(barcode);
      setItemInfo(message); // 서버 응답에서 재고명을 추출하여 상태에 저장
      localStorage.setItem("itembarcode", barcode);
      showModal();
    } catch (error) {
      console.log("바코드 인식에 실패했습니다.", error);
    }
  };

  const showModal = () => {
    setModalOpen(true);
  };

  const handleYesClick = () => {
    setModalOpen(false);
    setItemInfo(null); // 모달 닫을 때 재고명 상태 초기화
  };

  return (
    <BarcodeWrap>
      <BarcodeIn onSubmit={handleSubmit}>
        <LogoImg src={imgLogo} alt='logo image' />
        <BarcodeInput
          placeholder="상품번호를 스캔해주세요"
          type="password"
          onChange={handleChange}
          autoFocus
        />
        <br />
        <div>
          <ConfirmButton type="button" onClick={showModal}>확인</ConfirmButton>
        </div>
      </BarcodeIn>
      <Modal isOpen={modalOpen}>
        <_.ContentWrap>
          <_.InfoHeader>
            <_.ContentTitle>{itemInfo}</_.ContentTitle>
          </_.InfoHeader>
          <_.InfoBody>
            <_.InfoText>수량</_.InfoText>
            <_.InfoInput/>
          </_.InfoBody>
        </_.ContentWrap>
        <_.BtnWrap>
          <_.Infobutton mRight={"10px"}>등록</_.Infobutton>
          <_.Infobutton mRight={"10px"}>손실</_.Infobutton>
          <_.Infobutton onClick={handleYesClick}>취소</_.Infobutton>
        </_.BtnWrap>
      </Modal>
    </BarcodeWrap>
  );
};

export default StockBarcode;

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
