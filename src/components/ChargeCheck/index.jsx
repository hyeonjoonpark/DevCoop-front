import React, { useState } from "react";
import Modal from "../Modal";
import { ReactComponent as QuestionLogo } from "../../assets/QuestionLogo.svg";
import { useNavigate } from "react-router-dom";
import * as _ from "./style";
// import axios from "axios";
import {axiosInstance} from "../../axios/index"
const ChargeCheck = ({state}) => {
  console.log("ChargeCheck work")
  const State = state
  console.log(State)
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const compeletePage = () => {
    navigate("/compelete", { state: { id : State.charger} });
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleCharge = () => {
    axiosInstance.post(`/charge`,{
      charger: state.charger,
      plusPoint: state.point,
      code_number: state.code_number,
    })
    .then((result) => {
      console.log("요청성공")
      console.log(result)
    })
    .catch((error) => {
      console.log("요청실패")
      console.log(error)
    })
  };

  return (
    <>
      <button style={{ marginRight: "10px" }} onClick={openModal}>
        충전
      </button>
      <Modal isOpen={modalOpen}>
        <_.ContentWrap>
          <QuestionLogo style={{ width: "60px", height: "60px" }} />
          <_.ContentTitle>{state.point}원</_.ContentTitle>
          <_.ContentSubTitle>충전하시겠습니까?</_.ContentSubTitle>
        </_.ContentWrap>
        <_.BtnWrap>
          <button onClick={(state) => {compeletePage(state); handleCharge();}}>네</button>
          <button onClick={closeModal}>아니오</button>
        </_.BtnWrap>
      </Modal>
    </>
  );
};

export default ChargeCheck;
