import React, { useState } from "react";
import Modal from "../Modal";
import { ReactComponent as QuestionLogo } from "../../assets/QuestionLogo.svg";
import { useNavigate } from "react-router-dom";
import * as _ from "./style";
import { axiosInstance } from "../../axios";

const ChargeCheck = ({ state }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

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

  const handleCharge = () => {
    axiosInstance.post(`/admin/charge`, {
      charger: state.charger,
      plusPoint: state.point,
      code_number: state.code_number,
    })
    .then((chargeResponse) => {
      const chargeData = chargeResponse.data;
      // console.log(chargeData);
      
      // 충전이 성공적으로 완료되었다면 completePage를 호출
      completePage(chargeData);
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
          <button onClick={handleCharge}>네</button>
          <button onClick={closeModal}>아니오</button>
        </_.BtnWrap>
      </Modal>
    </>
  );
};

export default ChargeCheck;