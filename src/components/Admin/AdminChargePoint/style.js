import styled from "styled-components";

export const rightPointLogWrap = styled.div`
  width: 100%;
  height: 100%;
`;

export const PointLogWrap = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  width: 440px;
  height: 70px;

  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#eff0f2"};
  border: 1px solid
    ${(props) => (props.borderColor ? props.borderColor : "#EFF0F2")};
  border-radius: 8px;
`;

export const PPointLogWrap = styled.div`
  background-color: #fafafa;
  border: 2px solid #e7e7e7;
  border-radius: 5px;
  margin: 0px 10px 10px 0px;
  height: 300px;
`;

export const PPointLogWrapBar = styled.div`
  display: flex;
  background-color: #e6ebff;
  width: 100%;
  height: 40px;
  top: 0px;
  align-items: center;
  padding: 20px;
`;

export const PointState = styled.div`
  margin-left: auto;
`;

export const PPointSection = styled.div`
  padding: 20px;
`;

export const PointInfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  margin-top: 10px;
`;

export const PPointInfo = styled.span`
  height: 30px;
  font-size: 30px;
  color: #8a8a8a;
`;
