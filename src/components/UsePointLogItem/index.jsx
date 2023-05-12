import React, { useState } from "react";
import * as _ from "./style";
import * as C from "../Compelete/style";

const UsePointLogItem = () => {
  const [ispoint, setIsPoint] = useState(true);

  // const handlePoint = () => {
  //   // TODO : 만약 결제를 했다면 isPoint를 false로, 성공했다면 true로 반환하는 함수 로직 작성
  // }

  return ispoint ? (
    <_.PointLogWrap backgroundColor={"#E8EBF5"}>
      <C.InfoText>2023.01.19</C.InfoText>
      <C.InfoText>+2500원</C.InfoText>
      <C.InfoText>충전</C.InfoText>
    </_.PointLogWrap>
  ) : (
    <_.PointLogWrap>
      <C.InfoText>2023.01.19</C.InfoText>
      <C.InfoText>-2500원</C.InfoText>
      <C.InfoText>결제</C.InfoText>
    </_.PointLogWrap>
  );
};

export default UsePointLogItem;
