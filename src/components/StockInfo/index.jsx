import React, { useState } from "react";
import * as _ from "./style";
import * as P from "../../common/PageWrapStyle";
import AdminHeader from "../AdminHeader ";
import { useNavigate } from "react-router-dom";
import { StockInfoItem } from "./StockInfoItem";
import DatePicker from "react-datepicker";
import { Dbutton } from "./style";
import Modal from "../Modal";
import styled from "styled-components";
import { axiosInstance } from "../../axios";

const StockInfo = () => {
  const movePage = useNavigate();

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [startDate, setStartDate] = useState(
    new Date(Date.UTC(new Date().getUTCFullYear(), new Date().getUTCMonth(), 1))
  );
  const [endDate, setEndDate] = useState(
    new Date(
      Date.UTC(new Date().getUTCFullYear(), new Date().getUTCMonth() + 1, 0)
    )
  );

  const handleExcelDownload = () => {
    setModalOpen(true);
    setShowDatePicker(true);
  };

  const handleSearch = () => {
    const queryParams = `?start_date=${
      startDate.toISOString().split("T")[0]
    }&end_date=${endDate.toISOString().split("T")[0]}`;

    axiosInstance
      .get(`/admin/inventoryCheck${queryParams}`)
      .then((response) => {
        console.log("Data sent:", response.data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };

  const handleDownload = () => {
    console.log("다운");
  };

  const handCloseModal = () => {
    setModalOpen(false);
  };

  function main() {
    movePage("/admin");
  }

  function barcode() {
    movePage("/admin/stockbarcode");
  }

  return (
    <>
      <P.PageWrap>
        <P.PageContainer>
          <AdminHeader />
          <_.InfoContainer>
            <_.InfoHeader>
              <_.Infotitle>재고확인</_.Infotitle>
              <_.ButtonContainer>
                <_.Infobutton mRight="10px" onClick={handleExcelDownload}>
                  엑셀출력
                </_.Infobutton>
                <_.Infobutton onClick={barcode} mRight="10px">
                  재고등록
                </_.Infobutton>
                <_.Infobutton onClick={main}>메인으로</_.Infobutton>
              </_.ButtonContainer>
            </_.InfoHeader>

            {modalOpen && (
              <Modal isOpen={modalOpen}>
                <_.ModalContent>
                  <_.Date>
                    <h2 style={{ marginTop: "30px", marginBottom: "30px" }}>
                      <b>날짜 범위 선택</b>
                    </h2>
                    {showDatePicker && (
                      <div
                        className="datePickerContainer"
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          selectsStart
                          startDate={startDate}
                          endDate={endDate}
                          dateFormat="yyyy-MM-dd"
                        />
                        <DatePicker
                          selected={endDate}
                          onChange={(date) => setEndDate(date)}
                          selectsEnd
                          startDate={startDate}
                          endDate={endDate}
                          dateFormat="yyyy-MM-dd"
                        />
                      </div>
                    )}
                  </_.Date>
                </_.ModalContent>

                <_.BtnWrap
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <_.Dbutton
                    onClick={handleSearch}
                    style={{ marginTop: "10px" }}
                  >
                    조회
                  </_.Dbutton>
                  <_.Dbutton
                    onClick={handleDownload}
                    style={{ marginTop: "10px" }}
                  >
                    출력
                  </_.Dbutton>
                  <_.Dbutton
                    onClick={handCloseModal}
                    style={{ marginTop: "10px" }}
                  >
                    닫기
                  </_.Dbutton>
                </_.BtnWrap>
              </Modal>
            )}

            <_.Infolist>
              <_.Info>
                <_.Infochoose>
                  <_.Infotext>상품번호</_.Infotext>
                </_.Infochoose>
                <_.Infochooses>
                  <_.Infotext>상품이름</_.Infotext>
                </_.Infochooses>
                <_.Infochoose>
                  <_.Infotext>남은수량</_.Infotext>
                </_.Infochoose>
                <_.Infochooses>
                  <_.Infotext>최종 변동 일시</_.Infotext>
                  <_.FilterImg
                    onClick={() => setShowDatePicker(!showDatePicker)}
                    style={{ cursor: "pointer", marginRight: "5px" }}
                  />
                </_.Infochooses>
              </_.Info>
              <_.StockInfoWrap>
                {showDatePicker && (
                  <div style={{ display: "flex" }}>
                    <div
                      className="datePickerContainer"
                      style={{
                        marginTop: "10px",
                        marginRight: "10px",
                        marginLeft: "auto",
                      }}
                    >
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        dateFormat="yyyy-MM-dd"
                      />
                    </div>
                    <div
                      className="datePickerContainer"
                      style={{
                        marginTop: "10px",
                        marginRight: "10px",
                        zIndex: 2,
                      }}
                    >
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        dateFormat="yyyy-MM-dd"
                      />
                    </div>
                    <Dbutton
                      onClick={handleSearch}
                      style={{ marginTop: "15px" }}
                    >
                      조회
                    </Dbutton>
                  </div>
                )}
                <StockInfoItem startDate={startDate} endDate={endDate} />
              </_.StockInfoWrap>
            </_.Infolist>
          </_.InfoContainer>
        </P.PageContainer>
      </P.PageWrap>
    </>
  );
};

export default StockInfo;