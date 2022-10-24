import React, { PureComponent, useState } from 'react';

// PureComponent로 바꾸면 shouldComponentUpdate가 없어도
// 리렌더링 문제가 안생긴다.
class Test extends PureComponent {
  state = {
    counter: 0,
  };

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   if (this.state.counter !== nextState.counter) {
  //     return true;
  //   }
  //   return false;
  // }
  onClick = () => {
    this.setState({});
  };

  render() {
    console.log('렌더링', this.state);

    return (
      <div>
        <button onClick={this.onClick}>렌더 테스트 클래스</button>
      </div>
    );
  }
}
// function Test() {
//   const [counter, setCounter] = useState(0);

//   const onClick = () => {
//     setCounter(0);
//   };

//   console.log('렌더링', counter);

//   return (
//     <div>
//       <button onClick={onClick}>렌더 테스트</button>
//     </div>
//   );
// }
export default Test;
