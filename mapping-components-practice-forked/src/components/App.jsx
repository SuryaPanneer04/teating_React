import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";
function createCard(emoji) {
  return (
    <Card
      id={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(createCard)}
    </div>
  );
}

export default App;
