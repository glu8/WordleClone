import React, { useState, useEffect } from 'react';
import './App.css';
import Board from './components/Board.js';


function App() {
  
  // const [count, updateCount] = useState(0);
  const word = "THICK"
  const validLetters = new Set(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'])


  useEffect(() => {
    var count = 0

    function logKey(e) {
      var currentLetter = null;
      var inUse = null;
     
      if ((e.key.toLowerCase() === 'backspace')&&(count > 0)) {
        inUse = document.querySelectorAll("div.letter[data-state='inUse']")
        currentLetter = inUse[inUse.length - 1]
        currentLetter.dataset.state = "idle"
        currentLetter.innerHTML = " "
        count -= 1
      } else if (e.key === "Enter") {
        inUse = document.querySelectorAll("div.letter[data-state='inUse']");

        for (let i = 0; i < inUse.length; i++) {
          currentLetter = inUse[i]
          
          if (currentLetter.innerHTML === word[i]) {
            currentLetter.dataset.state = "correct"
          } else if (word.includes(currentLetter.innerHTML)) {
            currentLetter.dataset.state = "present"
          } else {
            currentLetter.dataset.state = "absent"
          }
          
        }
        count = 0
      } else if (count < 5) {
          if (validLetters.has(e.key)) {
            currentLetter = document.querySelector("div.letter[data-state='idle']");
            currentLetter.dataset.state = "inUse";
            currentLetter.innerHTML = e.key.toUpperCase();
            count += 1;
          } 
      } 
      
      // await updateCurrentLetter(document.querySelector("div.letter[data-state='idle']"))
     
      return false;
    }

    if (document !== undefined) {
        document.addEventListener('keydown', logKey);
    }
    return () => {
        if (document !== undefined) {
          document.addEventListener('keydown', logKey);
        }
      }
}, []) 


  

  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
