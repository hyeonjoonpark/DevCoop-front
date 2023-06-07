import React from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const { isLoggedIn, userData, handleGoogleLogin, handleGoogleLogout } = useLogin();

  return (
    <div>
      {isLoggedIn && userData ? (
        <button onClick={handleGoogleLogout}>로그아웃</button>
      ) : (
        <button onClick={handleGoogleLogin}>로그인</button>
      )}

      {userData ? userData.displayName : null}
    </div>
  );
};

export default Login;
