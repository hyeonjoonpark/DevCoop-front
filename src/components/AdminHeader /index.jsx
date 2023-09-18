import * as H from "../../common/PageWrapStyle";
import { ReactComponent as AriPayLogo } from "../../assets/DevCoopL.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const AdminHeader = () => {
  const { isLoggedIn,handleLogout } = useAuth();

  return (
    <H.PageHeader>
      <H.HeaderInBox>
          <AriPayLogo width={"100px"} height={"90px"} />
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

export default AdminHeader;
