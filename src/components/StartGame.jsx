import React from "react";
import { useNavigate } from "react-router";

function StartGame() {
  const navigate = useNavigate();

  const startGame = () => {
    navigate(`/play`);
  };

  return (
    <>
      <h2 className="rumble">Are You Ready To Rumble!!</h2>
      <button className="roll-button" onClick={startGame}>
        Start Game
      </button>
    </>
  );
}

export default StartGame;
