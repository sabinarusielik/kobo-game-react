import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function Player({ cards, playerTurn, changeTurn }) {
  const [disableFlip, setDisableFlip] = useState(false);
  const [backCount, setBackCount] = useState(0);
  const [frontCount, setFrontCount] = useState(0);

  useEffect(() => {
    if (frontCount === 2 && backCount === 2) {
      setDisableFlip(true);
      changeTurn();
    }
  }, [frontCount, backCount]);

  const handleFrontCounter = () => {
    setFrontCount(frontCount + 1);
  };

  const handleBackCounter = () => {
    setBackCount(backCount + 1);
  };

  return (
    <div className="player-container">
      <div className="cards-container">
        {cards.map((card) => {
          return (
            <Card
              key={card.suit + card.value}
              card={card}
              flip={true}
              disableFlip={disableFlip}
              handleFrontCounter={
                playerTurn ? (frontCount < 2 ? handleFrontCounter : null) : null
              }
              handleBackCounter={
                playerTurn ? (backCount < 2 ? handleBackCounter : null) : null
              }
            />
          );
        })}
      </div>
    </div>
  );
}
