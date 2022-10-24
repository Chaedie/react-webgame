const React = require('react');
const ReactDom = require('react-dom/client');
const NumberBaseball = require('./NumberBaseball');
const { default: Test } = require('./RenderTest');

ReactDom.createRoot(document.querySelector('#root')).render(
  <>
    <NumberBaseball />
    <Test />
  </>
);
