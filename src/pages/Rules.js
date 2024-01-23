import React from "react";
import BoardButtons from "../components/BoardButtons";

const Rules = () => {
  return (
    <div className="rules-div">
      <div className="rules-head">
        <h1 className="rules-h1">Vwortle Rules</h1>
        <p>
          This is a mock up of the New York Times Wordle game, but with
          different options on the length of words.
        </p>
        <p>
          Depending of the length of word you choose, the parameters to complete
          your guess change
        </p>
        <p>Below are the rules to choose from:</p>
      </div>

      <div className="rules-list-div">
        <ul className="rules-ul">
          <li>
            <h3 className="rule-type"> 4 Letters </h3>
            <p className="explained">
              You must solve the 4 letter word in 5 guesses
            </p>
          </li>
          <li>
            <h3 className="rule-type"> 5 Letters </h3>
            <p className="explained">
              You must solve the 5 letter word in 6 guesses
            </p>
          </li>
          <li>
            <h3 className="rule-type"> 6 Letters </h3>
            <p className="explained">
              You must solve the 6 letter word in 6 guesses
            </p>
          </li>
          <li>
            <h3 className="rule-type"> 7 Letters </h3>
            <p className="explained">
              You must solve the 7 letter word in 7 guesses
            </p>
          </li>
          <li>
            <h3 className="rule-type"> 8 Letters </h3>
            <p className="explained">
              You must solve the 8 letter word in 8 guesses
            </p>
          </li>
        </ul>
      </div>
      <div className="rules-buttons">
        <BoardButtons />
      </div>
    </div>
  );
};

export default Rules;
