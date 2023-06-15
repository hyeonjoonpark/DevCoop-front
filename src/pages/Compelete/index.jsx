import React from "react";
import Header from "../../components/Header";
import * as P from "../../common/PageWrapStyle";
import Compelete from "../../components/Compelete";

export default function CompeletePage() {
  return (
    <>
      <P.PageWrap>
        <P.PageContainer>
          <Header />
          <Compelete />
        </P.PageContainer>
      </P.PageWrap>
    </>
  );
}
