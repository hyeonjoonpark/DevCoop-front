import styled from 'styled-components';
import { Link } from 'react-router-dom';

// New AdminHeader
export const AdminMainHeader = styled.div`
  background-color: #34343c;
  width: 100%;
  height: 50px;
`;

export const NewHeaderInBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%
  height: 100%;

  text-align: ${(props) => (props.testAlign ? props.testAlign : '')};
  font-size: 10px;
  font-weight: 700;
  color: #8a8a8a;

  padding-left: 20px;
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : '')};
`;

export const NewLogOutBtn = styled.button`
  margin-top: 0px;
  margin-right: 10px;
  background-color: #34343c;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
`;
