import useGameManagement from "../utils/useGameManagement";
import Dice from "./Dice";
import GamerForm from "./GamerForm";
import Countdown from "./Countdown";

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
    correctDice,
    time,
    countdown,
    startGame
  } = useGameManagement(props);

  if (!startGame) return <Countdown countdown={countdown} />;

  if (gameIsWon) {
    return (
      <GamerForm playAgain={playAgain} gameClock={gameClock} time={time} />
    );
  }

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
      <button onClick={handleRoll} className="roll-button">
        Roll
      </button>
    </>
  );
}

export default Tenzies;
