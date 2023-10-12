import React, { useState } from "react";
import styled from "styled-components";
import imgLogo from "../../assets/DevCoopL.svg";
import Modal from "../Modal";
import * as _ from "./style";
import { useNavigate } from 'react-router-dom';

export const StockBarcode = () => {
  const [barcode, setBarcode] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  // 모달창 노출
  const showModal = (e) => {
// 페이지 새로고침 방지
    setModalOpen(true);
  };

  // "네" 버튼 클릭 시 모달을 닫지 않도록
  const handleYesClick = () => {
    setModalOpen(false); // 모달을 닫음
    // 네 버튼 클릭 시 수행할 작업 추가
  };

  return (
    <BarcodeWrap>
      <BarcodeIn>
        <LogoImg src={imgLogo} alt='logo image' />
        <BarcodeInput
          placeholder="상품번호를 스캔해주세요"
          type="password"
          autoFocus
        />
        <br />
        <div>
          <ConfirmButton type = "button" onClick={showModal}>확인</ConfirmButton>
        </div>
        <Modal isOpen={modalOpen}>
          <_.ContentWrap> 
            모다라먹겠네
          </_.ContentWrap>
          <_.BtnWrap>
            <_.Infobutton mRight={"10px"}>등록</_.Infobutton>
            <_.Infobutton mRight={"10px"}>손실</_.Infobutton>
            <_.Infobutton>취소</_.Infobutton>
          </_.BtnWrap>
        </Modal>
      </BarcodeIn>
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
