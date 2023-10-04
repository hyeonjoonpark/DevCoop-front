import React, { useState } from "react";
import Modal from "../Modal";
import * as _ from "./style";
import { axiosInstance } from "../../axios/index";
import ChargeCheck from "../ChargeCheck";
const StudentCharge = () => {
  const TextColor = "#8A8A8A";

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const [state, setState] = useState({
    charger: localStorage.getItem("adminname"),
    clientname: localStorage.getItem("clientname"),
    clientpoint: localStorage.getItem("clientpoint"),
    point: "",
    code_number: localStorage.getItem("clientbarcode"),
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    // console.log(state);
  };

  const handleCharge = () => {
    axiosInstance
      .post(`/admin/charge`, {
        charger: state.charger,
        changePoint: state.point,
        code_number: state.code_number,
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
      <_.Infobutton onClick={openModal}>일괄충전</_.Infobutton>
      <Modal isOpen={modalOpen}>
        <_.TitleWrap>
          <_.ContentTitle style={{ textAlign: "left" }}>
            선택한 학생들에게 포인트를 일괄 충전합니다.
          </_.ContentTitle>
        </_.TitleWrap>
        <_.String />
        <_.PointWrap>
          <_.PointInTop>
            <_.InfoText color={TextColor}>포인트</_.InfoText>
            <_.PointInput
              name="point"
              value={state.point.toLocaleString()}
              onChange={handleChange}
            />
          </_.PointInTop>
          <_.PointBottom>
            <_.NumberInput
              placeholder={state.charger}
              name="charger"
              value={state.charger}
              onChange={handleChange}
            />
          </_.PointBottom>
        </_.PointWrap>
        <_.BtnWrap>
          <button onClick={closeModal}>취소</button>
          <ChargeCheck state={state} />
        </_.BtnWrap>
      </Modal>
    </>
  );
};

export default StudentCharge;
