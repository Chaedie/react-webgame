import React, { useCallback, useEffect, useReducer } from 'react';
import Table from './Table';

const initialState = {
  winner: '',
  turn: 'O',
  tableData: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
  recentCell: [-1, -1],
};

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER:
      return {
        ...state,
        winner: action.winner,
      };
    case CLICK_CELL:
      const tableData = [...state.tableData];
      tableData[action.rowIndex] = [...tableData[action.rowIndex]];
      tableData[action.rowIndex][action.cellIndex] = state.turn;
      return {
        ...state,
        tableData,
        recentCell: [action.rowIndex, action.cellIndex],
      };
    case CHANGE_TURN:
      return {
        ...state,
        turn: state.turn === 'O' ? 'X' : 'O',
      };
    case RESET_GAME:
      return {
        ...state,
        turn: 'O',
        tableData: [
          ['', '', ''],
          ['', '', ''],
          ['', '', ''],
        ],
        recentCell: [-1, -1],
      };

    default:
      return state;
  }
};

function TicTacToe() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { tableData, turn, winner, recentCell } = state;
  // const [winner, setWinner] = useState('');
  // const [turn, setTurn] = useState('O');
  // const [tableData, setTableData] = useState(['', '', ''], ['', '', ''], ['', '', '']);

  const onClickTable = useCallback(() => {
    dispatch({ type: 'SET_WINNER', winner: 'O' });
  }, []);
  // 이 객체가 액션 객체이며, 디스패치가 액션객체를 실행한다.
  // 액션을 해석해서 스테이트를 바꿔주는 것이 리듀셔이다.

  useEffect(() => {
    const [row, cell] = recentCell;
    let win;
    if (row < 0) {
      return;
    }
    if (tableData[row].every(x => x === turn)) {
      win = true;
    }
    if ([tableData[0][cell], tableData[1][cell], tableData[2][cell]].every(x => x === turn)) {
      win = true;
    }
    if ([tableData[0][0], tableData[1][1], tableData[2][2]].every(x => x === turn)) {
      win = true;
    }
    if ([tableData[0][2], tableData[1][1], tableData[2][0]].every(x => x === turn)) {
      win = true;
    }
    if (win) {
      dispatch({ type: SET_WINNER, winner: turn });
      dispatch({ type: RESET_GAME });
    } else {
      let all = true; // 칸이 다 차있으면 무승부
      tableData.forEach(row => {
        row.forEach(cell => {
          if (!cell) {
            all = false;
          }
        });
      });
      if (all) {
        dispatch({ type: SET_WINNER, winner: null });
        dispatch({ type: RESET_GAME });
      } else {
        dispatch({ type: CHANGE_TURN });
      }
    }
  }, [recentCell]);

  return (
    <>
      <Table onClick={onClickTable} tableData={state.tableData} dispatch={dispatch}></Table>
      {state.winner && <div>{state.winner}님의 승리</div>}
    </>
  );
}

export default TicTacToe;
