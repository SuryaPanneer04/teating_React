import React, { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  // function increment() {
  //   setCount(count + 1);
  // }
  // function decrement() {
  //   setCount(count - 1);
  // }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default App;
