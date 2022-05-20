import useGameManagement from "../utils/useGameManagement";
import Dice from "./Dice";
import GamerForm from "./GamerForm";

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

  return gameIsWon ? (
    <GamerForm playAgain={playAgain} gameClock={gameClock} />
  ) : (
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
      <button onClick={handleRoll} className="roll-button">
        Roll
      </button>
    </>
  );
}

export default Tenzies;
