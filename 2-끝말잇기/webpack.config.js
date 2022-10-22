const path = require('path'); // node에서 경로 조작하는 path라는 애가 있다.

module.exports = {
  name: 'word-relay-setting',
  mode: 'development', // 실서비스 : production
  devtool: 'eval', // 빠르게 하겠다.
  resolve: {
    extensions: ['.js', '.jsx'], // entry에 확장자 없이 적어도 여기있는걸 찾겠다.
  },
  entry: {
    app: ['./client'],
  }, // 입력

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  }, // 모듈을 적용

  output: {
    path: path.join(__dirname, 'dist'),
    // path.join 하면 경로를 알아서 합쳐준다.
    // 현재 폴더 안에 있는 dist
    // /react-webgame/2-끝말잇기/dist (현재폴더 안에 있는 dist를 픽해준다.)
    filename: 'app.js',
  }, // 출력
};
