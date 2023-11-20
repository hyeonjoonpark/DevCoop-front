import React, { useState } from 'react';
import styled from 'styled-components';
import imgLogo from 'assets/DevCoopL.svg';
import Modal from 'components/Modal';
import * as _ from './style';
import { useNavigate } from 'react-router-dom';
import axiosInstance from 'utils/Axios';
import { FlexRow } from '../StockInfo/style';

export const StockBarcode = () => {
  const [barcode, setBarcode] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [itemInfo, setItemInfo] = useState(null); // 재고명을 저장할 상태
  const [quantity, setQuantity] = useState('');
  const [reason, setReason] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const sendBarcodeForInsert = async (barcode, quantity, reason) => {
    try {
      const response = await axiosInstance.post('/admin/insertinventory', {
        barcode,
        quantity,
        reason,
      });
      navigate('/admin/stockinfo');
      // return response.data;
    } catch (error) {
      console.error('Error in sendBarcode:', error);
    }
  };
  const sendBarcodeForSnapshot = async (barcode, quantity, reason) => {
    try {
      const response = await axiosInstance.post('/admin/createsnapshots', {
        barcode,
        quantity,
      });
      navigate('/admin/stockinfo');
      // return response.data;
    } catch (error) {
      console.error('Error in sendBarcode:', error);
    }
  };

  const handleAddItem = async () => {
    try {
      await sendBarcodeForInsert(barcode, quantity, reason);
      setModalOpen(false);
      setItemInfo(null);
      setQuantity('');
      setReason('');
    } catch (error) {
      console.error('재고 등록 중 오류가 발생했습니다.', error);
    }
  };
  const handleSnapshotItem = async () => {
    try {
      await sendBarcodeForSnapshot(barcode, quantity, reason);
      setModalOpen(false);
      setItemInfo(null);
      setQuantity('');
      setReason('');
    } catch (error) {
      console.error('스냅샷 생성 중 오류가 발생했습니다.', error);
    }
  };

  const showModal = async () => {
    try {
      const response = await axiosInstance.get(
        `/admin/insertinventory/${barcode}`
      );
      if (response.data.message === '바코드가 존재하지 않습니다.') {
        //console.log("바코드가 존재하지 않습니다.");
        setItemInfo('바코드가 존재하지 않습니다.');
        setModalOpen(true);
      } else {
        console.log('바코드가 정상적으로 입력되었습니다.');
        setItemInfo(response.data.name);
        setModalOpen(true);
      }
      setModalOpen(true);
    } catch (error) {
      console.error('Error in showModal:', error);
      setErrorMessage('바코드 인식에 실패했습니다.');

      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
    }
  };

  const handleRemoveItem = async () => {
    try {
      await sendBarcodeForInsert(barcode, -quantity, reason);
      setModalOpen(false);
      setItemInfo(null);
      setQuantity('');
      setReason('');
    } catch (error) {
      console.error('손실 등록 중 오류가 발생했습니다.', error);
    }
  };
  const stockinfo = () => {
    navigate('/admin/stockinfo');
  };

  const handleChange = (e) => {
    setBarcode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message, name } = await sendBarcodeForInsert(barcode, quantity);
      if (message === '바코드가 존재하지 않습니다.') {
        showModal();
      } else {
        setItemInfo(name);
        localStorage.setItem('itembarcode', barcode);
        showModal();
      }
      //setItemInfo(message); // 서버 응답에서 재고명을 추출하여 상태에 저장
    } catch (error) {
      console.log('바코드 인식에 실패했습니다.', error);
    }
  };

  const handleYesClick = () => {
    setModalOpen(false);
    setItemInfo(null);
  };

  const handleQuantityChange = (e) => {
    //console.log(e.target.value);
    setQuantity(e.target.value);
  };

  const handleReasonChange = (e) => {
    //console.log(e.target.value);
    setReason(e.target.value);
  };

  return (
    <BarcodeWrap>
      <BarcodeIn onSubmit={handleSubmit}>
        <div
          style={{
            fontSize: '32px',
            marginTop: '20px',
            textAlign: 'center',
            fontWeight: 600,
          }}
        >
          재고 등록 페이지
        </div>
        <LogoImg src={imgLogo} alt="logo image" onClick={stockinfo} />
        <BarcodeInput
          placeholder="상품 바코드를 입력해주세요"
          type="password"
          onChange={handleChange}
          value={barcode}
          autoFocus
        />
        <br />
        <div>
          <ConfirmButton type="button" onClick={showModal}>
            확인
          </ConfirmButton>
        </div>
      </BarcodeIn>
      {errorMessage && (
        <_.ModalOverlay>
          <_.ModalContent>{errorMessage}</_.ModalContent>
        </_.ModalOverlay>
      )}
      {modalOpen && (
        <Modal isOpen={modalOpen}>
          <_.ContentWrap>
            <_.InfoHeader>
              <_.ContentTitle>{itemInfo}</_.ContentTitle>
            </_.InfoHeader>
            <_.InfoBody style={{ marginTop: '30px' }}>
              <_.InfoText
                style={{
                  display: 'flex',
                  justifyContent: 'space-btween',
                  alignItems: 'center',
                }}
              >
                수량
              </_.InfoText>
              <_.InfoInput
                name="quantity"
                value={quantity}
                onChange={handleQuantityChange}
              />
              <_.InfoText>사유</_.InfoText>
              <_.InfoInput
                name="reason"
                value={reason}
                onChange={handleReasonChange}
              />
            </_.InfoBody>
          </_.ContentWrap>

          <_.BtnWrap>
            <_.Infobutton mRight={'10px'} onClick={handleAddItem}>
              입고
            </_.Infobutton>
            <_.Infobutton mRight={'10px'} onClick={handleRemoveItem}>
              손실
            </_.Infobutton>
            <_.Infobutton mRight={'10px'} onClick={handleSnapshotItem}>
              재고확인(스냅샷)
            </_.Infobutton>
            <_.Infobutton onClick={handleYesClick}>취소</_.Infobutton>
          </_.BtnWrap>
        </Modal>
      )}
    </BarcodeWrap>
  );
};

export default StockBarcode;

const BarcodeWrap = styled.div`
  width: 100%;
  height: 600px;
`;

const BarcodeIn = styled.form`
  margin: 0 auto;
  width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BarcodeInput = styled.input`
  width: 500px;
  height: 50px;
  border: none;
  border-bottom: 2px solid #d3d3d3;
  border-radius: 0%;
  value: ${(props) => props.value || ''};
`;

const ConfirmButton = styled.button`
  width: 500px;
`;

const LogoImg = styled.img`
  height: 130px;
  margin-bottom: 30px;
`;
