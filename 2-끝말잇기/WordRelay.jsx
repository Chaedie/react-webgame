const React = require('react');
const { Component } = React;

class WordRelay extends Component {
  state = {
    text: '시작',
    input: '',
    result: '',
    score: 0,
  };

  onSubmitInput = e => {
    e.preventDefault();
    const { text, input, score } = this.state;
    if (text[text.length - 1] === input[0]) {
      this.setState({ result: '딩동댕' });
      this.setState({ input: '' });
      this.setState({ text: input });
      this.setState({ score: score + 1 });
    } else {
      this.setState({ result: '땡' });
    }
  };

  render() {
    return (
      <>
        <header>
          <h1>구구단</h1>
        </header>
        <main>
          <h3>제시어 : {this.state.text}</h3>
          <form onSubmit={this.onSubmitInput}>
            <input type="text" value={this.state.input} onChange={e => this.setState({ input: e.target.value })} />
            <input type="submit" value="submit" />
          </form>
          <h3>결과 : {this.state.result}</h3>
          <h3>점수 : {this.state.score}</h3>
        </main>
      </>
    );
  }
}

module.exports = WordRelay;
