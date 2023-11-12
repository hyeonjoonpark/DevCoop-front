import React, { useEffect } from "react";
import * as _ from "./style";
import { useAuth } from "context/authContext";
import { usePoint } from "hooks/usePoint";

const Main = () => {
  const { isLoggedIn } = useAuth();
  const { point } = usePoint();
  const formatPoint = point.toLocaleString();

  useEffect(() => {
    console.log("isLoggedIn changed:", isLoggedIn);
}, [isLoggedIn]);


  return (
    <>
      <_.Maintop>
        <_.TopBox>
          <_.MainTopInBox>
            <p style={{ paddingTop: "10px", fontSize: "30px" }}>
              현재 사용 가능한 금액
            </p>
            {isLoggedIn ? (
              <p style={{ fontSize: "70px" }}>{formatPoint}원</p>
            ) : (
              <p style={{ fontSize: "42px" }}>로그인 후 조회 가능합니다</p>
            )}
          </_.MainTopInBox>
        </_.TopBox>

        <_.BottomBox>
          <_.Infotext>사용 내역이 궁금하다면?</_.Infotext>
          <_.UserlogLink to="/userlog">보러가기</_.UserlogLink>
        </_.BottomBox>
      </_.Maintop>

      <_.Mainbottom>
        <a
          href="https://www.instagram.com/p/Cxc21Z0Plc5/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
          target="_blank"
        >
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
        </a>

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
    </>
  )
}
export default Main;
