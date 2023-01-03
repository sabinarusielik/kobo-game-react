import React, { useContext } from "react";
import { DrawnCardContext } from "../context/DrawnCardContext";
import { RejectedCardContext } from "../context/RejectedCardContext";
import Card from "./Card";

export default function DeckPanel({ drawCard }) {
  const { cardDrawnFromDeck } = useContext(DrawnCardContext);
  const { rejectedCardsArr } = useContext(RejectedCardContext);
  const handleDeckClick = () => {
    drawCard();
  };

  console.log("!!!Deck Panel RejectedCard", rejectedCardsArr);
  console.log("DeckPanel", cardDrawnFromDeck);

  return (
    <div className="deck-wrap">
      <div className="deck-remaining" onClick={handleDeckClick}>
        <h2>Draw deck</h2>
        <Card key="deck-card" disableFlip={true} flip={false} />
      </div>
      <div className="deck-rejected">
        <h2>Rejected deck</h2>
        {rejectedCardsArr.length > 0 ? (
          <Card
            key="rejected-card"
            card={rejectedCardsArr[0]}
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
