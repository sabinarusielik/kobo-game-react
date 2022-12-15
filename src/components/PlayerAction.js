import React from "react";
import Card from "./Card";

export default function PlayerAction({ cardDrawnFromDeck }) {
  console.log("Player Action", cardDrawnFromDeck);
  return (
    <div className="player-action">
      <div id="reject-btn" className="btn">
        reject
      </div>
      <div className="deck-drawn">
        {cardDrawnFromDeck ? (
          <Card card={cardDrawnFromDeck} disableFlip={true} flip={true} />
        ) : (
          <div className="card disabled"></div>
        )}
      </div>
      <div id="replace-btn" className="btn">
        replace
      </div>
    </div>
  );
}
