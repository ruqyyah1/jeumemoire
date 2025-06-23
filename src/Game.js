import React, { useEffect, useState } from "react";

function shuffleCards(base) {
  return [...base, ...base]
    .sort(() => Math.random() - 0.5)
    .map((value, i) => ({
      id: i,
      value,
      flipped: false,
      matched: false
    }));
}

function Game({ level, theme, onGameOver, onBackToMenu }) {
  const [cards, setCards] = useState([]);
  const [selected, setSelected] = useState([]);
  const [moves, setMoves] = useState(0);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    const baseEmojis = theme === "animals"
      ? ["🐶", "🐱", "🐰", "🦊", "🐼", "🦁", "🐷", "🐸"]
      : ["🌲", "🌻", "🌼", "🍁", "🌊", "🍄", "🍇", "🌙"];

    const num = level === "beginner" ? 2 : 4;
    const cardsToUse = baseEmojis.slice(0, num);
    setCards(shuffleCards(cardsToUse));
  }, [level, theme]);

  useEffect(() => {
    if (selected.length === 2) {
      setTimeout(() => {
        const [a, b] = selected;
        if (cards[a].value === cards[b].value) {
          const newCards = [...cards];
          newCards[a].matched = newCards[b].matched = true;
          setCards(newCards);
        } else {
          const newCards = [...cards];
          newCards[a].flipped = false;
          newCards[b].flipped = false;
          setCards(newCards);
        }
        setSelected([]);
        setMoves((m) => m + 1);
      }, 900);
    }
  }, [selected, cards]);

  useEffect(() => {
    if (cards.length > 0 && cards.every((c) => c.matched)) {
      const time = Math.floor((Date.now() - startTime) / 1000);
      setTimeout(() => onGameOver(moves, time), 600);
    }
  }, [cards, moves, onGameOver, startTime]);

  const handleFlip = (i) => {
    if (cards[i].flipped || selected.length === 2) return;
    const newCards = [...cards];
    newCards[i].flipped = true;
    setCards(newCards);
    setSelected([...selected, i]);
  };

  return (
    <div className="game-container">
    <div className="back-container">
    <button className="back-btn" onClick={onBackToMenu}>← Back to Home</button>
    </div>
      <h2 className="subtitle">Match the Cards</h2>
      <div className="card-grid">
        {cards.map((card, i) => (
          <div
            key={card.id}
            className={`card ${card.flipped || card.matched ? "flipped" : ""}`}
            onClick={() => handleFlip(i)}
          >
            {card.flipped || card.matched ? card.value : "❓"}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Game;