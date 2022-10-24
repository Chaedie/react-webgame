import React, { useRef, useState } from 'react';

function ReactionCheck() {
  const [state, setState] = useState('none');
  const [results, setResults] = useState([]);
  const timeout = useRef();
  const startTime = useRef();

  const startGame = () => {
    setState('waiting');
    timeout.current = setTimeout(() => {
      setState('clickable');
      startTime.current = new Date().getTime();
    }, Math.floor(Math.random() * 1000) + 1000);
  };

  const onClickBox = () => {
    if (state === 'none') return;
    if (state === 'waiting') {
      clearTimeout(timeout.current);
      setState('none');
      return;
    }
    saveResult();
  };

  const saveResult = () => {
    let endTime = new Date().getTime();
    setState('none');
    let result = endTime - startTime.current;
    setResults(prev => [...prev, result]);
  };

  const reset = () => {
    setResults([]);
    clearTimeout(timeout.current);
    setState('none');
  };

  const getResultsAvg = () => {
    return results.reduce((acc, cur) => acc + cur, 0) / results.length || 0;
  };

  return (
    <>
      <ReactionHeader startGame={startGame}></ReactionHeader>
      {/* <h1>리액션 체크!</h1>
      <button onClick={startGame}>시작버튼!</button>
      <h2>아쿠아색이 되면 눌러주세요!</h2> */}
      <div onClick={onClickBox} className={`gameBox ${state}`}></div>
      {results.length !== 0 && (
        <>
          <h3>평균 반응 속도 : {getResultsAvg()} ms</h3>
          <button onClick={reset}>리셋</button>
        </>
      )}
    </>
  );
}

export default ReactionCheck;

// 리셋 될 때 리렌더링을 못 막았다. React.memo만으로 안되나보다. 뭔가 더 공부를 해야 할것같다.
const ReactionHeader = React.memo(function ReactionHeader({ startGame }) {
  return (
    <>
      <h1>리액션 체크!</h1>
      <button onClick={startGame}>시작버튼!</button>
      <h2>아쿠아색이 되면 눌러주세요!</h2>
    </>
  );
});
