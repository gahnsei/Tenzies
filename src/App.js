import { useState } from "react";
import Tenzies from "./components/Tenzies";

function App() {
  const [gameId, setGameId] = useState(1);
  const playAgain = () => {
    setGameId((oldId) => oldId + 1);
  };
  return <Tenzies key={gameId} playAgain={playAgain} />;
}

export default App;
