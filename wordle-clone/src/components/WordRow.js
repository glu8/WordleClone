import '../App.css';

function WordRow() {

  return (
      <div className="wordRow">
      <div className="letter" data-state="idle" data-order="1">0</div>
      <div className="letter" data-state="idle" data-order="2">0</div>
      <div className="letter" data-state="idle" data-order="3">0</div>
      <div className="letter" data-state="idle" data-order="4">0</div>
      <div className="letter" data-state="idle" data-order="5">0</div>
      </div>
  );
}

export default WordRow;