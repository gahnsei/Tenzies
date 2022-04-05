import { useState, useEffect } from "react";
const Dice = (props) => {
  const [numb, setNumb] = useState(0);
  const { handleClick, id, isCorrect, isRolled } = props;

  useEffect(() => {
    if (!isCorrect) {
      const rand = Math.floor(Math.random() * 6) + 1;
      setNumb(rand);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRolled]);

  return (
    <div
      className={`dice ${isCorrect && `dice-checked`}`}
      onClick={() => handleClick(numb, id)}
    >
      {numb}
    </div>
  );
};

export default Dice;
