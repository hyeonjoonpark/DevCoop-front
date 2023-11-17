import React, { useEffect, useState } from 'react';
import DataTable from 'pages/Admin/InventoryTablePage';
import axiosInstance from 'utils/Axios';

const stockData = [
  {
    item_id: 1,
    item_name: '상품 A',
    quantity: 100,
    last_updated: '2023-11-14 18:46:41',
  },
];

export default function ItemPage() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axiosInstance
      .get(`/admin/itemCheck`)
      .then((response) => {
        if (response.status === 204) {
          console.log('No content');
          setData([]);
        } else {
          setData(response.data);
        }
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []); // 빈 의존성 배열을 전달하여 이 useEffect가 마운트 시에만 실행되도록 합니다.

  return <DataTable TableName="상품 내역" data={data} />;
}
