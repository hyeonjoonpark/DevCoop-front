import React, { useState, useEffect } from "react";
import Modal from "../Modal";
import * as S from "./style";
import { axiosInstance } from "../../axios";

const StudentCharge = ({ selectedStudents, onBulkCharge }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [studentsInfo, setStudentsInfo] = useState([]);
  const [point, setPoint] = useState("");
  const charger = localStorage.getItem("adminname");

  useEffect(() => {
    if (selectedStudents.length) {
      axiosInstance.get('/admin/alluser')
        .then(response => {
          const matchedStudents = response.data.filter(student => 
            selectedStudents.includes(student.code_number)
          );
          setStudentsInfo(matchedStudents);
        })
        .catch(error => {
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

  return (
    <>
      <S.Infobutton onClick={() => setModalOpen(true)}>일괄충전</S.Infobutton>
      <Modal isOpen={modalOpen}>
        <S.TitleWrap>
          <S.ContentTitle>
            선택한 학생들에게 포인트를 일괄 충전합니다.
          </S.ContentTitle>
        </S.TitleWrap>
        <S.StudentList>
          {studentsInfo.map(student => (
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
