import React, { useEffect, useState } from 'react';
import DataTablePage from 'pages/Admin/TablePage';
import axiosInstance from 'utils/Axios';

const stockData = [
  {
    item_id: 1,
    item_name: '상품 A',
    quantity: 100,
    last_updated: '2023-11-14 18:46:41',
  },
];

export default function ReceiptCheck() {
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
      .get(`/admin/receiptCheck${queryParams}`)
      .then((response) => {
        if (response.status === 204) {
          // 사용자에게 데이터가 없음을 알리고, data 상태를 빈 배열로 설정합니다.
          console.log('No content');
          setData([]);
        } else {
          // 그렇지 않으면 정상적으로 데이터를 상태에 설정합니다
          console.log('Data sent:', response.data);
          setData(response.data);
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
    <DataTablePage
      TableName="판매 내역"
      startDate={startDate}
      endDate={endDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      data={data}
    />
  );
}
