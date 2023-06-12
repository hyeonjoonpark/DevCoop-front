import styled from "styled-components";
import { ReactComponent as CallLogo } from "../../assets/CallLogo.svg";
import { ReactComponent as LightIcon } from "../../assets/LightIcon.svg";

export const maintop = styled.div`
  margin: 0 auto;
  width: 1000px;
  height: 400px;
`;

export const Mainbottom = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 1000px;
  height: 300px;
  background: #e3e5e7;
`;

export const topdiv = styled.div`
  margin: 0 auto;
  width: 970px;
  height: 280px;
  background: #41434c;
  border-radius: 50px 50px 0 0;
`;

export const bottomdiv = styled.div`
  margin: 0 auto;
  width: 970px;
  height: 100px;
  background: #34343c;
  border-radius: 0 0 50px 50px;
`;

export const UseBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 10px 15px 15px;
  padding: 20px;

  width: 400px;
  height: 270px;

  background: #f0ce00;
  border-radius: 12px;

  color: #fff;
  font-weight: 700;
  font-size: 40px;
  
  p {
    display: block;
    width: 200px;
    font-size: 15px;
  }
`;

export const AskBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 10px 15px 10px;
  width: 550px;
  height: 270px;
  background: #fff;
  border-radius: 12px;
`;

export const Infotext = styled.text`
  font-size: 25px;
  text-align: center;
  color: white;
`;

export const AskInTop = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  background-color: #fff;
  border-radius: 12px;

  a {
    display: block;
    width: 150px;
    height: 50px;

    margin: 20px;
    font-size: 30px;
    font-weight: 600;
    color: #8a8a8a;
  }
`;

export const CallLogoStyle = styled(CallLogo)`
  width: 550px;
  height: 300px;
  border-radius: 12px;
`;

export const LightLogo = styled(LightIcon)`
  width: 170px;
  height: 170px;
`;
