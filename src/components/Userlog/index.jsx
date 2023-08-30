import React from "react";
import UsePointLogItem from "../UsePointLogItem";
import ChargePointLogItem from "../ChargePointLogItem";
import { usePoint } from "../../hooks/usePoint";
import { color } from "../../constants/color";
import * as C from "../ChargeComplete/style";
import * as P from "../Payments/style";
import * as _ from "./style";

export const Userlog = () => {
  const { point } = usePoint();
  const formatPoint = point.toLocaleString();
  return (
    <C.CompeleteWrap>
      <C.ExChangeDetailWrap width={"900px"} paddingTop={"10px"}>
        <C.InfoText color={color.default}>남은금액</C.InfoText>
        <C.Exchange fontSize={"30px"} fontWeight={"700"}>
          {formatPoint}원
        </C.Exchange>
      </C.ExChangeDetailWrap>

      <P.UseLogWrap style={{flexDirection: "column"}}>
        <C.InfoText>사용내역</C.InfoText>
        
          <_.PointContainer>
            <P.rightWrap>
              <li style={{display: "flex"}}>
                <UsePointLogItem />
              </li>
            </P.rightWrap>
            <P.leftWrap>
              <li style={{display: "flex"}}>
                <ChargePointLogItem />
              </li>
            </P.leftWrap>
          </_.PointContainer>

      </P.UseLogWrap>
    </C.CompeleteWrap>
  );
};
