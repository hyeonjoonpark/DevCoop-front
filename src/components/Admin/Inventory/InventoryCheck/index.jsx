import React, { useEffect, useState } from 'react';
import DataTable from 'pages/Admin/TablePage';
import axiosInstance from 'utils/Axios';
import { PrettyDateTime } from 'utils/Date';
const stockData = [
  {
    item_id: 1,
    item_name: '상품 A',
    quantity: 100,
    last_updated: '2023-11-14 18:46:41',
  },
];

export default function InventoryCheck() {
  const [startDate, setStartDate] = useState(
    new Date(Date.UTC(new Date().getUTCFullYear(), new Date().getUTCMonth(), 1))
  );
  const [endDate, setEndDate] = useState(
    new Date(
      Date.UTC(new Date().getUTCFullYear(), new Date().getUTCMonth() + 1, 0)
    )
  );
  const [isEndDateVisible, setIsEndDateVisible] = useState(false);
  const [data, setData] = useState([]);

  // 월초부터 월말까지 기본 조회
  const handleSearch = () => {
    const queryParams = `?start_date=${
      startDate.toISOString().split('T')[0]
    }&end_date=${endDate.toISOString().split('T')[0]}`;

    axiosInstance
      .get(`/admin/inventoryCheck${queryParams}`)
      .then((response) => {
        if (response.status === 204) {
          // 사용자에게 데이터가 없음을 알리고, data 상태를 빈 배열로 설정합니다.
          console.log('No content');
          setData([]);
        } else {
          // 받아온 데이터의 필드를 재매핑합니다.
          const remappedData = response.data.map((item) => ({
            재고번호: item.inventory_id,
            상품번호: item.item_id,
            상품이름: item.item_name,
            수량: item.quantity,
            최종업데이트: PrettyDateTime(item.last_updated),
            작성자아이디: item.writer_id,
            사유: item.reason,
          }));

          // 재매핑된 데이터를 상태에 설정합니다.
          console.log('Data sent:', remappedData);
          setData(remappedData);
        }
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });
  };

  useEffect(() => {
    handleSearch();
  }, [startDate, endDate]);

  return (
    <DataTable
      TableName="입고&손실 내역"
      startDate={startDate}
      endDate={endDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      data={data}
    />
  );
}
