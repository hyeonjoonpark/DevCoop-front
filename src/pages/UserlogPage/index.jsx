import React from "react";
import { Userlog } from "../../components/Userlog";
import Header from "../../components/Header";
import * as P from "../../common/PageWrapStyle";
import data from "../../components/Studentinfo/data.json";
import log from "../../components/Userlog/log.json";

export default function UserlogPage() {
  return (
    <P.PageWrap>
      <P.PageContainer>
        <Header />
        <Userlog student={data.studentlists} log={log.pointlog} />
      </P.PageContainer>
    </P.PageWrap>
  );
}
