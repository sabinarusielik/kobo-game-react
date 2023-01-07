import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function Player({ cards }) {
  const [disableFlip, setDisableFlip] = useState(false);
  const [backCount, setBackCount] = useState(0);
  const [frontCount, setFrontCount] = useState(0);

  useEffect(() => {
    console.log("front", frontCount);
    console.log("back", backCount);
    if (frontCount === 2 && backCount === 2) {
      setDisableFlip(true);
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
              flip={false}
              disableFlip={disableFlip}
              handleFrontCounter={frontCount < 2 ? handleFrontCounter : null}
              handleBackCounter={backCount < 2 ? handleBackCounter : null}
            />
          );
        })}
      </div>
    </div>
  );
}
