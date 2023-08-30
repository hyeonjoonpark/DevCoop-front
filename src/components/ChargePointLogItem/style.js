import styled from "styled-components";

export const rightPointLogWrap = styled.div`
  width: 100%;
  height: 100%;
`;

export const PointLogWrap = styled.div`
  display: flex;
  justify-content: space-around;

  margin-right: 5px;
  margin-bottom: 10px;
  padding-top: 20px;
  width: 440px;
  height: 70px;

  background-color: ${props => props.backgroundColor ? props.backgroundColor : "#eff0f2"};
  border: 1px solid ${props => props.borderColor ? props.borderColor : "#EFF0F2"};
  border-radius: 8px;
`;


