import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as NotFoundLogo } from "../assets/404AriPayC.svg";
import styled from "styled-components";

export default function NotFoundPage() {
  return (
    <NotFoundWrap>
        <NotFoundLogo width={"400px"} height={"200px"} />
        <h1>페이지를 찾을 수 없습니다 :{"("} </h1>
        <Link to="/">메인으로 돌아가기</Link>
    </NotFoundWrap>
  );
}

const NotFoundWrap = styled.p`
  text-align: center;
`;
