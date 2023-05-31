import * as H from "../../common/PageWrapStyle";
import { ReactComponent as AriPayLogo } from "../../assets/AriPayL.svg";
import { ReactComponent as LockLogo } from "../../assets/LockLogo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <H.PageHeader>
      <H.HeaderInBox>
        <AriPayLogo width={"70px"} height={"70px"} />
      </H.HeaderInBox>
      <H.HeaderInBox testAlign={"center"} paddingTop={"30px"}>
        <LockLogo />
        <Link to="login">로그인</Link>
      </H.HeaderInBox>
    </H.PageHeader>
  );
};

export default Header;
