import PaymentsCheck from "../PaymentsCheck";
import UsePointLogItem from "../UsePointLogItem";
import * as C from "../Compelete/style";
import * as _ from "./style";
import ChargeCheck from "../ChargeCheck";
import ChargePointLogItem from "../ChargePointLogItem";
import { useEffect, useState } from "react";
import axios from 'axios';


const Payments = () => {
  const TextColor = "#8A8A8A";
  const data = [1, 2, 3, 4];
  const url = "http://10.1.1.5:6002/api";
  const [point, setPoint] = useState(0);
  const [user, setUser] = useState('');

  const onChargePoint = (e) => {
    setPoint(e.target.value);
    console.log(e.target.value);
  };

  const onChargeUser = (e) => {
    setUser(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    axios.post(`${url}/charge`,{
      point: point,
      user: user,
    })
    .then((result) => {
      console.log("요청성공")
      console.log(result)
    })
    .catch((error) => {
      console.log("요청실패")
      console.log(error)
    })
  });

  return (
    <C.CompeleteWrap>
      <C.StudentInfo>
        <C.InfoText color={TextColor}>학생정보</C.InfoText>
        <C.StudentInfoDetail>
          <C.InfoText>학번 : 2206</C.InfoText>
          <C.InfoText>이름 : 김알이</C.InfoText>
        </C.StudentInfoDetail>
      </C.StudentInfo>

      <C.ExChangeDetailWrap
        width={"900px"}
        paddingTop={"10px"}
        marginTop={"5px"}
      >
        <C.InfoText color={TextColor}>잔액</C.InfoText>
        <C.Exchange fontSize={"30px"} fontWeight={"700"}>
          2000원
        </C.Exchange>
      </C.ExChangeDetailWrap>

      <_.PointWrap>
        <_.PointInTop>
          <C.InfoText color={TextColor}>포인트</C.InfoText>
          <_.PointInput value={point} onChange={onChargePoint} />
        </_.PointInTop>

        <_.PointBottom>
          <_.NumberInput value={user} onChange={onChargeUser} placeholder="교사코드 or 학번" />
          <ChargeCheck props={point}/>
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
