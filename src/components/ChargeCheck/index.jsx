import React, { useState } from "react";
import Modal from "../Modal";
import { ReactComponent as QuestionLogo } from "../../assets/QuestionLogo.svg";
import { useNavigate } from "react-router-dom";
import * as _ from "./style";
import { axiosInstance } from "../../axios";

const ChargeCheck = ({ state }) => {
  console.log("ChargeCheck work");
  const State = state;
  console.log(State);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const completePage = () => {
    navigate("/studentinfo");
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleCharge = () => {
    const chargeLogPromise = axiosInstance.post(`/charge`, {
      charger: state.charger,
      plusPoint: state.point,
      code_number: state.code_number,
    });

    const allChargeLogPromise = axiosInstance.post(`/allcharge`, {
      charger: state.charger,
      plusPoint: state.point,
      code_number: state.code_number,
    });

    Promise.all([chargeLogPromise, allChargeLogPromise])
      .then(([chargeResponse, allChargeResponse]) => {
        // Handle chargeLogResponse.data to set date, point, inner_point, total states
        const chargeData = chargeResponse.data;
        const allChargeData = allChargeResponse.data;

        console.log(chargeData);
        console.log(allChargeData);
      })
      .catch((error) => {
        console.error(error);
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
          <_.ContentTitle>{state.point}원</_.ContentTitle>
          <_.ContentSubTitle>충전하시겠습니까?</_.ContentSubTitle>
        </_.ContentWrap>
        <_.BtnWrap>
          <button
            onClick={() => {
              handleCharge();
              completePage();
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

export default ChargeCheck;
