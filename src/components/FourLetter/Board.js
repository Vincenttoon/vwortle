import React from "react";
import Letter from "./Letter";

const Board = () => {
  return (
    <div className="board">
      <div className="row">
        <div className="row">
          <Letter letterPos={0} attemptVal={0} />
        </div>
        <div className="row">
          <Letter letterPos={1} attemptVal={0} />
        </div>
        <div className="row">
          <Letter letterPos={2} attemptVal={0} />
        </div>
        <div className="row">
          <Letter letterPos={3} attemptVal={0} />
        </div>
      </div>
      <div className="row">
        <div className="row">
          <Letter letterPos={0} attemptVal={1} />
        </div>
        <div className="row">
          <Letter letterPos={1} attemptVal={1} />
        </div>
        <div className="row">
          <Letter letterPos={2} attemptVal={1} />
        </div>
        <div className="row">
          <Letter letterPos={3} attemptVal={1} />
        </div>
      </div>
      <div className="row">
        <div className="row">
          <Letter letterPos={0} attemptVal={2} />
        </div>
        <div className="row">
          <Letter letterPos={1} attemptVal={2} />
        </div>
        <div className="row">
          <Letter letterPos={2} attemptVal={2} />
        </div>
        <div className="row">
          <Letter letterPos={3} attemptVal={2} />
        </div>
      </div>
      <div className="row">
        <div className="row">
          <Letter letterPos={0} attemptVal={3} />
        </div>
        <div className="row">
          <Letter letterPos={1} attemptVal={3} />
        </div>
        <div className="row">
          <Letter letterPos={2} attemptVal={3} />
        </div>
        <div className="row">
          <Letter letterPos={3} attemptVal={3} />
        </div>
      </div>
      <div className="row">
        <div className="row">
          <Letter letterPos={0} attemptVal={4} />
        </div>
        <div className="row">
          <Letter letterPos={1} attemptVal={4} />
        </div>
        <div className="row">
          <Letter letterPos={2} attemptVal={4} />
        </div>
        <div className="row">
          <Letter letterPos={3} attemptVal={4} />
        </div>
      </div>
    </div>
  );
};

export default Board;
