import React, { useEffect } from 'react';
import '../App.css';
import WordRow from './WordRow.js';

function Board(props) {

  return (
      <div className="board">
      <WordRow />
      <WordRow />
      <WordRow />
      <WordRow />
      <WordRow />
      <WordRow />
      </div>
  );
}

export default Board;