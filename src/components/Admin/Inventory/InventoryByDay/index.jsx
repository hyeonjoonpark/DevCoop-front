import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import TableHeader from 'pages/Admin/TablePage/TableHeader';
import DataTable from 'pages/Admin/TablePage/Table';
import DataTablePage from 'pages/Admin/TablePage';
import axiosInstance from 'utils/Axios';
import Modal from 'components/Modal';
import * as _ from './style';

export default function InventoryByDay() {
  const movePage = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [barcode, setBarcode] = useState('');
  const [quantity, setQuantity] = useState('');
  const [itemInfo, setItemInfo] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const barcodeInputRef = useRef(null);

  const [endDate, setEndDate] = useState(
    new Date(
      Date.UTC(new Date().getUTCFullYear(), new Date().getUTCMonth() + 1, 0)
    )
  );
  const [data, setData] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setBarcode('');
    setItemInfo('');
    setQuantity('');
  };

  useEffect(() => {
    if (isModalOpen) {
      // 모달이 열릴 때 바코드 입력창에 포커스를 설정
      barcodeInputRef.current.focus();
    }
  }, [isModalOpen]);

  const handleBarcodeChange = (e) => {
    setBarcode(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddItem = async () => {
    try {
      if (!barcode) {
        setErrorMessage('바코드를 입력하세요.');
        return;
      }

      const response = await axiosInstance.get(
        `/admin/insertinventory/${barcode}`
      );

      if (response.data.message === '바코드가 존재하지 않습니다.') {
        setItemInfo('바코드가 존재하지 않습니다.');
      } else {
        setItemInfo(response.data.name);

        // 바코드 조회 성공 후, 수량 입력과 재고등록 버튼 활성화
        setQuantity('');
      }
    } catch (error) {
      console.error('Error in handleAddItem:', error);
      setErrorMessage('바코드 인식에 실패했습니다.');
    }
  };

  const handleSnapshotItem = async () => {
    try {
      if (!barcode || !quantity) {
        setErrorMessage('바코드, 수량을 모두 입력하세요.');
        return;
      }

      await sendBarcodeForSnapshot(barcode, quantity);
      closeModal();
    } catch (error) {
      console.error('스냅샷 생성 중 오류가 발생했습니다.', error);
      setErrorMessage('스냅샷 생성 중 오류가 발생했습니다.');
    }
  };

  const sendBarcodeForSnapshot = async (barcode, quantity, reason) => {
    try {
      const response = await axiosInstance.post('/admin/createsnapshots', {
        barcode,
        quantity,
        reason,
      });
      movePage('/admin/inventorybyday');
    } catch (error) {
      console.error('Error in sendBarcodeForSnapshot:', error);
      setErrorMessage('스냅샷 생성 중 오류가 발생했습니다.');
    }
  };

  const handleSearch = () => {
    const queryParams = `?end_date=${endDate.toISOString().split('T')[0]}`;

    axiosInstance
      .get(`/admin/inventorybyday${queryParams}`)
      .then((response) => {
        if (response.status === 204) {
          console.log('No content');
          setData([]);
        } else {
          const remappedData = response.data.map((item) => ({
            상품번호: item.item_id,
            상품이름: item.item_name,
            수량: item.quantity,
            최종업데이트: item.last_updated,
          }));
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
    <>
      <DataTablePage 
        data={data} 
        TableName="일별재고조회"
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <_.ButtonContainer>
        <_.Dbutton onClick={openModal}>재고기준등록</_.Dbutton>
      </_.ButtonContainer>

      <Modal isOpen={isModalOpen}>
        <_.ModalContent>
          <_.ModalTitle>스냅샷(재고기준점) 등록</_.ModalTitle>
          <_.StockInfoWrap>
            <_.Infotext>바코드</_.Infotext>
            <_.InfoInput
              ref={barcodeInputRef}
              name="barcode"
              value={barcode}
              onChange={handleBarcodeChange}
            />
            <_.Infobutton mRight={'10px'} onClick={handleAddItem}>
              바코드조회
            </_.Infobutton>
            {itemInfo && (
              <>
                <_.Infotext>수량</_.Infotext>
                <_.InfoInput
                  name="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                />
              </>
            )}
            {itemInfo && <_.Infotext>상품명: {itemInfo}</_.Infotext>}
            {errorMessage && (
              <_.Infotext style={{ color: 'red' }}>{errorMessage}</_.Infotext>
            )}
          </_.StockInfoWrap>

          <_.BtnWrap>
            {itemInfo ? (
              <>
                <_.Infobutton mRight={'10px'} onClick={handleSnapshotItem}>
                  재고기준등록
                </_.Infobutton>
                <_.Infobutton onClick={closeModal}>닫기</_.Infobutton>
              </>
            ) : (
              <_.Infobutton onClick={closeModal}>닫기</_.Infobutton>
            )}
          </_.BtnWrap>
        </_.ModalContent>
      </Modal>
    </>
  );
}
