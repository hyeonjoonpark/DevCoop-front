import React from "react";
import Main from "../../components/Main";
import UserHeader from "../../components/UserHeader";
import * as P from "../../common/PageWrapStyle";

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
