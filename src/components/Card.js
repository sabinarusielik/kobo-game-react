import React, { useState } from "react";

export default function Card({ card }) {
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
        onClick={handleClick}
      >
        {card.value}
      </div>
    );
  } else {
    return (
      <div className="card back" onClick={handleClick}>
        <div className="circle"></div>
      </div>
    );
  }
}
