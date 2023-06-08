import React from "react";
import styled from "styled-components";

export const Barcode = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <BarcodeWrap>
      <BarcodeIn>
        <BarcodeInput
          placeholder="바코드를 스캔해주세요"
          onChange={handleChange}
          type="password"
        />
        <br />
        <ConfirmButton>확인</ConfirmButton>
      </BarcodeIn>
    </BarcodeWrap>
  );
};

const BarcodeWrap = styled.div`
  width: 100%;
  height: 600px;
`;

const BarcodeIn = styled.form`
  margin: 0 auto;
  width: 500px;
  height: 100%;
`;

const BarcodeInput = styled.input`
  width: 500px;
  height: 50px;
`;

const ConfirmButton = styled.button`
  width: 500px;
`;
