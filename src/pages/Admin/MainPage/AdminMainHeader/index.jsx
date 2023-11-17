import * as H from 'common/PageWrapStyle';
import { ReactComponent as AriPayLogo } from 'assets/AdminMainHeader.svg';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'context/authContext';
import * as _ from './style';

const AdminMainHeader = () => {
  const { isAdminLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const goToBarcode = () => {
    navigate('/admin/');
  };

  const handleLogoutClick = () => {
    logout(true, navigate);
  };

  return (
    <_.AdminMainHeader>
      <_.NewHeaderInBox>
        <AriPayLogo width={"200px"} height={"75px"} onClick={goToBarcode} />
        <_.ListBtn onClick={() => navigate("/admin")}>
          조합원목록
        </_.ListBtn>
        {isAdminLoggedIn ? (
          <_.NewLogOutBtn onClick={handleLogoutClick}>로그아웃</_.NewLogOutBtn>
        ) : (
          <_.NewLogOutBtn onClick={() => navigate("/admin/login")}>
            로그인
          </_.NewLogOutBtn>
        )}
      </_.NewHeaderInBox>
    </_.AdminMainHeader>
  );
};

export default AdminMainHeader;
