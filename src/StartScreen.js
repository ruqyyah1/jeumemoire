import React, { useState } from "react";

function StartScreen({ level, theme, onStart }) {
  const [selectedLevel, setSelectedLevel] = useState(level);
  const [selectedTheme, setSelectedTheme] = useState(theme);

  return (
    <div className="start-screen">
      <div className="cloud-sky">
        <div className="cloud" />
        <div className="cloud" />
        <div className="cloud" />
        <h1 className="title">Memory Match-Up!</h1>
        <div className="option">
          <label>Level:</label>
          <select value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)}>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
          </select>
        </div>
        <div className="option">
          <label>Theme:</label>
          <select value={selectedTheme} onChange={(e) => setSelectedTheme(e.target.value)}>
            <option value="animals">Animals</option>
            <option value="nature">Nature</option>
          </select>
        </div>
        <button className="play-btn" onClick={() => onStart(selectedLevel, selectedTheme)}>
          Let's Play!
        </button>
        <div className="floor" />
      </div>
    </div>
  );
}

export default StartScreen;