import React from "react";
import AdminHeader from "components/Admin/AdminHeader";
import * as P from "common/PageWrapStyle";
import PayComplete from "components/Admin/PayComplete";

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
