import styled from "styled-components";

export const PointLogWrap = styled.div`
  display: flex;
  justify-content: space-around;

  margin-bottom: 15px;
  padding-top: 20px;
  width: 100%;
  height: 80px;

  background-color: ${props => props.backgroundColor ? props.backgroundColor : "#eff0f2"};
  border-radius: 8px;
`;


