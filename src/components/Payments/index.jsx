import PaymentsCheck from "../PaymentsCheck";
import UsePointLogItem from "../UsePointLogItem";
import ChargePointLogItem from "../ChargePointLogItem";
import * as C from "../Compelete/style";
import * as _ from "./style";
import * as U from "../Userlog/style";
import ChargeCheck from "../ChargeCheck";
import ChargePointLogItem from "../ChargePointLogItem";
import { useEffect, useState } from "react";


const Payments = ({code_number}) => {
  const TextColor = "#8A8A8A";
  const data = [1, 2, 3, 4];

  const [state, setState] = useState({
    charger: '',
    pluspoint: '',
    code_number: '',
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.value,
    })
    console.log(state);
  }
  return (
    <C.CompeleteWrap>
      <C.StudentInfo>
        <C.InfoText color={color.default}>학생정보</C.InfoText>
        <C.StudentInfoDetail>
          <C.InfoText>학번 : 2206</C.InfoText>
        </C.StudentInfoDetail>
      </C.StudentInfo>

      <C.ExChangeDetailWrap
        width={"900px"}
        paddingTop={"10px"}
        marginTop={"5px"}
      >
        <C.InfoText color={color.default}>잔액</C.InfoText>
        <C.Exchange fontSize={"30px"} fontWeight={"700"}>\
          5000원
        </C.Exchange>
      </C.ExChangeDetailWrap>
      <_.PointWrap>
        <_.PointInTop>
          <C.InfoText color={TextColor}>포인트</C.InfoText>
          <_.PointInput 
          name="pluspoint"
          value={state.pluspoint}
          onChange={handleChange}
          />
        </_.PointInTop>

        <_.PointBottom>
          <_.NumberInput 
          placeholder="교사코드 or 학번" 
          name="charger"
          value={state.charger}
          onChange={handleChange}
          />
          <ChargeCheck state={state}/>
          <PaymentsCheck />
        </_.PointBottom>
      </_.PointWrap>

        <C.InfoText>사용내역</C.InfoText>
      <_.UseLogWrap>
        <_.rightWrap>
          {data.map((item) => (
            <li key={item}>
              <UsePointLogItem />
            </li>
          ))}
        </_.rightWrap>
        <_.leftWrap>
          {data.map((item) => (
            <li key={item}>
              <ChargePointLogItem />
            </li>
          ))}
        </_.leftWrap>
      </_.UseLogWrap>
    </C.CompeleteWrap>
  );
};

export default Payments;
