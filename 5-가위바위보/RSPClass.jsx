import React, { Component } from 'react';

// 클래스 컴포넌트의 라이프 사이클
// 생성 : constructor => render => ref => componentDidMount
// 갱신 : => (state/props 바뀔 때 => shouldComponentUpdate(true) => render => componentDidUpdate)
// 제거 : 부모가 나를 없앴을 때 => componentWillUnmount => 소멸
class RSPClass extends Component {
  state = {
    aiPick: '',
    userPick: '',
    result: '',
  };

  i = 0;
  interval;

  // 컴포넌트가 첫 렌더링 된 후, 여기에 비동기 요청을 많이 함
  componentDidMount = () => this.start();
  // 리렌더링 후
  componentDidUpdate() {}
  // 컴포넌트가 제거되기 직전, 비동기 요청 정리를 많이 함
  componentWillUnmount = () => clearInterval(this.interval);

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
    setTimeout(() => {
      this.start();
    }, 2000);
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
