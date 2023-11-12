import React from "react";
import { Userlog } from "components/User/Userlog";
import UserHeader from "components/User/UserHeader";
import * as P from "common/PageWrapStyle";

export default function UserlogPage() {
  return (
    <P.PageWrap>
      <P.PageContainer>
        <UserHeader />
        <Userlog />
      </P.PageContainer>
    </P.PageWrap>
  );
}
