import React, { useState, createContext, useEffect } from "react";
import "../App.css";
import Board from "../components/SevenLetter/Board.js";
import Keyboard from "../components/SevenLetter/Keyboard.js";
import GameOver from "../components/SevenLetter/GameOver.js";
import BoardButtons from "../components/BoardButtons.js";
import { boardDefault, generateSevenWordSet } from "../Words.js";

export const AppContext = createContext();

function SevenBoard() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letter: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [correctWord, setCorrectWord] = useState("");
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });
  const [guessedWords, setGuessedWords] = useState([]);

  useEffect(() => {
    generateSevenWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    });
  }, []);

  const onEnter = () => {
    if (currAttempt.letter !== 7) return;

    let currWord = "";
    for (let i = 0; i < 7; i++) {
      currWord += board[currAttempt.attempt][i].toLowerCase();
    }

    console.log("Curr Word:", currWord);
    console.log("Correct Word:", correctWord);

    if (guessedWords.includes(currWord.toLowerCase())) {
      alert("Word already guessed!");
      return;
    }

    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });
      setGuessedWords([...guessedWords, currWord.toLowerCase()]);
    } else {
      alert("Word not found");
    }

    if (currWord.toLowerCase() === correctWord.toLowerCase()) {
      console.log("Correct guess!");
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }

    if (currAttempt.attempt === 6) {
      console.log("Game over, incorrect guess.");
      setGameOver({ gameOver: true, guessedWord: false });
      return;
    }
  };

  const onDelete = () => {
    if (currAttempt.letter === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letter: currAttempt.letter - 1 });
  };

  const onSelectLetter = (key) => {
    if (currAttempt.letter > 6) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter] = key;
    setBoard(newBoard);
    setCurrAttempt({
      attempt: currAttempt.attempt,
      letter: currAttempt.letter + 1,
    });
  };

  return (
    <div>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          correctWord,
          onSelectLetter,
          onDelete,
          onEnter,
          setDisabledLetters,
          disabledLetters,
          gameOver,
        }}
      >
        <div className="game">
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
          <BoardButtons />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default SevenBoard;
