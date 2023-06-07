import * as H from "../../common/PageWrapStyle";
import { ReactComponent as AriPayLogo } from "../../assets/AriPayL_ver2.svg";
import { ReactComponent as LockLogo } from "../../assets/LockLogo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <H.PageHeader>
      <H.HeaderInBox>
        <AriPayLogo width={"130px"} height={"130px"} />
      </H.HeaderInBox>
      <H.HeaderInBox testAlign={"center"} paddingTop={"50px"}>
        <LockLogo />
        {isLoggedIn ? (
          <Link to="/">로그아웃</Link>
        ) : (
          <Link to="login">로그인</Link>
        )}
      </H.HeaderInBox>
    </H.PageHeader>
  );
};

export default Header;
