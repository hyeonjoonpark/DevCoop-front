import styled from "styled-components";

export const PointLogWrap = styled.span`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  padding-top: 20px;
  width: 440px;
  height: 70px;

  background-color: ${props => props.backgroundColor ? props.backgroundColor : "#eff0f2"};
  border: 1px solid ${props => props.borderColor ? props.borderColor : "#EFF0F2"};
  border-radius: 8px;
`;


