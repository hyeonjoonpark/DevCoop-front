import * as H from "../../common/PageWrapStyle";
import { ReactComponent as AriPayLogo } from "../../assets/AriPayL_ver2.svg";
import { ReactComponent as LockLogo } from "../../assets/LockLogo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Header = () => {
  const { isLoggedIn, handleGoogleLogin, handleGoogleLogout } = useLogin();

  return (
    <H.PageHeader>
      <H.HeaderInBox>
        <AriPayLogo width={"130px"} height={"130px"} />
      </H.HeaderInBox>
      <H.HeaderInBox testAlign={"center"} paddingTop={"50px"}>
        <LockLogo />
        {isLoggedIn ? (
          <button onClick={handleGoogleLogout}>로그아웃</button>
        ) : (
          <button onClick={handleGoogleLogin}>로그인</button>
        )}
      </H.HeaderInBox>
    </H.PageHeader>
  );
};

export default Header;
