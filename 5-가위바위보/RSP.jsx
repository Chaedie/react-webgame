import React, { useEffect, useRef, useState } from 'react';

function RSP() {
  const [aiPick, setAiPick] = useState('');
  const [userPick, setUserPick] = useState('');
  const [result, setResult] = useState('');

  const i = useRef(0);
  const interval = useRef();

  useEffect(() => {
    start();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  const start = () => {
    clearInterval(interval.current);
    interval.current = setInterval(() => {
      setAiPick(rsp[i.current % 3]);
      i.current++;
    }, 200);
    setResult('');
  };

  const onClick = e => {
    if (result) return;

    clearInterval(interval.current);
    setUserPick(e.target.name);
    setResult(rspResult[e.target.name][aiPick]);
    setTimeout(() => {
      start();
    }, 2000);
  };

  return (
    <>
      <h1>훅스 가위 바위 보! - {result}</h1>
      <div
        className={'image'}
        style={{
          backgroundPosition: rspCoords[aiPick],
        }}
      ></div>
      {rsp.map(el => (
        <button key={el} onClick={onClick} name={el}>
          {el}
        </button>
      ))}
      <br />
      <button onClick={start}>다시 시작</button>
    </>
  );
}

export default RSP;

const rsp = ['바위', '가위', '보'];
const rspCoords = {
  바위: '0',
  가위: '-142px',
  보: '-284px',
};
const rspResult = {
  바위: { 바위: '비겼다!', 가위: '이겼다!', 보: '졌다 😭' },
  가위: { 가위: '비겼다!', 보: '이겼다!', 바위: '졌다 😭' },
  보: { 보: '비겼다!', 바위: '이겼다!', 가위: '졌다 😭' },
};
