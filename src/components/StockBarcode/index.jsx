import React, { useState } from "react";
import styled from "styled-components";
import imgLogo from "../../assets/DevCoopL.svg";
import Modal from "../Modal";
import * as _ from "./style";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios";

export const StockBarcode = () => {
  const [barcode, setBarcode] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [itemInfo, setItemInfo] = useState(null); // 재고명을 저장할 상태
  //const [quantity, setQuantity] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  
  const sendBarcode = async (barcode, quantity) => {
    try {
      const response = await axiosInstance.post("/admin/addItemBarcode", {
        barcode,
        quantity,
      });
      navigate("/admin/stockinfo");
      // return response.data;
    } catch (error) {
      console.error("Error in sendBarcode:", error);
    }
  };

  const handleAddItem = async () => {
    try {
      await sendBarcode(barcode, quantity);
      setModalOpen(false);
      setItemInfo(null);
      setQuantity("");
    } catch (error) {
      console.error("등록 중 오류가 발생했습니다.", error);
    }
  };

  const showModal = async () => {
    try {
      const response = await axiosInstance.get(
        `/admin/addItemBarcode/${barcode}`
      );
      if (response.data.message === "바코드가 존재하지 않습니다.") {
        //console.log("바코드가 존재하지 않습니다.");
        setItemInfo("바코드가 존재하지 않습니다.");
        setModalOpen(true);
      } else {
        console.log("바코드가 정상적으로 입력되었습니다.");
        setItemInfo(response.data.name);
        setModalOpen(true);
      }
      setModalOpen(true);
    } catch (error) {
      console.error("Error in showModal:", error);
      setErrorMessage("바코드 인식에 실패했습니다.");

      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }
  };

const handleRemoveItem = async () => {
  try {
    if (quantity !== "" && Number(quantity) > 0) {
      const response = await axiosInstance.post("/admin/removedItemBarcode", {
        barcode,
        quantity,
      });

      if (response.data.success) {
        console.log("상품이 손실 처리되었습니다.");
        setQuantity("");
      } else {
        console.error("상품 손실 처리 중 오류가 발생했습니다.");
      }
    } else {
      console.error("유효하지 않은 수량을 입력하셨습니다.");
    }
  } catch (error) {
    console.error("등록 중 오류가 발생했습니다.", error);
  }
};
  const stockinfo = () => {
    navigate("/admin/stockinfo");
  };

  const handleChange = (e) => {
    setBarcode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message, name } = await sendBarcode(barcode, quantity);
      if (message === "바코드가 존재하지 않습니다.") {
        showModal();
      } else {
        setItemInfo(name);
        localStorage.setItem("itembarcode", barcode);
        showModal();
      }
      //setItemInfo(message); // 서버 응답에서 재고명을 추출하여 상태에 저장
    } catch (error) {
      console.log("바코드 인식에 실패했습니다.", eror);
    }
  };

  const handleYesClick = () => {
    setModalOpen(false);
    setItemInfo(null);
  };

  const handleQuantityChange = (e) => {
    //console.log(e.target.value);
    setQuantity(e.target.value);
  };

  return (
    <BarcodeWrap>
      <BarcodeIn onSubmit={handleSubmit}>
        <div
          style={{
            fontSize: "32px",
            marginTop: "20px",
            textAlign: "center",
            fontWeight: 600,
          }}
        >
          재고 등록 페이지
        </div>
           <LogoImg src={imgLogo} alt="logo image" onClick={stockinfo} />
        <BarcodeInput
          placeholder="상품 바코드를 입력해주세요"
          type="password"
          onChange={handleChange}
          value={barcode}
          autoFocus
        />
        <br />
        <div>
          <ConfirmButton type="button" onClick={showModal}>
            확인
          </ConfirmButton>
        </div>
      </BarcodeIn>
      {errorMessage && (
        <_.ModalOverlay>
          <_.ModalContent>{errorMessage}</_.ModalContent>
        </_.ModalOverlay>
      )}
      {modalOpen && (
        <Modal isOpen={modalOpen}>
          <_.ContentWrap>
            <_.InfoHeader>
              <_.ContentTitle>{itemInfo}</_.ContentTitle>
            </_.InfoHeader>
            <_.InfoBody>
              <_.InfoText>수량</_.InfoText>
              <_.InfoInput
                name="quantity"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </_.InfoBody>
          </_.ContentWrap>

          <_.BtnWrap>
            <_.Infobutton mRight={"10px"} onClick={handleAddItem}>
              등록
            </_.Infobutton>
            <_.Infobutton mRight={"10px"} onClick={handleRemoveItem}>
              손실
            </_.Infobutton>
            <_.Infobutton onClick={handleYesClick}>취소</_.Infobutton>
          </_.BtnWrap>
        </Modal>
      )}
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
  border-bottom: 2px solid #d3d3d3;
  border-radius: 0%;
  value: ${(props) => props.value || ""};
`;

const ConfirmButton = styled.button`
  width: 500px;
`;

const LogoImg = styled.img`
  height: 130px;
  margin-bottom: 30px;
`;