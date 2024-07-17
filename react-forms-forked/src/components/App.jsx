import React, { useState } from "react";

function App() {
  const [name, setName] = useState("Hello");
  const [headingText, setHeading] = useState();

  function handleChange(event) {
    setName(event.target.value);
  }
  function HandleClick() {
    setHeading(name);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={HandleClick}>Submit</button>
    </div>
  );
}

export default App;
