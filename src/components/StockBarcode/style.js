import styled from "styled-components";

export const ContentWrap = styled.div`
    margin: 0 auto;
    text-align: center;

    width: 500px;
    height: 250px;
    /* background-color: orange; */
`;

export const ContentTitle = styled.div`
    font-size: 23px;
    color: #333;
    text-align: left;
`;

export const ContentSubTitle = styled.h3`
    font-size: 25px;
    color: #555;
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding-top: 30px;
    text-align: center;
    justify-content: flex-end;

    width: 500px;
    height: 100px;

`;

export const Infobutton = styled.button`
  margin-right: ${(props) => (props.mRight ? props.mRight : "")};
  width: 100px;
  height: 45px;
  color: #fff;
`;

export const InfoInput = styled.input`
  position: relative;
  margin: 50px 0;
  width: 400px;
  height: 55px;
  border-radius: 10px;
`;

export const InfoHeader = styled.div`
    margin: 0 auto;
    width: 500px;
    height: 50px;
    border-bottom: 2px solid #d3d3d3;
`;

export const InfoBody = styled.div`
    display: flex;
    margin: 0 auto;
    width: 500px;
    height: 200px;
    
`;

export const InfoText = styled.div`
  color: ${(props) => (props.color ? props.color : "#333")};
  margin-top: 60px;
  font-size: 23px;
  text-align: left;
  width: 100px;
  color: #8A8A8A;
`;