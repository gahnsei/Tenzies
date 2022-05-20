import { useState } from "react";
import { useNavigate } from "react-router";

function useGamerForm(time, addScore) {
  const [input, setInput] = useState(``);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleInput = (event) => {
    setError(false);
    setInput(event.target.value);
  };

  const submitScore = (event) => {
    event.preventDefault();

    if (!input) {
      setError(true);
      return;
    }

    const runTime = `00:${time.minute < 10 ? `0` + time.minute : time.minute}:${
      time.second < 10 ? `0` + time.second : time.second
    }.${time.mileSecond < 10 ? `0` + time.mileSecond : time.mileSecond}`;

    const body = {
      name: input,
      runTime
    };

    if (!error) {
      addScore(body);
      navigate(`/leaderboard`);
    }
  };

  return { input, error, submitScore, handleInput };
}

export default useGamerForm;
