'use strict';

import { useState, useRef } from 'react';

function Gugudan() {
  const [result, setResult] = useState('');
  const [input, setInput] = useState('');
  const [number, setNumber] = useState({
    first: ~~(Math.random() * 8 + 2),
    second: ~~(Math.random() * 8 + 2),
  });
  const numberInput = useRef();

  const onSubmitAnswer = e => {
    const { first, second } = number;
    e.preventDefault();
    if (+input === first * second) {
      setResult(`${first} * ${second} = ${input} : 정답입니다!`);
      setNumber({
        first: ~~(Math.random() * 8 + 2),
        second: ~~(Math.random() * 8 + 2),
      });
    } else {
      setResult('틀렸습니다 😅');
    }
    setInput('');
    numberInput.current.focus();
  };

  return (
    <>
      <header>
        <h1>구구단</h1>
      </header>
      <main>
        <h3>
          {number.first} 곱하기 {number.second} 은?
        </h3>
        <form onSubmit={onSubmitAnswer}>
          <input type="number" value={input} onChange={e => setInput(e.target.value)} ref={numberInput} />
          <input type="submit" value="submit" />
        </form>
        <h3>{result}</h3>
      </main>
    </>
  );
}

export default Gugudan;
