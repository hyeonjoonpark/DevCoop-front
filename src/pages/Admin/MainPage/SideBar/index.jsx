import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as _ from "./style";
import * as P from "common/PageWrapStyle";
import styled from "styled-components";
// 토글 상태를 변경하는 함수

const SidebarItem = styled.div`
  /* 각 항목의 스타일 */
  cursor: pointer;
`;
const SubItems = styled.div`
  /* 내부 항목의 스타일 */
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

const SidebarItemLink = styled(Link)`
  /* 링크 스타일 */
  display: block;
  color: #fff; // 예시 색상
  padding: 10px 15px;
  text-decoration: none;

  &:hover {
    background-color: #666; // 호버 스타일
  }
`;

const SideBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <P.LeftBar>
      <SidebarItem onClick={toggleOpen}>AriPay</SidebarItem>
      <SubItems isOpen={isOpen}>
        <SidebarItemLink to="/admin/barcode">바코드 입력</SidebarItemLink>
        <SidebarItemLink to="/admin/stockinfo">재고 관리</SidebarItemLink>
      </SubItems>
    </P.LeftBar>
  );
};

export default SideBar;
