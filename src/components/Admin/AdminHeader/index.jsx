import * as H from "common/PageWrapStyle";
import { ReactComponent as AriPayLogo } from "assets/DevCoopL.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "context/authContext";

const AdminHeader = () => {
  const { isAdminLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const goToBarcode = () => {
    navigate("/admin/barcode");
  };

  const handleLogoutClick = () => {
    logout(true, navigate);
  };

  return (
    <H.PageHeader>
      <H.HeaderInBox>
        <AriPayLogo width={"100px"} height={"90px"} onClick={goToBarcode} />
        {isAdminLoggedIn ? (
          <H.LogOutBtn onClick={handleLogoutClick}>로그아웃</H.LogOutBtn>
        ) : (
          <H.LogOutBtn onClick={() => navigate("/admin/login")}>로그인</H.LogOutBtn>
        )}
      </H.HeaderInBox>
    </H.PageHeader>
  );
};

export default AdminHeader;
