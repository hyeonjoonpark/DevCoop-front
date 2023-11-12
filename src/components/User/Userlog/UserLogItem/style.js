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
  padding-top: 15px;
  width: 440px;
  height: 70px;

  background-color: ${props => props.backgroundColor ? props.backgroundColor : "#eff0f2"};
  border: 1px solid ${props => props.borderColor ? props.borderColor : "#EFF0F2"};
  border-radius: 8px;
`;

export const DateText = styled.span`
  margin-right: 30px; // 오른쪽 마진으로 간격 조정
`;

export const AmountText = styled.span`
  // 필요하다면 여기에 추가 스타일을 적용할 수 있습니다.
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
