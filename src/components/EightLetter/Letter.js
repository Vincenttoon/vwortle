import React, { useContext, useEffect } from "react";
import { AppContext } from "../../pages/EightBoard";

function Letter({ letterPos, attemptVal }) {
  const {
    board,
    currAttempt,
    correctWord,
    disabledLetters,
    setDisabledLetters,
  } = useContext(AppContext);

  // Ensure correctWord is not null or undefined
  const correctWordUpperCase = correctWord ? correctWord.toUpperCase() : "";

  // Ensure letterPos is within the bounds of correctWord
  const validLetterPos =
    letterPos >= 0 && letterPos < correctWordUpperCase.length;

  // Check if the board and correctWord are defined at the specified position
  const letter =
    validLetterPos && board[attemptVal] ? board[attemptVal][letterPos] : "";
  const correct =
    validLetterPos &&
    board[attemptVal] &&
    correctWordUpperCase[letterPos] === letter;
  const almost =
    validLetterPos &&
    board[attemptVal] &&
    !correct &&
    letter !== "" &&
    correctWordUpperCase.includes(letter);
  const letterState =
    validLetterPos &&
    board[attemptVal] &&
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

  useEffect(() => {
    if (validLetterPos && letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);

  return (
    <div className={`letter ${letterState}`} id={letterState}>
      {letter}
    </div>
  );
}

export default Letter;
