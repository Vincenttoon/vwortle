import React from "react";

const BoardButtons = () => {
  return (
    <div className="choices-div">
      <a href="/FourBoard">
        <button className="choice-button">4 Letters</button>
      </a>
      <a href="/FiveBoard">
        <button className="choice-button">5 Letters</button>
      </a>
      <a href="/">
        <button className="choice-button">6 Letters</button>
      </a>
      <a href="/SevenBoard">
        <button className="choice-button">7 Letters</button>
      </a>
      <a href="/EightBoard">
        <button className="choice-button">8 Letters</button>
      </a>
    </div>
  );
};

export default BoardButtons;
