import React, { useState } from 'react';

function ReactionCheck() {
  const [bgColor, setBgColor] = useState('blue');
  const [isPlaying, setIsPlaying] = useState(false);
  const [startTime, setStartTime] = useState();
  const [result, setResult] = useState();

  const startGame = () => {
    setIsPlaying(true);
    setTimeout(() => {
      setBgColor('aqua');
      setStartTime(new Date().getTime());
    }, 1000);
  };

  const onClickBox = () => {
    let endTime = new Date().getTime();

    if (isPlaying === false) return;

    setBgColor('black');
    setIsPlaying(false);
    setResult(endTime - startTime + 'ms');
  };

  return (
    <>
      <h1>리액션 체크!</h1>
      <button onClick={startGame}>시작버튼!</button>
      <h2>아쿠아색이 되면 눌러주세요!</h2>
      <div onClick={onClickBox} className={`gameBox ${bgColor}`}></div>
      <h3>반응 속도 : {result}</h3>
    </>
  );
}

export default ReactionCheck;
