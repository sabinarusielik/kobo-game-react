import React from "react";
import Card from "./Card";

export default function DeckPanel({ deck, drawCard }) {
  const handleClick = () => {
    // const drawnCard = deck.shift();
    drawCard();
  };
  return (
    <div className="deck-wrap">
      <div className="deck-remaining" onClick={handleClick}>
        <h2>Draw deck</h2>
        <Card key="deck-card" disableFlip={true} flip={false} />
      </div>
      <div className="deck-rejected">
        <h2>Rejected deck</h2>
        <Card
          key="rejected-card"
          card={{ suit: "♦", value: "6" }}
          disableFlip={true}
          flip={true}
        />
      </div>
    </div>
  );
}
