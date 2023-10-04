import React from "react";
import Main from "../../components/Main";
import UserHeader from "../../components/UserHeader";
import * as P from "../../common/PageWrapStyle";
import Advertisement from "../../components/Advertisement";

export default function MainPage() {
  return (
    <>
      <P.PageWrap>
        <Advertisement/>
        <P.PageContainer>
          <UserHeader />
          <Main />
        </P.PageContainer>
      </P.PageWrap>
    </>
  );
}
