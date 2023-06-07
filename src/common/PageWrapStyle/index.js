import styled from "styled-components";

export const PageWrap = styled.div`
  width: 100%;
  height: 800px;
  background-color: #d9d9d9;
`;

export const PageContainer = styled.div`
  margin: 0 auto;
  width: 1000px;
  height: 100%;
  background-color: #fff;
`;

export const PageHeader = styled.header`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 100px;
`;

export const HeaderInBox = styled.div`
  width: 300px;
  height: 100%;

  text-align: ${(props) => props.testAlign ? props.testAlign : ""};
  font-size: 20px;
  font-weight: 700;
  color: #8A8A8A;

  padding-left: 20px;
  padding-top: ${(props) => props.paddingTop ? props.paddingTop : ""};
`;
