import React from "react";
import * as _ from "./style";
import * as P from "../../common/PageWrapStyle";
import Header from "../Header";

const Main = () => {
  return (
    <>
      <P.PageWrap>
        <P.PageContainer>
          <Header />
          <_.maintop>
            <_.topdiv></_.topdiv>
            <_.bottomdiv>
              <_.Infotext>사용 내역이 궁금하다면?</_.Infotext>
            </_.bottomdiv>
          </_.maintop>

          <_.Mainbottom>
            
            <_.UseBox>
              <div>
                How
                <br />
                To
                <br />
                Use?
                <br />
                <p>
                  아리페이를 더 똑똑하게
                  <br />
                  사용하는 방법
                </p>
              </div>
              <_.LightLogo />
            </_.UseBox>

            <_.AskBox>
              <_.AskInTop>
                <a
                  href="https://www.instagram.com/bsm_devcoop/"
                  target="_blank"
                  rel="noreferrer"
                >
                  문의하기
                </a>
              </_.AskInTop>
              <_.CallLogoStyle />
            </_.AskBox>
          </_.Mainbottom>
        </P.PageContainer>
      </P.PageWrap>
    </>
  );
};

export default Main;
