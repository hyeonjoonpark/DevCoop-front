import React, { useEffect, useState } from 'react';
import * as _ from './style';
import * as C from '../ChargeComplete/style';
import axiosInstance from 'utils/Axios';
import { PrettyDateTime } from 'utils/Date';

const AdminChargePoint = () => {
  const [data, setData] = useState(null);
  const [logEntries, setLogEntries] = useState([]);
  const [modalStates, setModalStates] = useState([]);
  // console.log("Check user charge log");
  useEffect(() => {
    const clientbarcode = localStorage.getItem('clientbarcode');
    if (clientbarcode) {
      const adminUserLogPromise = axiosInstance.post('/admin/chargeuserlog', {
        clientbarcode,
      });
      const chargeLogPromise = axiosInstance.get('/admin/chargelog', {
        params: {
          id: clientbarcode,
        },
      });

      Promise.all([adminUserLogPromise, chargeLogPromise])
        .then(([adminChargeResponse, chargeLogResponse]) => {
          setData(adminChargeResponse.data);
          // Handle chargeLogResponse.data to set date, point, inner_point, total states
          const chargeLogData = chargeLogResponse.data;

          // console.log(adminChargeResponse.data);

          setLogEntries(chargeLogData);
          // 초기 모달 상태 설정
          setModalStates(new Array(chargeLogData.length).fill(false));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  const toggleModal = (index) => {
    // 특정 인덱스의 모달 상태 토글
    const newModalStates = [...modalStates];
    newModalStates[index] = !newModalStates[index];
    setModalStates(newModalStates);
  };

  const PointToggleWrap = ({ logEntry }) => {
    const { date, point, inner_point, total } = logEntry;
    return (
      <_.PPointLogWrap>
        <_.PPointLogWrapBar>
          <div>{PrettyDateTime(date)}</div>
          <_.PointState>충전</_.PointState>
        </_.PPointLogWrapBar>
        <_.PPointSection>
          <_.PointInfoWrap>
            <_.PPointInfo>원래금액</_.PPointInfo>
            <_.PPointInfo>{point.toLocaleString()}원</_.PPointInfo>
          </_.PointInfoWrap>
          <_.PointInfoWrap>
            <_.PPointInfo>충전금액</_.PPointInfo>
            <_.PPointInfo>+{inner_point.toLocaleString()}원</_.PPointInfo>
          </_.PointInfoWrap>
          <hr style={{ marginTop: '40px' }} />
          <_.PointInfoWrap>
            <_.PPointInfo>최종금액</_.PPointInfo>
            <_.PPointInfo style={{ color: 'black', fontWeight: 700 }}>
              {total.toLocaleString()}원
            </_.PPointInfo>
          </_.PointInfoWrap>
        </_.PPointSection>
      </_.PPointLogWrap>
    );
  };

  return (
    <div style={{ flexDirection: 'column' }}>
      {data &&
        data.map((item, index) => (
          <div key={index}>
            <_.PointLogWrap
              onClick={() => toggleModal(index)}
              style={{ background: '#E6EBFF' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <C.InfoText name="date">{PrettyDateTime(item.date)}</C.InfoText>
                <C.InfoText>{item.inner_point.toLocaleString()}</C.InfoText>
                <C.InfoText> {'충전'} </C.InfoText>
              </div>
            </_.PointLogWrap>
            <div>
              {/* 해당 인덱스의 모달 상태가 true일 때만 모달 렌더링 */}
              {modalStates[index] ? (
                <PointToggleWrap logEntry={logEntries[index]} />
              ) : null}
            </div>
          </div>
        ))}
    </div>
  );
};

export default AdminChargePoint;
