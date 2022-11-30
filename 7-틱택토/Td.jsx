import React, { useCallback } from 'react';
import { CHANGE_TURN, CLICK_CELL } from './TicTacToe';

function Td({ rowIndex, cellIndex, dispatch, cellData }) {
  const onClickTd = useCallback(() => {
    dispatch({ type: CLICK_CELL, rowIndex, cellIndex });
    dispatch({ type: CHANGE_TURN });
  }, []);
  return <td onClick={onClickTd}>{cellData}</td>;
}

export default Td;
