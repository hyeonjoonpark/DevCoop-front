import React, { useState } from "react";
import * as _ from "./style";
import * as P from "../../common/PageWrapStyle";
import AdminHeader from "../AdminHeader ";
import { AdminMainItem } from "./AdminMainItem";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext"
import { ReactComponent as BarcodeIcon } from "../../assets/BarcodeIcon.svg";
import { ReactComponent as FilterIcon } from "../../assets/FilterIcon.svg";
// import Modal from "../Modal";
import StudentCharge from "../StudentCharge";

const AdminMain = () => {
  const [selectAll, setSelectAll] = useState(false); // 라디오 박스 전체 선택 상태
  const [selectedStudents, setSelectedStudents] = useState([]); // 선택된 학생 목록
  const movePage = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const { isAdminLoggedin } = useAuth();
  console.log(isAdminLoggedin)
  // 라디오 박스 상태 전환 함수
  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      // 전체 선택을 해제한 경우, 선택된 학생 목록 초기화
      setSelectedStudents([]);
    }
  };
  const toggleStudentSelection = (studentId) => {
    // 학생 선택 상태를 토글
    console.log(selectedStudents)
    const isSelected = selectedStudents.includes(studentId);
    if (isSelected) {
      setSelectedStudents(selectedStudents.filter((id) => id !== studentId));
    } else {
      setSelectedStudents([...selectedStudents, studentId]);
    }
  };

  function barcode() {
    movePage("/admin/barcode");
  }


  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const handleBulkCharge = () => {
    console.log("Selected Students:");
    console.log(selectedStudents);
    // 일괄충전 기능을 구현합니다.
    // 선택된 학생들에게 일정 금액을 똑같이 충전합니다.
    // selectedStudents 배열을 사용하여 선택된 학생 목록에 접근할 수 있습니다.
  };
  return (
    <>
      <P.PageWrap>
        <P.PageContainer>
          <AdminHeader />
          <_.InfoContainer>
            <_.InfoHeader>
              <_.Infotitle>학생 정보 조회</_.Infotitle>
              <_.ButtonContainer>
                <_.Barcode onClick={barcode}>
                  <BarcodeIcon />
                </_.Barcode>
                <_.Infobutton mRight="10px" onClick={toggleSelectAll}>
                  {selectAll ? "전체해제" : "일괄선택"}
                </_.Infobutton>
                <StudentCharge selectedStudents={selectedStudents} onBulkCharge={handleBulkCharge} />
              </_.ButtonContainer>
            </_.InfoHeader>
  
            <_.Infolist>
              <_.Infosearch>
                <_.InfoInput></_.InfoInput>
                <_.Inputbutton>{/* <SearchIcon /> */}</_.Inputbutton>
                <_.Filter>
                  <FilterIcon />
                </_.Filter>
              </_.Infosearch>
              <_.Info>
                <_.Infochoose>
                  <_.Infotext>선택</_.Infotext>
                </_.Infochoose>
                <_.Infochoose>
                  <_.Infotext>이름</_.Infotext>
                </_.Infochoose>
                <_.Infochoose>
                  <_.Infotext>바코드번호</_.Infotext>
                </_.Infochoose>
              </_.Info>
              <div>
                <AdminMainItem
                  checked={selectAll}
                  onToggleStudentSelection={toggleStudentSelection}
                />
              </div>
            </_.Infolist>
          </_.InfoContainer>
        </P.PageContainer>
      </P.PageWrap>
    </>
  );
};

export default AdminMain;
