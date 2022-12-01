import React, { useCallback } from 'react';
import { CHANGE_TURN, CLICK_CELL } from './TicTacToe';

function Td({ rowIndex, cellIndex, dispatch, cellData }) {
  const onClickTd = useCallback(() => {
    if (cellData) {
      return;
    }
    dispatch({ type: CLICK_CELL, rowIndex, cellIndex });
  }, [cellData]);
  return <td onClick={onClickTd}>{cellData}</td>;
}

export default Td;
