import React, { useState } from "react";
import * as _ from "./style";
import * as P from "../../common/PageWrapStyle";
import AdminHeader from "../AdminHeader ";
import { AdminMainItem } from "./AdminMainItem";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext"
import { ReactComponent as BarcodeIcon } from "../../assets/BarcodeIcon.svg";
import { ReactComponent as FilterIcon } from "../../assets/FilterIcon.svg";
import { handleBulkCharge } from "../../utils/Charge"
import StudentCharge from "../StudentCharge";

const AdminMain = () => {
  const [selectedStudents, setSelectedStudents] = useState([]);
  const movePage = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
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

  function stockinfo(){
    movePage("/admin/stockinfo");
  }

  const onBulkCharge = (amount) => {
    const validAmount = parseInt(amount, 10);
    if (isNaN(validAmount) || validAmount <= 0) {
      alert("올바른 금액을 입력해주세요 (자연수).");
      return;
    }
    console.log("Selected Students:");
    console.log(selectedStudents);
  
    // 선택된 학생들에게 일정 금액을 똑같이 충전합니다.
    handleBulkCharge({
      list_code_number: selectedStudents,
      plusPoint: validAmount,
      charger: localStorage.getItem("adminname")
    })
    .then(response => {
      console.log(response.data); 
      alert("충전이 성공적으로 완료되었습니다.");
      // 충전 후 필요한 상태 업데이트나 UI 업데이트를 여기에 추가하세요.
    })
    .catch(error => {
      console.error(error);
      alert("충전 중 오류가 발생했습니다.");
    });
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
                            <_.Infobutton onClick={stockinfo} mRight="10px">재고확인</_.Infobutton>
                            <StudentCharge selectedStudents={selectedStudents} onBulkCharge={onBulkCharge} />
                        </_.ButtonContainer>
                    </_.InfoHeader>

                    <_.Infolist>
                        <_.Infosearch>
                            <_.InfoInput value={searchTerm} onChange={handleSearchChange} placeholder="이름 검색"></_.InfoInput>
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
                                onToggleStudentSelection={toggleStudentSelection}
                                searchTerm={searchTerm} 
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