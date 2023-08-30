import React, { useState, useEffect } from "react";
import * as _ from "./style";
import styled from "styled-components";
import axios from "axios";

export const StudentinfoItem = ({ student, checked }) => {
  const [selected, setSelected] = useState(checked);
  const [alluser, setAllUser] = useState([]);

  useEffect(() => {
    setSelected(checked);
  }, [checked]);

  useEffect(() => {
    axios
      .get("http://10.10.0.8:6002/api/alluser")
      .then((response) => {
        console.log(response.data);
        setAllUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    setSelected(checked);
  }, [checked]);

  // const [checkboxValues, setCheckboxValues] = useState({
  //   code_number: false,
  // });

  // const handleCheckboxChange = (event) => {
  //   const { name, checked } = event.target;
  //   setCheckboxValues((prevValues) => ({
  //     ...prevValues,
  //     [name]: checked,
  //   }));
  // };

  return (
    <InfoWrap>
      {alluser.map((user, index) => (
        <_.Info key={index}>
          <_.Infochoose>
            <input
              type="checkbox"
              name={`${student.code_number}`} // Use a unique identifier for each checkbox
              checked={selected}
              // onChange={handleCheckboxChange}
            />
          </_.Infochoose>
          <_.Infochoose>
            <_.Infotext>{user.student_number}</_.Infotext>
          </_.Infochoose>
          <_.Infochoose>
            <_.Infotext>{user.code_number}</_.Infotext>
          </_.Infochoose>
        </_.Info>
      ))}
    </InfoWrap>
  );
};

const InfoWrap = styled.div`
  display: flex;
  justify-content: space-around;
  border-radius: 4px;
  flex-direction: column;
`;
