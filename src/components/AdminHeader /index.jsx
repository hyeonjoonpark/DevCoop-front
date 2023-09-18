import * as H from "../../common/PageWrapStyle";
import { ReactComponent as AriPayLogo } from "../../assets/DevCoopL.svg";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const AdminHeader = () => {
  const { isLoggedIn,handleAdminLogout } = useAuth();
  const navigate = useNavigate();

  const goToBarcode = () => {
    navigate("/barcode");
  }

  return (
    <H.PageHeader>
      <H.HeaderInBox>
          <AriPayLogo width={"100px"} height={"90px"} onClick={goToBarcode}/>
        {isLoggedIn ? (
          <H.LogOutBtn onClick={handleAdminLogout}>로그아웃</H.LogOutBtn>
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
