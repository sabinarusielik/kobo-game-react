import React, { useContext, useState } from "react";
import { DrawnCardContext } from "../context/DrawnCardContext";
import { RejectedCardContext } from "../context/RejectedCardContext";
import { ACTIONS } from "../reducers/drawnCardReducer";
import Card from "./Card";
import IndexButtons from "./IndexButtons";

export default function PlayerAction({ playerDeck, changeTurn }) {
  const { cardDrawnFromDeck, dispatch } = useContext(DrawnCardContext);
  const { setRejectedCardsArr } = useContext(RejectedCardContext);
  const [showIndexButtons, setShowIndexButtons] = useState(false);

  const handleRejection = () => {
    setRejectedCardsArr((prevArr) => {
      prevArr.unshift(cardDrawnFromDeck);
      return prevArr;
    });
    dispatch({ type: ACTIONS.REJECT });
    changeTurn();
  };
  console.log("Player Action", cardDrawnFromDeck);

  const showReplacementButtons = () => {
    console.log("I want to replace", cardDrawnFromDeck);
    setShowIndexButtons((indexButtons) => !indexButtons);
  };

  const handleReplacement = (index) => {
    const replacedCard = playerDeck[index];
    playerDeck[index] = cardDrawnFromDeck;
    setRejectedCardsArr((prevArr) => {
      prevArr.unshift(replacedCard);
      return prevArr;
    });
    dispatch({ type: ACTIONS.REJECT });
    setShowIndexButtons(false);
    changeTurn();
  };

  return (
    <div className="player-action">
      <div
        id="reject-btn"
        className="btn"
        onClick={cardDrawnFromDeck ? handleRejection : null}
      >
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
        <IndexButtons
          playerDeck={playerDeck}
          replaceCard={(index) => handleReplacement(index)}
        />
      ) : (
        <div
          id="replace-btn"
          className="btn"
          onClick={cardDrawnFromDeck ? showReplacementButtons : null}
        >
          replace
        </div>
      )}
    </div>
  );
}
