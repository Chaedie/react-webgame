import React, { Component } from 'react';

class RSPClass extends Component {
  state = {
    aiPick: '',
    userPick: '',
    result: '',
  };

  i = 0;
  interval;

  componentDidMount = () => this.start();

  start = () => {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.setState({ aiPick: rsp[this.i % 3] });
      this.i++;
    }, 200);
    this.setState({ result: '' });
  };

  onClick = e => {
    const { aiPick, result } = this.state;
    if (result) return;

    clearInterval(this.interval);
    this.setState({ userPick: e.target.name, result: rspResult[e.target.name][aiPick] });
  };

  render() {
    return (
      <>
        <h1>가위 바위 보! - {this.state.result}</h1>
        <div
          className={'image'}
          style={{
            backgroundPosition: rspCoords[this.state.aiPick],
          }}
        ></div>
        {rsp.map(el => (
          <button key={el} onClick={this.onClick} name={el}>
            {el}
          </button>
        ))}
        <br />
        <button onClick={this.start}>다시 시작</button>
      </>
    );
  }
}

export default RSPClass;

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
