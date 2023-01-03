import React, { useContext } from "react";
import { DrawnCardContext } from "../context/DrawnCardContext";
import Card from "./Card";

export default function DeckPanel({ deck, drawCard }) {
  const { cardDrawnFromDeck } = useContext(DrawnCardContext);
  const handleClick = () => {
    drawCard();
  };
  console.log("DeckPanel", cardDrawnFromDeck);
  return (
    <div className="deck-wrap">
      <div className="deck-remaining" onClick={handleClick}>
        <h2>Draw deck</h2>
        <Card key="deck-card" disableFlip={true} flip={false} />
      </div>
      <div className="deck-rejected">
        <h2>Rejected deck</h2>
        {cardDrawnFromDeck ? (
          <Card
            key="rejected-card"
            card={cardDrawnFromDeck}
            disableFlip={true}
            flip={true}
          />
        ) : (
          <div className="card disabled"></div>
        )}
      </div>
    </div>
  );
}
