import React from "react";
import styled from "styled-components";

export const StudentinfoItem = ({ student }) => {
  return (
    <div>
      <InfoWrap>
        <input type="radio" />
        <div key={student.student_number} style={{ display: "flex", justifyContent: "space-between" }}>
          <div>{student.student_number}</div>
          <div>{student.student_name}</div>
          <div>{student.code_number}</div>
        </div>
      </InfoWrap>
    </div>
  );
};

const InfoWrap = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #eff0f2;
`;

