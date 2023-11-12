import React, { useEffect, useState } from "react";
import { ReactComponent as CheckLogo } from "assets/CheckLogo.svg";
import { useNavigate, useLocation } from "react-router-dom";
import * as _ from "./style";
import { color } from "constants/color";

const ChargeComplete = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const chargeDataFromState = location.state?.chargeData || {};

  const inner = chargeDataFromState.plusPoint;
  const oldpoint = chargeDataFromState.oldPoint
  const newPoint = chargeDataFromState.newPoint
  const name = chargeDataFromState.student_name

  const GoBack = () => {
    navigate("/admin/payments");
  };
  const GoBackBarcode = () => {
    navigate("/admin/barcode");
  };
  
  return (
    <>
      <_.CompeleteWrap>
        <_.PaymentsTopWrap>
          <CheckLogo style={{ width: "70px", height: "70px" }} />

          <_.PaymentsTopTitle>{inner.toLocaleString()}원</_.PaymentsTopTitle>
          <_.PaymentsTopSubTitle>충전완료</_.PaymentsTopSubTitle>
        </_.PaymentsTopWrap>

        <_.PaymentsBottomWrap>
          <_.StudentInfo>
            <_.InfoText color={color.default}>학생정보</_.InfoText>
            <_.StudentInfoDetail>
              <_.InfoText>이름 : {name}</_.InfoText>
            </_.StudentInfoDetail>
          </_.StudentInfo>

          <_.ExChangeWrap>
            <_.ExChangeDetailWrap marginTop={"30px"}>
              <_.InfoText color={color.default}>원래금액</_.InfoText>
              <_.Exchange>{oldpoint.toLocaleString()}원</_.Exchange>
            </_.ExChangeDetailWrap>

            <_.ExChangeDetailWrap>
              <_.InfoText color={color.default}>충전금액</_.InfoText>
              <_.Exchange>{inner.toLocaleString()}원</_.Exchange>
            </_.ExChangeDetailWrap>

            <_.ExChangeDetailWrap
              paddingTop={"10px"}
              marginTop={"5px"}
              border={`1px solid #D3D3D3`}
            >
              <_.InfoText color={color.default}>남은금액</_.InfoText>
              <_.Exchange fontSize={"30px"} fontWeight={"700"}>
                {newPoint.toLocaleString()}원
              </_.Exchange>
            </_.ExChangeDetailWrap>
          </_.ExChangeWrap>
        </_.PaymentsBottomWrap>
        <_.GoBackBtn onClick={GoBack}>추가 충전 및 결재</_.GoBackBtn>
        <br />
        <br />
        <_.GoBackBtn onClick={GoBackBarcode}>새 바코드</_.GoBackBtn>
      </_.CompeleteWrap>
    </>
  );
};

export default ChargeComplete;
