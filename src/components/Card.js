import React, { useState } from "react";

export default function Card({ card, disableFlip }) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped((prevSide) => !prevSide);
  };

  if (flipped) {
    return (
      <div
        className={`card front ${
          card.suit === "♥" || card.suit === "♦" ? "red" : "black"
        }`}
        data-suit={card.suit}
        onClick={!disableFlip ? handleClick : null}
      >
        {card.value}
      </div>
    );
  } else {
    return (
      <div className="card back" onClick={!disableFlip ? handleClick : null}>
        <div className="circle"></div>
      </div>
    );
  }
}
