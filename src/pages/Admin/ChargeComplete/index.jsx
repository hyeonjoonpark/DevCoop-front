import React from "react";
import AdminHeader from "components/Admin/AdminHeader";
import * as P from "common/PageWrapStyle";
import ChargeComplete from "components/Admin/ChargeComplete";

export default function ChargeCompletePage() {
  return (
    <>
      <P.PageWrap>
        <P.PageContainer>
          <AdminHeader />
          <ChargeComplete />
        </P.PageContainer>
      </P.PageWrap>
    </>
  );
}
