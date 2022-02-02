import React, { useState, useEffect } from 'react';
import './App.css';
import WordRow from './components/WordRow.js';
import { words } from './words.js';

function App() {

  // const [count, updateCount] = useState(0);
  const [completed, updateCompleted] = useState(false);
  const [failed, updateFailed] = useState(false);
  const [word, updateWord] = useState("");

  useEffect(() => {
    updateWord(words[Math.floor(Math.random() * words.length)]);
  }, [])

  useEffect(() => {
    const validLetters = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);
    var count = 0;
    var tries = 0;

    function logKey(e) {
      var currentLetter = null;
      var inUse = null;

      if ((e.key.toLowerCase() === 'backspace') && (count > 0)) {
        inUse = document.querySelectorAll("div.letter[data-state='inUse']");
        currentLetter = inUse[inUse.length - 1];
        currentLetter.dataset.state = "idle";
        currentLetter.innerHTML = " ";
        count -= 1;
      } else if ((e.key === "Enter") && (count === 5)) {
        inUse = document.querySelectorAll("div.letter[data-state='inUse']");
        var correctCount = 0;
        for (let i = 0; i < inUse.length; i++) {
          currentLetter = inUse[i];
          if (currentLetter.innerHTML.toLowerCase() === word[i]) {
            currentLetter.dataset.state = "correct";
            correctCount += 1;
          } else if (word.includes(currentLetter.innerHTML.toLowerCase())) {
            currentLetter.dataset.state = "present";
          } else {
            currentLetter.dataset.state = "absent";
          }

        }

        tries += 1;

        if (correctCount === 5) {
          updateCompleted(completed => completed + 1);
          document.removeEventListener('keydown', logKey);
        } else if (tries === 6) {
          updateFailed(failed => failed + 1);
          document.removeEventListener('keydown', logKey);
        }

        count = 0;        
      } else if (count < 5) {
        if (validLetters.has(e.key)) {
          currentLetter = document.querySelector("div.letter[data-state='idle']");
          currentLetter.dataset.state = "inUse";
          currentLetter.innerHTML = e.key.toUpperCase();
          count += 1;
        }
      }


      return false;
    }

    if (document !== undefined) {
      document.addEventListener('keydown', logKey);
    }
    return () => {
      if (document !== undefined) {
        document.removeEventListener('keydown', logKey);
      }
    }
  }, [word])




  return (
    <div className="App">
      <div className="header">
        <h2>Wordle Clone</h2>
      </div>
      <WordRow />
      <WordRow />
      <WordRow />
      <WordRow />
      <WordRow />
      <WordRow />

      {completed ? <div> Completed! </div> : ""}
      {failed ? <div> Correct word: {word.toUpperCase()} </div> : ""}
    </div>
  );
}

export default App;
