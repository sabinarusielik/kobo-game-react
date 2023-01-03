import React, { useContext } from "react";
import { DrawnCardContext } from "../context/DrawnCardContext";
import { RejectedCardContext } from "../context/RejectedCardContext";
import { ACTIONS } from "../reducers/drawnCardReducer";
import Card from "./Card";

export default function PlayerAction() {
  const { cardDrawnFromDeck, dispatch } = useContext(DrawnCardContext);
  const { setRejectedCardsArr } = useContext(RejectedCardContext);
  const handleRejection = () => {
    console.log("reject", cardDrawnFromDeck);
    setRejectedCardsArr((prevArr) => {
      prevArr.unshift(cardDrawnFromDeck);
      return prevArr;
    });
    dispatch({ type: ACTIONS.REJECT });
  };
  console.log("Player Action", cardDrawnFromDeck);
  return (
    <div className="player-action">
      <div id="reject-btn" className="btn" onClick={handleRejection}>
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
