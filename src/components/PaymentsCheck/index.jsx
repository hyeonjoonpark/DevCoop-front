import React, { useState } from "react";
import Modal from "../Modal";
import { ReactComponent as QuestionLogo } from "../../assets/QuestionLogo.svg";
import { useNavigate } from "react-router-dom";
import * as _ from "./style";
import axiosInstance from "../../axios";

const PaymentsCheck = ({ state }) => {
  console.log("PaymentsCheck work");
  const State = state;
  console.log(State);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const compeletePage = () => {
    navigate("/paycomplete", { state: { id: State.charger } });
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handlePay = () => {
    axiosInstance
      .post(`/pay`, {
        code_number: state.code_number,
        minusPoint: state.point,
        charger: state.charger,
      })
      .then((result) => {
        console.log("요청성공");
        console.log(result);
      })
      .catch((error) => {
        console.log("요청실패");
        console.log(error);
      });
  };

  return (
    <>
      <button onClick={openModal}>
        결제
      </button>
      <Modal isOpen={modalOpen}>
        <_.ContentWrap>
          <QuestionLogo style={{ width: "60px", height: "60px" }} />
          <_.ContentTitle>{state.point}원</_.ContentTitle>
          <_.ContentSubTitle>결제하시겠습니까?</_.ContentSubTitle>
        </_.ContentWrap>
        <_.BtnWrap>
          <button
            onClick={(state) => {
              compeletePage(state);
              handlePay();
            }}
          >
            네
          </button>
          <button onClick={closeModal}>아니오</button>
        </_.BtnWrap>
      </Modal>
    </>
  );
};

export default PaymentsCheck;
