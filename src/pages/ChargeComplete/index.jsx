import React from "react";
import Header from "../../components/Header";
import * as P from "../../common/PageWrapStyle";
import ChargeComplete from "../../components/ChargeComplete";

export default function ChargeCompletePage() {
  return (
    <>
      <P.PageWrap>
        <P.PageContainer>
          <Header />
          <ChargeComplete />
        </P.PageContainer>
      </P.PageWrap>
    </>
  );
}
