import React from "react";
import { ReactComponent as CheckLogo } from "../../assets/CheckLogo.svg";
import * as _ from "./style";
import { useNavigate } from "react-router-dom";

const Compelete = () => {
  const TextColor = "#8A8A8A";
  const navigate = useNavigate();

  const GoBack = () => {
    navigate("/");
  };
  return (
    <>
      <_.CompeleteWrap>
        <_.PaymentsTopWrap>
          <CheckLogo style={{ width: "70px", height: "70px" }} />

          <_.PaymentsTopTitle>3000원</_.PaymentsTopTitle>
          <_.PaymentsTopSubTitle>결제완료</_.PaymentsTopSubTitle>
        </_.PaymentsTopWrap>

        <_.PaymentsBottomWrap>
          <_.StudentInfo>
            <_.InfoText color={TextColor}>학생정보</_.InfoText>
            <_.StudentInfoDetail>
              <_.InfoText>학번 : 2206</_.InfoText>
              <_.InfoText>이름 : 김알이</_.InfoText>
            </_.StudentInfoDetail>
          </_.StudentInfo>

          <_.ExChangeWrap>
            <_.ExChangeDetailWrap marginTop={"30px"}>
              <_.InfoText color={TextColor}>원래금액</_.InfoText>
              <_.Exchange>5000원</_.Exchange>
            </_.ExChangeDetailWrap>

            <_.ExChangeDetailWrap>
              <_.InfoText color={TextColor}>결제금액</_.InfoText>
              <_.Exchange>3000원</_.Exchange>
            </_.ExChangeDetailWrap>

            <_.ExChangeDetailWrap
              paddingTop={"10px"}
              marginTop={"5px"}
              border={`1px solid #D3D3D3`}
            >
              <_.InfoText color={TextColor}>잔액</_.InfoText>
              <_.Exchange fontSize={"30px"}>2000원</_.Exchange>
            </_.ExChangeDetailWrap>

          </_.ExChangeWrap>
        </_.PaymentsBottomWrap>

        <_.GoBackBtn onClick={GoBack}>돌아가기</_.GoBackBtn>
      </_.CompeleteWrap>
    </>
  );
};

export default Compelete;
