import React from "react";
import UsePointLogItem from "../UsePointLogItem";
import { usePoint } from "../../hooks/usePoint";
import * as C from "../Compelete/style";
import * as P from "../Payments/style";
import ChargePointLogItem from "../ChargePointLogItem";
import { color } from "../../constants/color";

export const Userlog = ({ student, log }) => {
  const data = [1, 2, 3, 4];
  const { point } = usePoint();
  return (
    <C.CompeleteWrap>
      <C.ExChangeDetailWrap
        width={"900px"}
        paddingTop={"10px"}
        // marginTop={"5px"}
      >
        <C.InfoText color={color.default}>잔액</C.InfoText>
        <C.Exchange fontSize={"30px"} fontWeight={"700"}>
          {point}
        </C.Exchange>
      </C.ExChangeDetailWrap>

      <P.UseLogWrap>
        <C.InfoText>사용내역</C.InfoText>
        {/* <div style={{display: "flex"}}> */}
        {data.map((item) => (
          <div style={{ width: "900px", marginTop: "5px" }}>
            <ul style={{ display: "flex", justifyContent: "space-between" }}>
              <li key={item}>
                <UsePointLogItem />
              </li>
              <li key={item}>
                <ChargePointLogItem />
              </li>
            </ul>
          </div>
        ))}
        {/* </div> */}
      </P.UseLogWrap>
    </C.CompeleteWrap>
  );
};
