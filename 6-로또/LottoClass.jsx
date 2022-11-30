import React, { Component } from 'react';
import Ball from './Ball';
import { getWinNumbers } from './getWinNumbers';

class LottoClass extends Component {
  state = {
    winNumbers: getWinNumbers(), // 당첨 숫자들
    winBalls: [],
    bonus: null, // 보너스 공
    redo: false,
  };

  timeouts = [];

  runTimeouts = () => {
    const { winNumbers } = this.state;
    for (let i = 0; i < winNumbers.length - 1; i++) {
      this.timeouts[i] = setTimeout(() => {
        this.setState(prevState => {
          return { winBalls: [...prevState.winBalls, winNumbers[i]] };
        });
      }, (i + 1) * 100);
      this.timeouts[6] = setTimeout(() => {
        this.setState({
          bonus: winNumbers[6],
          redo: true,
        });
      }, 700);
    }
  };
  componentDidMount() {
    this.runTimeouts();
  }

  componentDidUpdate() {
    if (this.state.winBalls.length === 0) {
      this.runTimeouts();
    }
  }

  componentWillUnmount() {
    this.timeouts.forEach(x => clearTimeout(x));
  }

  onClickRedo = () => {
    this.setState({
      winNumbers: getWinNumbers(), // 당첨 숫자들
      winBalls: [],
      bonus: null, // 보너스 공
      redo: false,
    });
    this.timeouts = [];
  };

  render() {
    const { winBalls, bonus, redo } = this.state;
    return (
      <>
        <div>당첨숫자</div>
        <div id="결과창">
          {winBalls.map(x => (
            <Ball key={x} number={x} />
          ))}
        </div>
        <div>보너스!</div>
        {bonus && <Ball number={bonus} />}
        {redo && <button onClick={this.onClickRedo}>한번 더!</button>}
      </>
    );
  }
}

export default LottoClass;
