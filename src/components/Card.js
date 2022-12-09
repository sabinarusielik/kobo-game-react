import React from "react";

export default function Card({ card, flipped }) {
  if (flipped) {
    return (
      <div
        className={`card front ${
          card.suit === "♥" || card.suit === "♦" ? "red" : "black"
        }`}
        data-suit={card.suit}
      >
        {card.value}
      </div>
    );
  } else {
    return (
      <div className="card back">
        <div className="circle"></div>
      </div>
    );
  }
}
