import React from 'react';
import ReactDom from 'react-dom/client';
import RSPClass from './RSPClass';
import RSP from './RSP';

ReactDom.createRoot(document.querySelector('#root')).render(
  <>
    <RSPClass />
    <RSP />
  </>
);
