import React, { useContext, useState } from "react";
import { DrawnCardContext } from "../context/DrawnCardContext";
import { RejectedCardContext } from "../context/RejectedCardContext";
import { ACTIONS } from "../reducers/drawnCardReducer";
import Card from "./Card";
import IndexButtons from "./IndexButtons";

export default function PlayerAction({ playerDeck }) {
  const { cardDrawnFromDeck, dispatch } = useContext(DrawnCardContext);
  const { setRejectedCardsArr } = useContext(RejectedCardContext);
  const [showIndexButtons, setShowIndexButtons] = useState(false);

  const handleRejection = () => {
    console.log("reject", cardDrawnFromDeck);
    setRejectedCardsArr((prevArr) => {
      prevArr.unshift(cardDrawnFromDeck);
      return prevArr;
    });
    dispatch({ type: ACTIONS.REJECT });
  };
  console.log("Player Action", cardDrawnFromDeck);

  const handleReplacement = () => {
    console.log("I want to replace", cardDrawnFromDeck);
    setShowIndexButtons((indexButtons) => !indexButtons);
  };

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
      {showIndexButtons ? (
        <IndexButtons playerDeck={playerDeck} />
      ) : (
        <div id="replace-btn" className="btn" onClick={handleReplacement}>
          replace
        </div>
      )}
    </div>
  );
}
