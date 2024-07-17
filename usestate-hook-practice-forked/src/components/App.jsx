import React from "react";
import { useState } from "react";

function App() {
  const now = new Date().toLocaleTimeString();
  const [Time, setTime] = useState(now);
  setInterval(UpdateTime, 1000);
  function UpdateTime() {
    const UpdateTime = new Date().toLocaleTimeString();
    setTime(UpdateTime);
  }
  return (
    <div className="container">
      <h1> {Time} </h1>
      <button onClick={UpdateTime}>Get Time</button>
    </div>
  );
}

export default App;
