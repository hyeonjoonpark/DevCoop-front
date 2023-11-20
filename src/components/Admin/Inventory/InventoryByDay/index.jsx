import React, { useEffect, useState } from 'react';
import DataTable from 'pages/Admin/TablePage';
import axiosInstance from 'utils/Axios';

export default function InventoryCheck() {
  const [endDate, setEndDate] = useState(
    new Date(
      Date.UTC(new Date().getUTCFullYear(), new Date().getUTCMonth() + 1, 0)
    )
  );
  const [data, setData] = useState([]);

  // 월초부터 월말까지 기본 조회
  const handleSearch = () => {
    const queryParams = `?end_date=${endDate.toISOString().split('T')[0]}`;

    axiosInstance
      .get(`/admin/inventorybyday${queryParams}`)
      .then((response) => {
        if (response.status === 204) {
          // 사용자에게 데이터가 없음을 알리고, data 상태를 빈 배열로 설정합니다.
          console.log('No content');
          setData([]);
        } else {
          // 받아온 데이터의 필드를 재매핑합니다.
          const remappedData = response.data.map((item) => ({
            상품번호: item.item_id,
            상품이름: item.item_name,
            수량: item.quantity,
            최종업데이트: item.last_updated,
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
  }, [endDate]);

  return (
    <DataTable
      TableName="일별재고조회"
      endDate={endDate}
      setEndDate={setEndDate}
      data={data}
    />
  );
}
