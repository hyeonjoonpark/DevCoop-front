import React, { useState, useEffect } from 'react';
import * as _ from './style';
import styled from 'styled-components';
import axiosInstance from 'utils/Axios';

export const StudentInfoItem = ({
  checked,
  onToggleStudentSelection,
  searchTerm,
}) => {
  const [alluser, setAllUser] = useState([]);
  const [checkboxValues, setCheckboxValues] = useState({});

  useEffect(() => {
    axiosInstance
      .get('/admin/userlist')
      .then((response) => {
        setAllUser(response.data);
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
    onToggleStudentSelection(name);
  };

  const filteredUsers = alluser.filter((user) =>
    user.student_name.includes(searchTerm)
  );

  return (
    <InfoWrap>
      {filteredUsers.map((user, index) => (
        <_.Info key={index}>
          <_.Infochoose>
            <input
              type="checkbox"
              name={`${user.code_number}`}
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
