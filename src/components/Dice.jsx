import { useState, useEffect } from "react";
const Dice = (props) => {
  const [numb, setNumb] = useState(0);
  const { handleClick, id, isCorrect, isRolled } = props;

  useEffect(() => {
    if (!isCorrect) {
      setNumb((prev) => {
        let rand = Math.floor(Math.random() * 6) + 1;
        while (rand === prev) {
          rand = Math.floor(Math.random() * 6) + 1;
        }
        return rand;
      });
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
