import useDataBase from "../utils/useDataBase";
function Leaderboad(props) {
  const { data } = useDataBase(`/records`);
  const { playAgain } = props;
  return (
    <>
      <h2 className="leaderboard-label">Leaderboard</h2>
      <div className="leaderboard">
        {data.map((score, index) => (
          <div className="record" key={score.name + score.run_time}>
            <span>{index + 1}</span>
            <span>{score.name}</span>
            <span>
              {score.run_time.split(`.`).join(`:`).replace(`00:`, ``)}
            </span>
          </div>
        ))}
      </div>
      <button className="roll-button" onClick={playAgain}>
        Play Again
      </button>
    </>
  );
}

export default Leaderboad;
