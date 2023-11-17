import React, { useState, useEffect } from 'react';
import TableHeader from './TableHeader';
import DataTable from './Table';

export default function TablePage(props) {
  return (
    <>
      <TableHeader
        data={props.data}
        TableName={props.TableName}
        startDate={props.startDate}
        setStartDate={props.setStartDate}
        endDate={props.endDate}
        setEndDate={props.setEndDate}
      />
      <DataTable
        data={props.data}
        startDate={props.startDate}
        setStartDate={props.setStartDate}
        endDate={props.endDate}
        setEndDate={props.setEndDate}
      />
    </>
  );
}
