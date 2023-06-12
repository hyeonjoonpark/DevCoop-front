import styled from "styled-components";

const maxWidth = "900px";

export const InfoContainer = styled.div`
  margin: 0 auto;
  width: ${maxWidth};
  height: 600px;
`;

export const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${maxWidth};
  height: 55px;
`;

export const Infotitle = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: #333;
`;

export const Infobutton = styled.button`
  margin-right: ${(props) => (props.mRight ? props.mRight : "")};
  width: 150px;
  height: 45px;
  color: #fff;
`;

export const Infolist = styled.div`
  margin: 0 auto;
  width: ${maxWidth};
  height: 100%;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-around;
  width: ${maxWidth};
  height: 55px;
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
  color: #8a8a8a;
`;

export const Infochoose = styled.div`
  width: 150px;
  height: 55px;
  text-align: center;
  line-height: 60px;
`;

export const Infotext = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;
