import React, { memo } from 'react';
import Tr from './Tr';

function Table({ tableData, dispatch }) {
  console.log('table rendered');
  return (
    <table>
      <tbody>
        {Array(tableData.length)
          .fill()
          .map((tr, i) => (
            <Tr key={i} rowData={tableData[i]} rowIndex={i} dispatch={dispatch} />
          ))}
      </tbody>
    </table>
  );
}

export default memo(Table);
