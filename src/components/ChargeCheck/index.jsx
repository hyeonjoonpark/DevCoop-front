import React, { useState } from "react";
import Modal from "../Modal";
import { ReactComponent as QuestionLogo } from "../../assets/QuestionLogo.svg";
import { useNavigate } from "react-router-dom";
import * as _ from "./style";
import axios from "axios";

const ChargeCheck = ({charger}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const url = "http://10.1.1.5/api";

  const navigate = useNavigate();

  const compeletePage = ({pluspoint}) => {
    navigate("/compelete", { isCharge: true });
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleCharge = () => {
    axios.post(`${url}/charge`,{
      charger: charger,
      plusPoint: "2",
      code_number: "01024502415",
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
          <_.ContentTitle>{charger}원</_.ContentTitle>
          <_.ContentSubTitle>충전하시겠습니까?</_.ContentSubTitle>
        </_.ContentWrap>
        <_.BtnWrap>
          <button onClick={() => {compeletePage({charger}); handleCharge();}}>네</button>
          <button onClick={closeModal}>아니오</button>
        </_.BtnWrap>
      </Modal>
    </>
  );
};

export default ChargeCheck;
