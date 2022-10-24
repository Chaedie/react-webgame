import React, { useState } from 'react';

function Try({ tryInfo }) {
  const { id, input, result } = tryInfo;

  const [changedResult, setChangedResult] = useState(result);

  return (
    <li>
      <p>
        {id}번째 결과 : "input: {input}" {result}
      </p>
      <p onClick={() => setChangedResult(1)}>{changedResult}여기클릭</p>
    </li>
  );
}

// export default Try;

// React.memo로 래핑하면 props가 같을 때 상위 컴포넌트 리렌더링에 의해
// 억울하게 자식도 리렌더링 되는 걸 막을 수 있다.
export default React.memo(Try);
