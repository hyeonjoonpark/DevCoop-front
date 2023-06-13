import * as H from "../../common/PageWrapStyle";
import { ReactComponent as AriPayLogo } from "../../assets/AriPayL_ver2.svg";
import { ReactComponent as LockLogo } from "../../assets/LockLogo.svg";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Header = () => {
  const { isLoggedIn, handleGoogleLogout } = useLogin();

  return (
    <H.PageHeader>
      <H.HeaderInBox>
        <AriPayLogo width={"130px"} height={"130px"} />
      </H.HeaderInBox>
      <H.HeaderInBox testAlign={"center"} paddingTop={"50px"}>
        {/* <LockLogo /> */}
        {isLoggedIn ? (
          <H.LogOutBtn onClick={handleGoogleLogout}>로그아웃</H.LogOutBtn>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </H.HeaderInBox>
    </H.PageHeader>
  );
};

export default Header;

