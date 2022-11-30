import React, { useEffect, useRef, useState } from 'react';
import Ball from './Ball';
import { getWinNumbers } from './getWinNumbers';

function LottoHooks() {
  const [winNumbers, setWinNumbers] = useState(getWinNumbers);
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);

  const timeouts = useRef([]);

  const runTimeOuts = () => {
    for (let i = 0; i < 6; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls(prev => [...prev, winNumbers[i]]);
      }, (i + 1) * 100);
    }
    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 700);
  };

  useEffect(() => {
    runTimeOuts();
    return () => timeouts.current.forEach(x => clearTimeout(x));
  }, [timeouts.current]);

  const onClickRedo = () => {
    setWinNumbers(getWinNumbers);
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = [];
  };

  return (
    <>
      <div>당첨숫자 훅스</div>
      <div id="결과창">
        {winBalls.map(x => (
          <Ball key={x} number={x} />
        ))}
      </div>
      <div>보너스!</div>
      {bonus && <Ball number={bonus} />}
      {redo && <button onClick={onClickRedo}>한번 더!</button>}
    </>
  );
}

export default LottoHooks;
