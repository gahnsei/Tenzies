import { useState } from "react";
import Header from "./Header";
import Dice from "./Dice";

function Tenzies(props) {
  const [numberToMatch, setNumberToMatch] = useState(``);
  const [correctDice, setCorrectDice] = useState([]);
  const [roll, setRoll] = useState(true);

  const { playAgain } = props;

  const numbOfDice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const gameIsWon = correctDice.length === 10;

  const handleClick = (numb, id) => {
    if (!numberToMatch || correctDice.length === 0) {
      setNumberToMatch(numb);
      setCorrectDice((prevState) => [...prevState, id]);
      return;
    } else if (correctDice.includes(id)) {
      setCorrectDice((prevState) => {
        const correctDieIndex = prevState.indexOf(id);
        console.log(correctDieIndex);
        const newCorrectDices = [...prevState];
        newCorrectDices.splice(correctDieIndex, 1);
        return newCorrectDices;
      });
      return;
    } else if (numb === numberToMatch) {
      setCorrectDice((prevState) => [...prevState, id]);
    } else return;
  };

  const handleRoll = () => {
    setRoll((prevState) => !prevState);
  };

  return (
    <div className="App">
      <main>
        <Header />
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
        <button
          onClick={gameIsWon ? playAgain : handleRoll}
          className="roll-button"
        >
          {gameIsWon ? `Play Again!` : `Roll`}
        </button>
      </main>
    </div>
  );
}

export default Tenzies;
