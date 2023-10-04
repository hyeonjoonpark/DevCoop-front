import React from "react";
import Payments from "../../components/Payments";
import AdminHeader from "../../components/AdminHeader ";
import * as P from "../../common/PageWrapStyle";

export default function PaymentsPage() {
  return (
    <>
      <P.PageWrap>
        <P.PageContainer>
          <AdminHeader />
          <Payments />
        </P.PageContainer>
      </P.PageWrap>
    </>
  );
}