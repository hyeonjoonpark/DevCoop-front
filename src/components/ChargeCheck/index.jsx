import React, { useState } from "react";
import Modal from "../Modal";
import { ReactComponent as QuestionLogo } from "../../assets/QuestionLogo.svg";
import { useNavigate } from "react-router-dom";
import * as _ from "./style";

const ChargeCheck = ({props}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate();

  const compeletePage = () => {
    navigate("/compelete", { isCharge: true });
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <button style={{ marginRight: "10px" }} onClick={openModal}>
        충전
      </button>
      <Modal isOpen={modalOpen}>
        <_.ContentWrap>
          <QuestionLogo style={{ width: "60px", height: "60px" }} />
          <_.ContentTitle props={props}>{props}원</_.ContentTitle>
          <_.ContentSubTitle>충전하시겠습니까?</_.ContentSubTitle>
        </_.ContentWrap>
        <_.BtnWrap>
          <button onClick={compeletePage}>네</button>
          <button onClick={closeModal}>아니오</button>
        </_.BtnWrap>
      </Modal>
    </>
  );
};

export default ChargeCheck;
