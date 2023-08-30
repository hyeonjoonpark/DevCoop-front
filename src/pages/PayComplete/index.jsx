import React from "react";
import Header from "../../components/Header";
import * as P from "../../common/PageWrapStyle";
import PayComplete from "../../components/PayComplete";

export default function PayCompletePage() {
  return (
    <>
      <P.PageWrap>
        <P.PageContainer>
          <Header />
          <PayComplete />
        </P.PageContainer>
      </P.PageWrap>
    </>
  );
}
