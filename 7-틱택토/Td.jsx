import React, { memo, useCallback } from 'react';
import { CLICK_CELL } from './TicTacToe';

function Td({ rowIndex, cellIndex, dispatch, cellData }) {
  console.log('td rendered');

  const onClickTd = useCallback(() => {
    if (cellData) {
      return;
    }
    dispatch({ type: CLICK_CELL, rowIndex, cellIndex });
  }, [cellData]);
  return <td onClick={onClickTd}>{cellData}</td>;
}

export default memo(Td);
