import React from "react";
import Header from "../Header";
import * as _ from "../../common/PageWrapStyle";

const Main = () => {
  return (
    <>
      <_.PageWrap>
        <_.PageContainer>
          <Header />
        </_.PageContainer>
      </_.PageWrap>
    </>
  );
};

export default Main;
