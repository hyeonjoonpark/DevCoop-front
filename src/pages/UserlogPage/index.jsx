import React from "react";
import { Userlog } from "../../components/Userlog";
import Header from "../../components/Header";
import * as P from "../../common/PageWrapStyle";

export default function UserlogPage() {
  return (
    <P.PageWrap>
      <P.PageContainer>
        <Header />
        <Userlog />
      </P.PageContainer>
    </P.PageWrap>
  );
}
