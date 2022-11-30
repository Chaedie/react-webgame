import React from 'react';
import Table from './Table';

function TicTacToe() {
  const [winner, setWinner] = useState('');
  const [turn, setTurn] = useState('O');
  const [tableData, setTableData] = useState(['', '', ''], ['', '', ''], ['', '', '']);

  return (
    <>
      <Table></Table>
      {winner && <div>틱택토</div>}
    </>
  );
}

export default TicTacToe;
