import React, { Component, useEffect } from 'react';
import Tr from './Tr';

function Table({ tableData, dispatch }) {
  return (
    <table>
      {Array(tableData.length)
        .fill()
        .map((tr, i) => (
          <Tr rowData={tableData[i]} rowIndex={i} dispatch={dispatch} />
        ))}
    </table>
  );
}

export default Table;
