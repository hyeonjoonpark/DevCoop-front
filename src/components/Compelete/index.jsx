import React, { useEffect , useState } from "react";
import { ReactComponent as CheckLogo } from "../../assets/CheckLogo.svg";
import { useNavigate, useLocation } from "react-router-dom";
import * as _ from "./style";
import { color } from "../../constants/color";
import axios from "axios";

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

const [data, setData] = useState(null);
const [inner, setInner] = useState(null);
const [minus, setMinus] = useState(null);
const [point, setPoint] = useState(null);
const [total, setTotal] = useState(null);
const id = localStorage.getItem("clientbarcode");

// useEffect(() => {
//   axios.get('http://10.1.1.5/api/chargecomplete',{
//     params: {
//       id:id
//     }  
//   })
//   .then(response => {
//     setData(response.data);
//     console.log(response.data);
//     setInner(response.data.inner_point);
//     setInner(response.data.);
//     setPoint(response.data.point);
//     setTotal(response.data.total);
//   })
//   .catch(error => {
//     console.error(error);
//   });
// },[]);

useEffect(() => {
  axios.get('http://10.1.1.5/api/paycomplete',{
    params: {
      id:id
    }  
  })
  .then(response => {
    setData(response.data);
    console.log(response.data);
    setInner(response.data.inner_point);
    setPoint(response.data.point);
    setTotal(response.data.total);
  })
  .catch(error => {
    console.error(error);
  });
},[]);

  

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

          <_.PaymentsTopTitle>{inner}원</_.PaymentsTopTitle>

          {location.isCharge === true ? (
            <_.PaymentsTopSubTitle>결제완료</_.PaymentsTopSubTitle>
          ) : (
            <_.PaymentsTopSubTitle>충전완료</_.PaymentsTopSubTitle>
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
              <_.Exchange>{point}원</_.Exchange>
            </_.ExChangeDetailWrap>

            <_.ExChangeDetailWrap>
              {location.isCharge === true ? (
                <_.InfoText color={color.default}>결제금액</_.InfoText>
              ) : (
                <_.InfoText color={color.default}>충전금액</_.InfoText>
              )}

              <_.Exchange>{inner}원</_.Exchange>
            </_.ExChangeDetailWrap>

            <_.ExChangeDetailWrap
              paddingTop={"10px"}
              marginTop={"5px"}
              border={`1px solid #D3D3D3`}
            >
              <_.InfoText color={color.default}>잔액</_.InfoText>
              <_.Exchange fontSize={"30px"} fontWeight={"700"}>
                {total}원
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
