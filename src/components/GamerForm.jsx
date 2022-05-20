import { useState } from "react";
import useDataBase from "../utils/useDataBase";
import useGamerForm from "../utils/useGamerForm";

function GamerForm(props) {
  const { playAgain, gameClock, time } = props;
  const { addScore } = useDataBase(``);
  const { input, error, submitScore, handleInput } = useGamerForm(
    time,
    addScore
  );

  return (
    <>
      <form className="gamer-form" onSubmit={submitScore}>
        <h2 className="form-label">
          Great Job! Add Your Score To The Leaderboard
        </h2>
        <div className="user-score">
          Your Time | <span>{gameClock}</span>
        </div>
        <div className="input-div">
          <span className="input-label">
            Name
            {error && <span className="error">Please Add A Name</span>}
          </span>
          <input
            className="name-input"
            type="text"
            value={input}
            onChange={handleInput}
          />
        </div>
        <button className="roll-button submit-button">
          Add To Leaderboard
        </button>
      </form>
      <button onClick={playAgain} className="roll-button">
        Play Again
      </button>
    </>
  );
}

export default GamerForm;
