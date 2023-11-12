import React from "react";
import Main from "components/User/UserMain";
import UserHeader from "components/User/UserHeader";
import * as P from "common/PageWrapStyle";

export default function MainPage() {
  return (
    <>
      <P.PageWrap>
        <P.PageContainer>
          <UserHeader />
          <Main />
        </P.PageContainer>
      </P.PageWrap>
    </>
  );
}
