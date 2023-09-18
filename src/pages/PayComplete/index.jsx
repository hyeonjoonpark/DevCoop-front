import React from "react";
import AdminHeader from "../../components/AdminHeader ";
import * as P from "../../common/PageWrapStyle";
import PayComplete from "../../components/PayComplete";

export default function PayCompletePage() {
  return (
    <>
      <P.PageWrap>
        <P.PageContainer>
          <AdminHeader />
          <PayComplete />
        </P.PageContainer>
      </P.PageWrap>
    </>
  );
}
