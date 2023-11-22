// MenuData.js 파일

const MenuItems = [
  {
    name: 'AriPay',
    links: [
      { to: '/admin/', text: '학생증 스캔' },
      { to: '/admin/manycharge', text: '일괄 충전' },
    ],
  },
  {
    name: '재고관리',
    links: [
      { to: '/admin/stockVariance', text: '기간별재고변동' },
      { to: '/admin/inventorybyday', text: '일별재고조회' },
      { to: '/admin/inventory', text: '입고&손실 내역' },
      { to: '/admin/receipt', text: '판매 내역' },
      { to: '/admin/item', text: '상품 내역' },
    ],
  },
  {
    name: '재정관리',
    links: [
      { to: '/admin/preparing', text: '매입매출' },
      { to: '/admin/preparing', text: '금전출납부' },
    ],
  },
  {
    name: '조합원관리',
    links: [{ to: '/admin/userlist', text: '조합원 목록' }],
  },
  {
    name: '설정',
    links: [
      { to: '/admin/preparing', text: '기본설정' },
      { to: '/admin/preparing', text: '계좌설정' },
    ],
  },
  // 다른 항목들을 이 배열에 추가
];

export default MenuItems;
