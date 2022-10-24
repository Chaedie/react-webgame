const React = require('react');
const ReactDom = require('react-dom/client');
const { default: ReactionCheck } = require('./ReactionCheck');

ReactDom.createRoot(document.querySelector('#root')).render(<ReactionCheck />);
