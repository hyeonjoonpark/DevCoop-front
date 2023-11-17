import React, { useState } from "react";
import Modal from "components/Modal";
import { ReactComponent as QuestionLogo } from "assets/QuestionLogo.svg";
import { useNavigate } from "react-router-dom";
import * as _ from "./style";

import { handleCharge } from "utils/Charge"
const ChargeCheck = ({ state }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const plusPoint = parseInt(state.point);
  const completePage = (chargeData) => {
    // chargeData를 필요한대로 사용하여 state에 전달
    navigate("/admin/chargecomplete", { 
      state: { 
        id: state.charger, 
        chargeData: chargeData  // 예시로 chargeData를 전달
      } 
    });
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  
  const onCharge = () => {
    handleCharge({
      charger: state.charger,
      code_number: state.code_number,
      point: state.point
    }).then(chargeData => {
      // 충전이 성공적으로 완료되었다면 completePage를 호출
      completePage(chargeData);
    }).catch(error => {
      console.error(error);
      alert("충전 중 오류가 발생했습니다.");
    });
  };

  return (
    <>
      <button style={{ marginRight: "10px" }} onClick={openModal}>
        충전
      </button>
      <Modal isOpen={modalOpen}>
        <_.ContentWrap>
          <QuestionLogo style={{ width: "60px", height: "60px" }} />
          <_.ContentTitle>{plusPoint.toLocaleString()}원</_.ContentTitle>
          <_.ContentSubTitle>충전하시겠습니까?</_.ContentSubTitle>
        </_.ContentWrap>
        <_.BtnWrap>
          <button onClick={onCharge}>네</button>
          <button onClick={closeModal}>아니오</button>
        </_.BtnWrap>
      </Modal>
    </>
  );
};

export default ChargeCheck;