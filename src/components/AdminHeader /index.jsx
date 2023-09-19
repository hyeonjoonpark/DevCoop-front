import * as H from "../../common/PageWrapStyle";
import { ReactComponent as AriPayLogo } from "../../assets/DevCoopL.svg";
import { Link, useNavigate } from "react-router-dom";
import { useAdminAuth } from "../../hooks/useAdminAuth";

const AdminHeader = () => {
  const { isLoggedIn,handleLogout } = useAdminAuth();
  const navigate = useNavigate();

  const goToBarcode = () => {
    navigate("/barcode");
  }

  return (
    <H.PageHeader>
      <H.HeaderInBox>
          <AriPayLogo width={"100px"} height={"90px"} onClick={goToBarcode}/>
        {isLoggedIn ? (
          <H.LogOutBtn onClick={handleLogout}>로그아웃</H.LogOutBtn>
        ) : (
          <H.LogOutBtn>
            <Link to="/admin">로그인</Link>
          </H.LogOutBtn>
        )}
      </H.HeaderInBox>
    </H.PageHeader>
  );
};

export default AdminHeader;
