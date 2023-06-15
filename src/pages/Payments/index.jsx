import React from "react";
import Payments from "../../components/Payments";
import Header from "../../components/Header";
import * as P from "../../common/PageWrapStyle";

export default function PaymentsPage() {
  return (
    <>
      <P.PageWrap>
        <P.PageContainer>
          <Header />
          <Payments />
        </P.PageContainer>
      </P.PageWrap>
    </>
  );
}
