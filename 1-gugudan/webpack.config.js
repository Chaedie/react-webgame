const path = require('path'); // node에서 경로 조작하는 path라는 애가 있다.

module.exports = {
  name: 'word-relay-setting',
  mode: 'development', // 실서비스 : production
  devtool: 'eval', // 빠르게 하겠다. 프로덕션일 땐 hidden-source-map
  resolve: {
    extensions: ['.js', '.jsx'], // entry에 확장자 없이 적어도 여기있는걸 찾겠다.
  },
  entry: {
    app: ['./App'],
  }, // 입력

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: ['> 1% in KR'], //browserslist
                },
              },
            ],
            '@babel/preset-react',
          ], // plugin의 모음이 preset이다.
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
