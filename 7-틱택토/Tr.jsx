import React, { memo } from 'react';
import Td from './Td';

function Tr({ rowData, rowIndex, dispatch }) {
  console.log('tr rendered');

  return (
    <tr>
      {Array(rowData.length)
        .fill()
        .map((td, i) => (
          <Td key={`${rowIndex}${i}`} rowIndex={rowIndex} cellIndex={i} dispatch={dispatch} cellData={rowData[i]} />
        ))}
    </tr>
  );
}

export default memo(Tr);
