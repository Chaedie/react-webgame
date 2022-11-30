import React, { Component } from 'react';
import Td from './Td';

function Tr({ rowData, rowIndex, dispatch }) {
  return (
    <tr>
      {Array(rowData.length)
        .fill()
        .map((td, i) => (
          <Td rowIndex={rowIndex} cellIndex={i} dispatch={dispatch} cellData={rowData[i]} />
        ))}
    </tr>
  );
}

export default Tr;
