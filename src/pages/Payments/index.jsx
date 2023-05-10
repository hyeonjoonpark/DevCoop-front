import React from "react";
import PaymentsCheck from "../../components/Payments";
import Header from "../../components/Header";
import * as P from "../../common/PageWrapStyle";

export default function PaymentsPage() {
  return (
    <>
      <P.PageWrap>
        <P.PageContainer>
          <Header />
          <PaymentsCheck />
        </P.PageContainer>
      </P.PageWrap>
      <PaymentsCheck />
    </>
  );
}
