import React, { useEffect, useState } from 'react';
import './App.css';
import WordRow from './components/WordRow.js';

function App() {

  // const [currentLetter, updateCurrentLetter] = useState(document.querySelector("div.letter[data-state='idle']"));

  useEffect(() => {

    if (window !== undefined) {
        window.addEventListener('keydown', logKey);
    }
    return () => {
        if (window !== undefined) {
          window.addEventListener('keydown', logKey);
        }
      }
    }, []) 

  async function logKey(e) {

    var currentLetter = document.querySelector("div.letter[data-state='idle']");

    console.log(e.key)
    console.log("initial", currentLetter)
    currentLetter.dataset.state = "inUse"
    currentLetter.innerHTML = e.key
    // await updateCurrentLetter(document.querySelector("div.letter[data-state='idle']"))
    console.log("after", currentLetter)
    
    return false;


  }
  

  return (
    <div className="App">
      <WordRow />
      <WordRow />
      <WordRow />
      <WordRow />
      <WordRow />
      <WordRow />
    </div>
  );
}

export default App;
