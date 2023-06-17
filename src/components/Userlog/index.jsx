import React from "react";
import UsePointLogItem from "../UsePointLogItem";
import ChargePointLogItem from "../ChargePointLogItem";
import { usePoint } from "../../hooks/usePoint";
import { color } from "../../constants/color";
import * as C from "../Compelete/style";
import * as P from "../Payments/style";
import * as _ from "./style";

export const Userlog = () => {
  const data = [1, 2, 3, 4];
  const { point } = usePoint();
  return (
    <C.CompeleteWrap>
      <C.ExChangeDetailWrap width={"900px"} paddingTop={"10px"}>
        <C.InfoText color={color.default}>잔액</C.InfoText>
        <C.Exchange fontSize={"30px"} fontWeight={"700"}>
          {point}
        </C.Exchange>
      </C.ExChangeDetailWrap>

      <P.UseLogWrap>
        <C.InfoText>사용내역</C.InfoText>
        {data.map((item) => (
          <_.PointContainer>
            <_.PointList>
              <li key={item}>
                <UsePointLogItem />
              </li>
              <li key={item}>
                <ChargePointLogItem />
              </li>
            </_.PointList>
          </_.PointContainer>
        ))}
      </P.UseLogWrap>
    </C.CompeleteWrap>
  );
};
