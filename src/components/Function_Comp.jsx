import React, { useState } from "react";

export default function Function_Comp() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Function_Comp</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  );
}
