import React from "react";
import { ReactComponent as CheckLogo } from "../../assets/CheckLogo.svg";
import { useNavigate, useLocation } from "react-router-dom";
import * as _ from "./style";
import { color } from "../../constants/color";

const Compelete = ({state}) => {
  const isCharge = useLocation();

  const navigate = useNavigate();

  const GoBack = () => {
    navigate("/barcode");
  };
  return (
    <>
      <_.CompeleteWrap>
        <_.PaymentsTopWrap>
          <CheckLogo style={{ width: "70px", height: "70px" }} />

          <_.PaymentsTopTitle>{state}원</_.PaymentsTopTitle>

          {isCharge === true ? (
            <_.PaymentsTopSubTitle>충전완료</_.PaymentsTopSubTitle>
          ) : (
            <_.PaymentsTopSubTitle>결제완료</_.PaymentsTopSubTitle>
          )}
        </_.PaymentsTopWrap>

        <_.PaymentsBottomWrap>
          <_.StudentInfo>
            <_.InfoText color={color.default}>학생정보</_.InfoText>
            <_.StudentInfoDetail>
              <_.InfoText>학번 : 2206</_.InfoText>
              <_.InfoText>이름 : 김알이</_.InfoText>
            </_.StudentInfoDetail>
          </_.StudentInfo>

          <_.ExChangeWrap>
            <_.ExChangeDetailWrap marginTop={"30px"}>
              <_.InfoText color={color.default}>원래금액</_.InfoText>
              <_.Exchange>5000원</_.Exchange>
            </_.ExChangeDetailWrap>

            <_.ExChangeDetailWrap>
              {isCharge === true ? (
                <_.InfoText color={color.default}>충전금액</_.InfoText>
              ) : (
                <_.InfoText color={color.default}>결제금액</_.InfoText>
              )}

              <_.Exchange>{state}원</_.Exchange>
            </_.ExChangeDetailWrap>

            <_.ExChangeDetailWrap
              paddingTop={"10px"}
              marginTop={"5px"}
              border={`1px solid #D3D3D3`}
            >
              <_.InfoText color={color.default}>잔액</_.InfoText>
              <_.Exchange fontSize={"30px"} fontWeight={"700"}>
                2000원
              </_.Exchange>
            </_.ExChangeDetailWrap>
          </_.ExChangeWrap>
        </_.PaymentsBottomWrap>

        <_.GoBackBtn onClick={GoBack}>돌아가기</_.GoBackBtn>
      </_.CompeleteWrap>
    </>
  );
};

export default Compelete;
