import React from "react";

function GameOverScreen({ moves, time, onRestart }) {
  return (
    <div className="end-screen">
      <h1>🎉 You Did It!</h1>
      <p>Moves: <strong>{moves}</strong></p>
      <p>Time: <strong>{time} seconds</strong></p>
      <button onClick={onRestart}>Play Again</button>
    </div>
  );
}

export default GameOverScreen;