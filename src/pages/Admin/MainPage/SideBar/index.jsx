import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as _ from './style';
import * as P from 'common/PageWrapStyle';
import styled from 'styled-components';
// 토글 상태를 변경하는 함수

const SidebarItem = styled.div`
  display: block;
  padding: 10px 15px;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  background-color: #51515e; // 호버 스타일
`;
const SubItems = styled.div`
  display: block;
  color: #fff;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

const SidebarItemLink = styled(Link)`
  /* 링크 스타일 */
  display: block;
  color: #fff; // 예시 색상
  padding: 10px 15px;
  text-decoration: none;
  font-weight: 450;
  font-size: 20px;
  /* 아랫줄 추가 */
  border-bottom: 2px solid #51515e;
`;

const SideBar = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (itemName) => {
    setOpenItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  const sidebarItems = [
    {
      name: 'AriPay',
      links: [
        { to: '/admin/', text: '바코드 입력' },
        { to: '/admin/studentinfo', text: '일괄 충전' },
      ],
    },
    {
      name: '재고관리',
      links: [
        { to: '/admin/stockinfo', text: '재고 내역' },
        { to: '/admin/inventory', text: '입고&손실 내역' },
        { to: '/admin/receipt', text: '판매 내역' },
        { to: '/admin/item', text: '상품 내역' },
      ],
    },
    {
      name: '재정관리',
      links: [
        { to: '/admin/barcode', text: '매입매출' },
        { to: '/admin/stockinfo', text: '금전출납부' },
      ],
    },
    {
      name: '조합원관리',
      links: [{ to: '/admin/?', text: '조합원 목록' }],
    },
    {
      name: '설정',
      links: [
        { to: '/admin/?', text: '기본설정' },
        { to: '/admin/?', text: '계좌설정' },
      ],
    },
    // 다른 항목들을 이 배열에 추가
  ];

  return (
    <P.LeftBar>
      {sidebarItems.map((item) => (
        <React.Fragment key={item.name}>
          <SidebarItem onClick={() => toggleItem(item.name)}>
            {item.name}
          </SidebarItem>
          <SubItems isOpen={openItems[item.name]}>
            {item.links.map((link) => (
              <SidebarItemLink key={link.text} to={link.to}>
                {link.text}
              </SidebarItemLink>
            ))}
          </SubItems>
        </React.Fragment>
      ))}
    </P.LeftBar>
  );
};

export default SideBar;
