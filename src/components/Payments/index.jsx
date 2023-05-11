import React, { useState } from "react";
import Modal from "../Modal";
import { ReactComponent as QuestionLogo } from "../../assets/QuestionLogo.svg";
import * as _ from "./style";
import { useNavigate } from "react-router-dom";

const PaymentsCheck = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const navigate  = useNavigate();

  const compeletePage = () => {
    navigate('/compelete')
  }

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>결제</button>
      <Modal isOpen={modalOpen}>
        <_.ContentWrap>
          <QuestionLogo style={{ width: "60px", height: "60px" }} />
          <_.ContentTitle>3000원</_.ContentTitle>
          <_.ContentSubTitle>결제하시겠습니까?</_.ContentSubTitle>
        </_.ContentWrap>
        <_.BtnWrap>
          <button onClick={compeletePage}>네</button>
          <button onClick={closeModal}>아니오</button>
        </_.BtnWrap>
      </Modal>
    </div>
  );
};

export default PaymentsCheck;
