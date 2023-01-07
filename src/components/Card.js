import React, { useState } from "react";

export default function Card({
  card,
  disableFlip,
  flip,
  handleFrontCounter,
  handleBackCounter,
}) {
  const [flipped, setFlipped] = useState(flip);

  const handleFrontClick = () => {
    handleFrontCounter();
    setFlipped((prevSide) => !prevSide);
  };

  const handleBackClick = () => {
    handleBackCounter();
    setFlipped((prevSide) => !prevSide);
  };

  if (flipped) {
    return (
      <div
        className={`card front ${
          card.suit === "♥" || card.suit === "♦" ? "red" : "black"
        }`}
        data-suit={card.suit}
        onClick={!disableFlip ? handleFrontClick : null}
      >
        {card.value}
      </div>
    );
  } else {
    return (
      <div
        className="card back"
        onClick={!disableFlip ? handleBackClick : null}
      >
        <div className="circle"></div>
      </div>
    );
  }
}
