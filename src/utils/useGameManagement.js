import { useState, useEffect } from "react";

function useGameManagement(props) {
  const [numberToMatch, setNumberToMatch] = useState(``);
  const [correctDice, setCorrectDice] = useState([]);
  const [roll, setRoll] = useState(true);
  const [time, setTime] = useState({
    mileSecond: 0,
    second: 0,
    minute: 0
  });

  const gameIsWon = correctDice.length === 10;
  const { playAgain } = props;

  const numbOfDice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    if (!gameIsWon) {
      setTimeout(() => {
        setTime((prev) =>
          prev.mileSecond === 59
            ? prev.second === 59
              ? { minute: prev.minute + 1, second: 0, mileSecond: 0 }
              : { ...prev, second: prev.second + 1, mileSecond: 0 }
            : { ...prev, mileSecond: prev.mileSecond + 1 }
        );
      }, 10);
    }
  }, [time.mileSecond]);

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

  const gameClock = `${time.minute < 10 ? `0` + time.minute : time.minute} : ${
    time.second < 10 ? `0` + time.second : time.second
  } : ${time.mileSecond < 10 ? `0` + time.mileSecond : time.mileSecond}`;

  return {
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
  };
}

export default useGameManagement;
