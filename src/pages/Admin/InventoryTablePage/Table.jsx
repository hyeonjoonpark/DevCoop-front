import React from 'react';
import styled from 'styled-components';

// 스타일 컴포넌트 정의
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHead = styled.thead`
  background-color: #f3f3f3;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #f9f9f9;
  }

  &:hover {
    background-color: #e8ebf5;
  }
`;

const TableCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid #d3d3d3;
`;

const TableHeaderCell = styled.th`
  padding: 8px;
  border-bottom: 2px solid #d3d3d3;
`;

// 데이터를 받아와서 렌더링하는 컴포넌트
const DataTable = ({ data }) => {
  // 데이터 배열의 첫 번째 요소에서 헤더 정보를 추출합니다.
  const headers = data && data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <Table>
      <TableHead>
        <TableRow>
          {headers.map((header, index) => (
            <TableHeaderCell key={index}>{header}</TableHeaderCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {headers.map((header, columnIndex) => (
              <TableCell key={`${rowIndex}-${columnIndex}`}>
                {row[header]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;
