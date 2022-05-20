import useGameManagement from "../utils/useGameManagement";
import Dice from "./Dice";

function Tenzies(props) {
  const {
    roll,
    playAgain,
    numbOfDice,
    handleClick,
    handleRoll,
    gameClock,
    numberToMatch,
    setNumberToMatch,
    gameIsWon,
    correctDice
  } = useGameManagement(props);

  return (
    <>
      <div className="dice-container">
        {numbOfDice.map((ele) => (
          <Dice
            key={ele}
            id={ele}
            numberToMatch={numberToMatch}
            setNumberToMatch={setNumberToMatch}
            handleClick={!gameIsWon && handleClick}
            isCorrect={correctDice.includes(ele)}
            isRolled={roll}
          />
        ))}
      </div>
      <span className="game-clock">{gameClock}</span>
      <button
        onClick={gameIsWon ? playAgain : handleRoll}
        className="roll-button"
      >
        {gameIsWon ? `Play Again!` : `Roll`}
      </button>
    </>
  );
}

export default Tenzies;
