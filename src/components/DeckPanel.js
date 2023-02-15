import React, { useContext } from "react";

import Card from "./Card";

import { DrawnCardContext } from "../context/DrawnCardContext";
import { RejectedCardContext } from "../context/RejectedCardContext";

import { ACTIONS } from "../reducers/drawnCardReducer";

export default function DeckPanel({ drawCard }) {
  const { cardDrawnFromDeck, dispatch } = useContext(DrawnCardContext);
  const { rejectedCardsArr, setRejectedCardsArr } =
    useContext(RejectedCardContext);

  const handleDeckClick = () => {
    drawCard();
  };

  const handleRejectedDeckClick = () => {
    if (!cardDrawnFromDeck) {
      const rejectedCard = rejectedCardsArr[0];
      setRejectedCardsArr(prevArr => {
        prevArr.shift();
        return prevArr;
      });
      dispatch({ type: ACTIONS.DRAW, card: rejectedCard });
      console.log("Draw from rejected", rejectedCard, rejectedCardsArr);
    }
  };

  console.log("!!!Deck Panel RejectedCard", rejectedCardsArr);
  console.log("DeckPanel", cardDrawnFromDeck);

  return (
    <div className="deck-wrap">
      <div className="deck-remaining" onClick={handleDeckClick}>
        <h2>Draw deck</h2>
        <Card key="deck-card" disableFlip={true} flip={false} />
      </div>
      <div
        className="deck-rejected"
        onClick={() => rejectedCardsArr.length > 0 && handleRejectedDeckClick()}
      >
        <h2>Rejected deck</h2>
        {rejectedCardsArr.length > 0 ? (
          <Card
            key="rejected-card"
            card={rejectedCardsArr[0]}
            disableFlip={true}
            flip={true}
          />
        ) : (
          <div className="card disabled rejected"></div>
        )}
      </div>
    </div>
  );
}
