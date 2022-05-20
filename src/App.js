import { useState } from "react";
import { Routes, Route } from "react-router";

import Header from "./components/Header";
import StartGame from "./components/StartGame";
import Tenzies from "./components/Tenzies";

function App() {
  const [gameId, setGameId] = useState(1);
  const playAgain = () => {
    setGameId((oldId) => oldId + 1);
  };

  return (
    <div className="App">
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<StartGame />} />
          <Route
            path="/play"
            element={<Tenzies key={gameId} playAgain={playAgain} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
