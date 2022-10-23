import React, { Component } from 'react';

function Try({ tryInfo }) {
  const { id, input, result } = tryInfo;

  return (
    <li>
      {id}번째 결과 : "input: {input}" {result}
    </li>
  );
}

export default Try;
