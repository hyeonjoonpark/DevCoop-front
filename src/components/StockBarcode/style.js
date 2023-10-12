import styled from "styled-components";

export const ContentWrap = styled.div`
    margin: 0 auto;
    padding-top: 60px;
    text-align: center;

    width: 250px;
    height: 250px;
    /* background-color: orange; */
`;

export const ContentTitle = styled.h1`
    font-size: 50px;
    color: #333;
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
  margin: 10px 0;
  width: 400px;
  height: 55px;
  border-radius: 10px;
`;

export const InfoHeader = styled.div`
    margin: 0 auto;
    width: 500px;
    height: 50px;
    
`;