import PaymentsCheck from "../PaymentsCheck";
import UsePointLogItem from "../UsePointLogItem";
import * as C from "../Compelete/style";
import * as _ from "./style";
import ChargeCheck from "../ChargeCheck";
import { usePoint } from "../../hooks/usePoint";
import { color } from "../../constants/color";

const Payments = () => {
  const data = [1, 2, 3, 4];
  const { name, point, number } = usePoint();
  return (
    <C.CompeleteWrap>
      <C.StudentInfo>
        <C.InfoText color={color.default}>학생정보</C.InfoText>
        <C.StudentInfoDetail>
          <C.InfoText>학번 : {number}</C.InfoText>
          <C.InfoText>이름 : {name}</C.InfoText>
        </C.StudentInfoDetail>
      </C.StudentInfo>

      <C.ExChangeDetailWrap
        width={"900px"}
        paddingTop={"10px"}
        marginTop={"5px"}
      >
        <C.InfoText color={color.default}>잔액</C.InfoText>
        <C.Exchange fontSize={"30px"} fontWeight={"700"}>{point}</C.Exchange>
      </C.ExChangeDetailWrap>

      <_.PointWrap>
        <_.PointInTop>
          <C.InfoText color={color.default}>포인트</C.InfoText>
          <_.PointInput />
        </_.PointInTop>

        <_.PointBottom>
          <_.NumberInput placeholder="교사코드 or 학번" />
          <ChargeCheck />
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
