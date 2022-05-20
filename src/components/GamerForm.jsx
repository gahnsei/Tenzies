import { useState } from "react";

function GamerForm(props) {
  const { handleRoll, gameClock } = props;
  const [input, setInput] = useState(``);

  const handleInput = (event) => setInput(event.target.value);

  return (
    <>
      <form className="gamer-form">
        <div className="input-div">
          <span className="input-label">Name</span>
          <input
            className="name-input"
            type="text"
            value={input}
            onChange={handleInput}
          />
        </div>
        <div className="user-score">
          Your Time | <span>{gameClock}</span>
        </div>
        <button className="roll-button submit-button">
          Add To Leaderboard
        </button>
      </form>
      <button onClick={handleRoll} className="roll-button">
        Play Again
      </button>
    </>
  );
}

export default GamerForm;
