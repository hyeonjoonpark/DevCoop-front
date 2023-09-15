import React, { useState, useEffect } from "react";
import * as _ from "./style";
import styled from "styled-components";
import { axiosInstance } from "../../../axios";

export const StudentinfoItem = ({ checked }) => {
  const [alluser, setAllUser] = useState([]);
  const [checkboxValues, setCheckboxValues] = useState({});

  useEffect(() => {
    axiosInstance
      .get("/alluser")
      .then((response) => {
        setAllUser(response.data);
        // Initialize checkboxValues with the default checked state
        const initialCheckboxValues = {};
        response.data.forEach((user) => {
          initialCheckboxValues[user.code_number] = checked;
        });
        setCheckboxValues(initialCheckboxValues);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [checked]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));
  };
  return (
    <InfoWrap>
      {alluser.map((user, index) => (
        <_.Info key={index}>
          <_.Infochoose>
            <input
              type="checkbox"
              name={`${user.code_number}`} // Use a unique identifier for each checkbox
              checked={checkboxValues[user.code_number] || false}
              onChange={handleCheckboxChange}
            />
          </_.Infochoose>
          <_.Infochoose>
            <_.Infotext>{user.student_name}</_.Infotext>
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
