import '../App.css';

function WordRow() {

  return (
      <span className="wordRow">
      <div className="letter" data-state="idle" data-order="1"> </div>
      <div className="letter" data-state="idle" data-order="2"> </div>
      <div className="letter" data-state="idle" data-order="3"> </div>
      <div className="letter" data-state="idle" data-order="4"> </div>
      <div className="letter" data-state="idle" data-order="5"> </div>
      </span>
  );
}

export default WordRow;