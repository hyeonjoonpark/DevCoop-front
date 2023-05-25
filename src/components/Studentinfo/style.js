import styled from "styled-components";

export const InfoContainer = styled.div`
    margin: 0 auto;
    width: 900px;
    height: 100%;
`;

export const InfoHeader = styled.div`
    width: 900px;
    height: 100px;
`;

export const Infolist = styled.div`
    margin: 0 auto;
    width: 900px;
    height: 100%;
`;

export const Infotitle = styled.text`
    margin: 0 auto;
    font-size: 40px;
    font-weight: bold;
    color: #333;
`;

export const Infobutton = styled.button`
    margin: 0 auto;
    font-size: 20px;
    width: 180px;
    height: 55px;
    color: 41434C;
    border-radius: 5px;
`;

export const Infoline = styled.hr`
    margin: 0 auto;
    width: 865px;
`;

export const Infotext = styled.text`
    margin: 0 45px auto 45px;
    font-size: 30px;
    font-weight: bold;
    color: ${props => props.color || '#333'};
`;

export const Infodata = styled.div`
    margin: 5px auto;
    width: 865px;
    height: 100px;
    background-color: pink;
    border-radius: 5px;
`;

export const Inforadiobutton = styled.button`
    margin: 0 45px 0 45px;
`;

export const Infodatatext = styled.text`
    margin: 0 45px auto 45px;
    font-size: 30px;
    font-weight: bold;
    line-height: 100px;
    text-align: center;
    color: ${props => props.color || '#333'};
`;