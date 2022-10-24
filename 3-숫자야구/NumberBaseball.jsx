const React = require('react');
const { useState, useRef } = require('react');
const { default: Try } = require('./Try');

const getNumbers = () => {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
};

function NumberBaseball() {
  const [answer, setAnswer] = useState(getNumbers); // lazy init
  const [result, setResult] = useState('게임을 시작합니다.');

  const [input, setInput] = useState('');
  const [tries, setTries] = useState([]);
  // [{id: number, input: string, result: string}]

  const inputRef = useRef(null);

  const onSubmit = e => {
    e.preventDefault();
    console.log(answer);
    inputRef.current.focus();

    if (input.length === 0) return;

    if (answer.join('') === input) {
      setResult(`홈런! ${tries.length + 1}번만에 맞췄습니다!`);
      reset();
      return;
    }

    if (tries.length >= 9) {
      setResult(`10번 틀려서 실패! 정답은 ${answer}였습니다.`);
      reset();
    } else {
      const strike = answer.filter((num, i) => num === input[i]).length;
      const ball = answer.filter(num => input.indexOf(num) !== -1).length - strike;

      const thisTry = { id: tries.length + 1, input, result: `${strike}스트라이크 ${ball}볼` };
      setTries(prev => [...prev, thisTry]);
      setInput('');
    }
  };

  const reset = () => {
    setAnswer(getNumbers());
    setInput('');
    setTries([]);
  };

  return (
    <>
      <h2>{result}</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          minLength="4"
          maxLength="4"
          value={input}
          onChange={e => setInput(e.target.value)}
          ref={inputRef}
        ></input>
        <button>입력!</button>
      </form>
      <ul>
        {tries.map(tryInfo => (
          <Try key={tryInfo.id} tryInfo={tryInfo} />
        ))}
      </ul>
    </>
  );
}

module.exports = NumberBaseball;
