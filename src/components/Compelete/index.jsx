import React from "react";
import { ReactComponent as CheckLogo } from "../../assets/CheckLogo.svg";
import { useNavigate, useLocation } from "react-router-dom";
import * as _ from "./style";
import { color } from "../../constants/color";

const Compelete = () => {

  const location = useLocation();
  const navigate = useNavigate();
  // localStorage.removeItem("clientname")
  // localStorage.removeItem("clientpoint")
  // localStorage.removeItem("clientbarcode")
  // console.log(location.state.state);
//    charger: localStorage.getItem("adminname"),
// clientname : localStorage.getItem("clientname"),
// clientpoint : localStorage.getItem("clientpoint"),
// pluspoint: '',
// code_number: localStorage.getItem("clientbarcode"),

  const name = localStorage.getItem("adminname");

  // const getAllinfo = () => {
  //   const response = axios.get('/',{

  //   });

  // }

  const GoBack = () => {
    navigate("/barcode");
  };
  return (
    <>
      <_.CompeleteWrap>
        <_.PaymentsTopWrap>
          <CheckLogo style={{ width: "70px", height: "70px" }} />

          <_.PaymentsTopTitle>??원</_.PaymentsTopTitle>

          {location.isCharge === true ? (
            <_.PaymentsTopSubTitle>충전완료</_.PaymentsTopSubTitle>
          ) : (
            <_.PaymentsTopSubTitle>결제완료</_.PaymentsTopSubTitle>
          )}
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
              <_.Exchange>??</_.Exchange>
            </_.ExChangeDetailWrap>

            <_.ExChangeDetailWrap>
              {location.isCharge === true ? (
                <_.InfoText color={color.default}>충전금액</_.InfoText>
              ) : (
                <_.InfoText color={color.default}>결제금액</_.InfoText>
              )}

              <_.Exchange>??원</_.Exchange>
            </_.ExChangeDetailWrap>

            <_.ExChangeDetailWrap
              paddingTop={"10px"}
              marginTop={"5px"}
              border={`1px solid #D3D3D3`}
            >
              <_.InfoText color={color.default}>잔액</_.InfoText>
              <_.Exchange fontSize={"30px"} fontWeight={"700"}>
                ???원
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
