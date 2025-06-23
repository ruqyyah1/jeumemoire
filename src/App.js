import React, { useState } from "react";
import StartScreen from "./StartScreen";
import Game from "./Game";
import GameOverScreen from "./GameOverScreen";
import "./App.css";

function App() {
  const [stage, setStage] = useState("start");
  const [level, setLevel] = useState("beginner");
  const [theme, setTheme] = useState("animals");
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);

  return (
    <div className="app">
      {stage === "start" && (
        <StartScreen
          level={level}
          theme={theme}
          onStart={(lvl, thm) => {
            setLevel(lvl);
            setTheme(thm);
            setStage("game");
          }}
        />
      )}
      {stage === "game" && (
        <Game
          level={level}
          theme={theme}
          onGameOver={(m, t) => {
            setMoves(m);
            setTime(t);
            setStage("end");
          }}
          onBackToMenu={() => setStage("start")}
        />
      )}
      {stage === "end" && (
        <GameOverScreen
          moves={moves}
          time={time}
          onRestart={() => setStage("start")}
        />
      )}
    </div>
  );
}

export default App;