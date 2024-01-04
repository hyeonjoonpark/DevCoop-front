import React, { useState, useEffect } from 'react';
import Modal from 'components/Modal';
import * as S from './style';
import { axiosInstance } from 'utils/Axios';
import { handleBulkCharge } from 'utils/Charge';

const StudentCharge = ({ selectedStudents, setSelectedStudents }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [studentsInfo, setStudentsInfo] = useState([]);
  const [point, setPoint] = useState('');
  const charger = localStorage.getItem('adminname');

  const onBulkCharge = (amount) => {
    const validAmount = parseInt(amount, 10);
    if (isNaN(validAmount) || validAmount <= 0) {
      alert('올바른 금액을 입력해주세요 (자연수).');
      return;
    }
    console.log('Selected Students:');
    console.log(selectedStudents);

    // 선택된 학생들에게 일정 금액을 똑같이 충전합니다.
    handleBulkCharge({
      list_code_number: selectedStudents,
      plusPoint: validAmount,
    })
      .then((response) => {
        console.log(response.data);
        alert('충전이 성공적으로 완료되었습니다.');
        setSelectedStudents([]);
        setStudentsInfo([]);
        // 충전 후 필요한 상태 업데이트나 UI 업데이트를 여기에 추가하세요.
      })
      .catch((error) => {
        console.error(error);
        alert('충전 중 오류가 발생했습니다.');
      });
  };

  useEffect(() => {
    if (selectedStudents.length) {
      axiosInstance
        .get('/admin/userlist')
        .then((response) => {
          const matchedStudents = response.data.filter((student) =>
            selectedStudents.includes(student.code_number)
          );
          setStudentsInfo(matchedStudents);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [selectedStudents]);

  const handlePointChange = (e) => {
    setPoint(e.target.value);
  };

  const handleBulkChargeClick = () => {
    onBulkCharge(point, selectedStudents);
    setModalOpen(false);
  };

  const handleBulkModalClick = () => {
    if (selectedStudents.length === 0) {
      alert('학생을 선택해주세요');
      return;
    }
    setModalOpen(true);
  };

  return (
    <>
      <S.Infobutton onClick={handleBulkModalClick}>일괄충전</S.Infobutton>
      <Modal isOpen={modalOpen}>
        <S.TitleWrap>
          <S.ContentTitle>
            선택한 학생들에게 포인트를 일괄 충전합니다.
          </S.ContentTitle>
        </S.TitleWrap>
        <S.StudentList>
          {studentsInfo.map((student) => (
            <S.StudentListItem key={student.code_number}>
              이름: {student.student_name} - 바코드: {student.code_number}
            </S.StudentListItem>
          ))}
        </S.StudentList>
        <S.String />
        <S.PointWrap>
          <S.PointInTop>
            <S.InfoText color="#8A8A8A">포인트</S.InfoText>
            <S.PointInput
              name="point"
              value={point.toLocaleString()}
              onChange={handlePointChange}
            />
          </S.PointInTop>
          <S.PointBottom>
            <span>관리자: {charger}</span>
          </S.PointBottom>
        </S.PointWrap>
        <S.BtnWrap>
          <button onClick={() => setModalOpen(false)}>취소</button>
          <button onClick={handleBulkChargeClick}>일괄충전</button>
        </S.BtnWrap>
      </Modal>
    </>
  );
};

export default StudentCharge;
