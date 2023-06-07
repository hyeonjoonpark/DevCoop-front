import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageWrap = styled.div`
    width: 100%;
    height: 800px;
    background-color: #D9D9D9;
`;

export const PageContainer = styled.div`
    margin: 0 auto;
    width: 1000px;
    height: 100%;
    background-color: #fff;
`;

export const PageHeader = styled.header`
    width: 100%;
    height: 100px;
`;

export const NotFoundWrap = styled.p`
  margin-top: 150px;
  text-align: center;
`;

export const NotFoundTitle = styled.h1`
  font-weight: 400;
  color: #fcc800;
`;

export const HomeButton = styled(Link)`
  margin: 0 auto;

  padding-top: 7px;
  display: block;
  text-decoration: none;
  width: 100px;
  height: 40px;
  border-radius: 15px;
  background-color: #f5d410;
  color: #fff;
`;