import React, { useState, useEffect } from "react";
import PaymentsCheck from "../PaymentsCheck";
import AdminUsePoint from "../AdminUsePoint";
import AdminChargePoint from "../AdminChargePoint";
import * as C from "../ChargeComplete/style";
import * as _ from "./style";
import axiosInstance from "utils/Axios";
import * as P from "common/PageWrapStyle";

import ChargeCheck from "../ChargeCheck";
import { color } from "constants/color";

const Payments = () => {
  const TextColor = "#8A8A8A";

  const [state, setState] = useState({
    charger: localStorage.getItem("adminname"),
    clientname: "",
    clientpoint: "",
    point: "",
    code_number: localStorage.getItem("clientbarcode"),
    errorMessage: "",
  });
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const { stName, nowPoint } = await sendBarcode(state.code_number);
        setState((prevState) => ({
          ...prevState,
          clientname: stName,
          clientpoint: nowPoint,
        }));
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };
    fetchUserInfo();
  }, [state.code_number]);

  const sendBarcode = async (barcode) => {
    try {
      const response = await axiosInstance.post("/admin/barcode", {
        code_number: barcode,
      });
      return {
        stName: response.data.studentname,
        nowPoint: response.data.point,
        message: response.data.message,
      };
    } catch (error) {
      throw error;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    const isNumeric = /^\d+$/; // 숫자만 포함하는 정규 표현식
    if (name === "point" && (!isNumeric.test(value) || parseInt(value, 10) < 1)) {
      setState(prevState => ({
        ...prevState,
        point: "자연수로 입력해주세요", // 오류 메시지를 `point`에 설정
        errorMessage: "point value error" // 오류 메시지 설정 (이것은 선택적입니다. 필요에 따라 사용하거나 제거할 수 있습니다.)
      }));
  
      setTimeout(() => {
        setState(prevState => ({
          ...prevState,
          point: "",
          errorMessage: ""
        }));
      }, 2000);
      return;
    }
  
    setState(prevState => ({
      ...prevState,
      [name]: value,
      errorMessage: ""
    }));
    console.log(state);
  };

  return (
    <>
      <P.InfoContainer>
          <C.StudentInfo>
            <C.InfoText color={color.default}>학생 정보</C.InfoText>
            <C.StudentInfoDetail>
              <C.InfoText>이름 : {state.clientname}</C.InfoText>
            </C.StudentInfoDetail>
          </C.StudentInfo>

          <C.ExChangeDetailWrap
            width={"900px"}
            paddingTop={"10px"}
            marginTop={"5px"}
          >
            <C.InfoText color={color.default}>남은 금액</C.InfoText>
            <C.Exchange fontSize={"30px"} fontWeight={"700"}>
              {state.clientpoint.toLocaleString()}원
            </C.Exchange>
          </C.ExChangeDetailWrap>
          <_.PointWrap>
            <_.PointInTop>
              <C.InfoText color={TextColor}>포인트</C.InfoText>
              <_.PointInput
                name="point"
                value={state.point.toLocaleString()}
                onChange={handleChange}
                isError={!!state.errorMessage} // 에러 메시지가 있으면 true, 아니면 false
              />
            </_.PointInTop>

            <_.PointBottom>
              <_.NumberInput
                placeholder={state.charger}
                name="charger"
                value={state.charger}
                onChange={handleChange}
              />
              <ChargeCheck state={state} />
              <PaymentsCheck state={state} />
            </_.PointBottom>
          </_.PointWrap>

          <C.InfoText>사용내역</C.InfoText>
          <_.UseLogWrap>
            <_.rightWrap>
              <li>
                <AdminUsePoint />
              </li>
            </_.rightWrap>
            <_.leftWrap>
              <li>
                <AdminChargePoint />
              </li>
            </_.leftWrap>
          </_.UseLogWrap>
      </P.InfoContainer>
    </>
  );
};

export default Payments;
