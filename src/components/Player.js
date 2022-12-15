import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function Player({ cards }) {
  const [flipCount, setFlipCount] = useState(0);
  const [disableFlip, setDisableFlip] = useState(false);

  const handleFlipCount = () => {
    setFlipCount((count) => count + 1);
  };
  console.log("Player flip count", flipCount);

  useEffect(() => {
    flipCount === 4 && setDisableFlip(true);
  }, [flipCount]);

  return (
    <div className="player-container">
      <div className="cards-container">
        {cards.map((card) => {
          return (
            <div
              onClick={!disableFlip ? handleFlipCount : null}
              key={card.suit + card.value}
            >
              <Card card={card} disableFlip={disableFlip} flip={false} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
