import React, { useState } from "react";
import * as _ from "./style";
import * as P from "../../common/PageWrapStyle";
import Header from "../Header";
import { StudentinfoItem } from "./StudentinfoItem";
// import { getStudentinfo } from "../../axios";
// import data from "./data.json";
import { useNavigate } from "react-router-dom";
// import { ReactComponent as SearchIcon } from "../../assets/Searchicon.svg";
import { ReactComponent as BarcodeIcon } from "../../assets/BarcodeIcon.svg";
import { ReactComponent as FilterIcon } from "../../assets/FilterIcon.svg";
// import Modal from "../Modal";
import StudentCharge from "../StudentCharge";

const Studentinfo = () => {
  const [selectAll, setSelectAll] = useState(false); // 라디오 박스 전체 선택 상태


  
  // 라디오 박스 상태 전환 함수
  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  const movePage = useNavigate();

  function barcode() {
    movePage("/barcode");
  }

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <P.PageWrap>
        <P.PageContainer>
          <Header />

          <_.InfoContainer>
            <_.InfoHeader>
              <_.Infotitle>학생 정보 조회</_.Infotitle>
              <_.ButtonContainer>
                <_.Barcode onClick={barcode}>
                  <BarcodeIcon />
                </_.Barcode>
                <_.Infobutton mRight="10px" onClick={toggleSelectAll}>
                  일괄선택
                </_.Infobutton>

                <StudentCharge />
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
                <StudentinfoItem checked={selectAll} />
              </div>
            </_.Infolist>
          </_.InfoContainer>
        </P.PageContainer>
      </P.PageWrap>
    </>
  );
};

export default Studentinfo;
