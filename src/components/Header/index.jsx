import * as H from "../../common/PageWrapStyle";
import { ReactComponent as AriPayLogo } from "../../assets/AriPayL_ver2.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Header = () => {
  const { isLoggedIn,handleLogout } = useAuth();

  return (
    <H.PageHeader>
      <H.HeaderInBox>
        <Link to="/">
          <AriPayLogo width={"130px"} height={"100px"} />
        </Link>
        {isLoggedIn ? (
          <H.LogOutBtn onClick={handleLogout}>로그아웃</H.LogOutBtn>
        ) : (
          <H.LogOutBtn>
            <Link to="/login">로그인</Link>
          </H.LogOutBtn>
        )}
      </H.HeaderInBox>
    </H.PageHeader>
  );
};

export default Header;
