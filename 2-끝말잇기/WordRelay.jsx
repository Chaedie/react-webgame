const { useState } = require('react');
const React = require('react');

function WordRelay() {
  const [text, setText] = useState('시작');
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [score, setScore] = useState(0);

  const onSubmitInput = e => {
    e.preventDefault();
    if (text[text.length - 1] === input[0]) {
      setResult('딩동댕');
      setInput('');
      setText(input);
      setScore(prev => prev + 1);
    } else {
      setResult('땡');
    }
  };

  return (
    <>
      <header>
        <h1>구구단</h1>
      </header>
      <main>
        <h3>제시어 : {text}</h3>
        <form onSubmit={onSubmitInput}>
          <input type="text" value={input} onChange={e => setInput(e.target.value)} />
          <input type="submit" value="submit" />
        </form>
        <h3>결과 : {result}</h3>
        <h3>점수 : {score}</h3>
      </main>
    </>
  );
}

module.exports = WordRelay;
