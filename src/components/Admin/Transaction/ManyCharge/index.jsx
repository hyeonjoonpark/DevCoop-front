import React, { useState } from 'react';
import * as _ from './style';
import * as P from 'common/PageWrapStyle';
import { ManyChargeItem } from './ManyChargeItem';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as FilterIcon } from 'assets/FilterIcon.svg';

import StudentCharge from './ChargeModal';

const ManyCharge = () => {
  const [selectedStudents, setSelectedStudents] = useState([]);
  const movePage = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleStudentSelection = (studentId) => {
    // 학생 선택 상태를 토글
    console.log(selectedStudents);
    const isSelected = selectedStudents.includes(studentId);
    if (isSelected) {
      setSelectedStudents(selectedStudents.filter((id) => id !== studentId));
    } else {
      setSelectedStudents([...selectedStudents, studentId]);
    }
  };

  function barcode() {
    movePage('/admin/barcode');
  }

  function stockVariance() {
    movePage('/admin/stockVariance');
  }

  return (
    <>
      <P.InfoContainer>
        <P.InfoHeader>
          <_.Infotitle>학생 정보 조회</_.Infotitle>
          <_.ButtonContainer>
            <_.Barcode onClick={barcode}></_.Barcode>
            <_.Infobutton onClick={stockVariance} mRight="10px">
              재고확인
            </_.Infobutton>
            <StudentCharge
              selectedStudents={selectedStudents}
              setSelectedStudents={setSelectedStudents}
            />
          </_.ButtonContainer>
        </P.InfoHeader>

        <_.Infolist>
          <_.Infosearch>
            <_.InfoInput
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="이름 검색"
            ></_.InfoInput>
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
            <ManyChargeItem
              onToggleStudentSelection={toggleStudentSelection}
              selectedStudents={selectedStudents}
              searchTerm={searchTerm}
            />
          </div>
        </_.Infolist>
      </P.InfoContainer>
    </>
  );
};

export default ManyCharge;
