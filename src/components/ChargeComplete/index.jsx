import React, { useEffect, useState } from "react";
import { ReactComponent as CheckLogo } from "../../assets/CheckLogo.svg";
import { useNavigate, useLocation } from "react-router-dom";
import * as _ from "./style";
import { color } from "../../constants/color";

const ChargeComplete = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const chargeDataFromState = location.state?.chargeData || {};

  const [inner, setInner] = useState(null);
  const [oldpoint, setOldPoint] = useState(null);
  const [newPoint, setNewPoint] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {

    // console.log(chargeDataFromState)
    setName(chargeDataFromState.student_name);
    setInner(chargeDataFromState.plusPoint);
    setOldPoint(chargeDataFromState.oldPoint);
    setNewPoint(chargeDataFromState.newPoint);
  }, []);

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

          <_.PaymentsTopTitle>{inner}원</_.PaymentsTopTitle>
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
              <_.Exchange>{oldpoint}원</_.Exchange>
            </_.ExChangeDetailWrap>

            <_.ExChangeDetailWrap>
              <_.InfoText color={color.default}>충전금액</_.InfoText>
              <_.Exchange>{inner}원</_.Exchange>
            </_.ExChangeDetailWrap>

            <_.ExChangeDetailWrap
              paddingTop={"10px"}
              marginTop={"5px"}
              border={`1px solid #D3D3D3`}
            >
              <_.InfoText color={color.default}>남은금액</_.InfoText>
              <_.Exchange fontSize={"30px"} fontWeight={"700"}>
                {newPoint}원
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
