import PaymentsCheck from "../PaymentsCheck";
import AdminUsePoint from "../AdminUsePoint";
import AdminChargePoint from "../AdminChargePoint";
import * as C from "../ChargeComplete/style";
import * as _ from "./style";
// import * as U from "../Userlog/style";
import ChargeCheck from "../ChargeCheck";
import { useState } from "react";
import { color } from "../../constants/color";

const Payments = () => {
  const TextColor = "#8A8A8A";

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
    console.log(state);
  };
  return (
    <C.CompeleteWrap>
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
    </C.CompeleteWrap>
  );
};

export default Payments;
