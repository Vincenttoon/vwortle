import React from "react";

const BoardButtons = () => {
  return (
    <div className="choices-div">
      <a href="/FourBoard">
        <button className="choice-button choice-4">4 Letters</button>
      </a>
      <a href="/FiveBoard">
        <button className="choice-button choice-5">5 Letters</button>
      </a>
      <a href="/">
        <button className="choice-button choice-6">6 Letters</button>
      </a>
      <a href="/SevenBoard">
        <button className="choice-button choice-7">7 Letters</button>
      </a>
      <a href="/EightBoard">
        <button className="choice-button choice-8">8 Letters</button>
      </a>
    </div>
  );
};

export default BoardButtons;
