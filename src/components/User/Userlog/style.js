import styled from "styled-components";

export const PointContainer = styled.div`
  width: "900px";
  margin-top: "5px";
  display: flex;
`;

export const PointList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0;
`;



export const CompeleteWrap = styled.div`
  margin: 0 auto;
  width: 900px;
  height: 700px;
`;

export const PaymentsTopWrap = styled.div`
  width: 100%;
  height: 300px;

  text-align: center;

  border-bottom: 1px solid #333;
`;

export const PaymentsTopTitle = styled.h1`
  font-size: 70px;
  letter-spacing: 3px;
`;

export const PaymentsTopSubTitle = styled.h2`
  font-size: 40px;
  color: #adaeb3;
`;

export const PaymentsBottomWrap = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 300px;
`;

export const StudentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const InfoText = styled.div`
  color: ${(props) => (props.color ? props.color : "#333")};
  font-weight: 400;
  font-size: 23px;
  margin-top: 5px;
  margin-left: 5px;
`;

export const StudentInfoDetail = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
  width: 300px;
`;

export const ExChangeWrap = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 200px;

  border-radius: 4px;
  border: 1px solid #eef0f0;

  background-color: #fafafa;
`;

export const ExChangeDetailWrap = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 auto;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0")};
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : "0")};

  width: ${(props) => (props.width ? props.width : "800px")};
  height: 50px;

  border-top: ${(props) => (props.border ? props.border : null)};
`;

export const Exchange = styled.p`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "25px")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : null)};
`;

export const GoBackBtn = styled.button`
  width: 100%;
  height: 60px;

  font-size: 30px;
  font-weight: 700;
`;



export const PointWrap = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  width: 100%;
  height: 150px;

  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
`;

export const PointInTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PointInput = styled.input`
  width: 450px;
  border-radius: 10px;
  border: 1px solid #ccc; /* 기본값 설정 */
  
  border: ${({ isError }) => (isError ? "2px solid red" : "1px solid #ccc")};
  font-weight: ${({ isError }) => (isError ? "bold" : "normal")};
`;

export const NumberInput = styled.input`
  border-radius: 10px 0px 0px 10px;
  width: 240px;
`;

export const PointBottom = styled.div`
  display: flex;
  justify-content: end;

  margin-top: 10px;

  width: 100%;
  height: 50px;
`;

export const UseLogWrap = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
`;

export const rightWrap = styled.div`
  width: 50%;
`;

export const leftWrap = styled.div`
  width: 50%;
`;