import React from "react";
import * as _ from "./style";
import * as P from "../../common/PageWrapStyle";
import Header from "../Header";
import { useAuth } from "../../hooks/useAuth";

const Main = ({ student }) => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <P.PageWrap>
        <P.PageContainer>
          <Header />

          <_.Maintop>
            <_.TopBox>
              <_.MainTopInBox>
                <p style={{paddingTop: "10px",fontSize: "30px"}}>현재 사용 가능한 금액</p>
                {isLoggedIn ? (
                  <p style={{ fontSize: "70px" }}>{student[0].point}원</p>
                ) : (
                  <p>로그인 후 조회 가능합니다.</p>
                )}
              </_.MainTopInBox>
            </_.TopBox>

            <_.BottomBox>
              <_.Infotext>사용 내역이 궁금하다면?</_.Infotext>
              <_.UserlogLink to="/userlog">보러가기</_.UserlogLink>
            </_.BottomBox>
          </_.Maintop>

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
