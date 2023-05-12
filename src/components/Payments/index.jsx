import PaymentsCheck from "../PaymentsCheck";
import UsePointLogItem from "../UsePointLogItem";
import * as C from "../Compelete/style";
import * as _ from "./style";

const Payments = () => {
  const TextColor = "#8A8A8A";
  const data = [1, 2, 3, 4];

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
          <_.PointInput />
        </_.PointInTop>

        <_.PointBottom>
            <_.NumberInput placeholder="교사코드 or 학번"/>
            <button style={{marginRight: "10px"}}>충전</button>
            <PaymentsCheck />
        </_.PointBottom>
      </_.PointWrap>

      <_.UseLogWrap>
        <C.InfoText>사용내역</C.InfoText>
        {data.map((item) => (
        <li key={item}>
          <UsePointLogItem />
        </li>
      ))}
      </_.UseLogWrap>
    </C.CompeleteWrap>
  );
};

export default Payments;
