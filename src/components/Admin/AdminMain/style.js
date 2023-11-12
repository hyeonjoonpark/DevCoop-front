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
  height: 100vh;
  border: white;
  border-radius: 10px;
`;

export const Info = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  width: 850px;
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

export const Infosearch = styled.div`
  margin: 0 auto;
  display: flex;
  width: 850px;
  height: 70px;
`;

export const InfoInput = styled.input`
  position: relative;
  margin: 10px 0;
  width: 400px;
  height: 55px;
  border-radius: 10px;
`;

export const Inputbutton = styled.div`
  position: absolute;
  margin-top: 20px;
  margin-left: 350px;
  width: 40px;
  height: 40px;
`;

export const Barcode = styled.div`
  margin-right: 10px ${(props) => (props.mRight ? props.mRight : "")};
  width: 55px;
  height: 55px;
  color: #fff;
`;

export const Filter = styled.div`
  width: 41px;
  height: 51px;
  color: #fff;
  margin: auto 0px auto 410px;
`;

export const ButtonContainer = styled.div`
  margin: auto 0;
  display: flex;
`;



export const ModalContent = styled.div`
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
`;

export const ModalTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const StudentList = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
  max-height: 200px; 
  overflow-y: auto;
`;

export const StudentListItem = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding: 5px 0;
`;

export const StudentName = styled.span`
  font-size: 16px;
  color: #333;
`;

export const StudentBarcode = styled(StudentName)``;

export const PointInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 15px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonCancel = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #ccc;
  color: #333;
`;

export const ButtonConfirm = styled(ButtonCancel)`
  background-color: #3498db;
  color: #fff;
`;
