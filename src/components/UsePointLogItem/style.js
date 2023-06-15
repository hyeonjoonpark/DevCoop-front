import styled from "styled-components";

export const PointLogWrap = styled.div`
  display: flex;
  justify-content: space-around;

  margin-bottom: 15px;
  padding-top: 20px;
  width: 400px;
  height: 80px;

  background-color: ${props => props.backgroundColor ? props.backgroundColor : "#eff0f2"};
  border: 1px solid ${props => props.borderColor ? props.borderColor : "#EFF0F2"};
  border-radius: 8px;
`;


