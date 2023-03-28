import React, { useContext } from "react";

import PropTypes from "prop-types";

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

  const handleDeckKeyDown = (event) => {
    if (event.key === "Enter") {
      drawCard();
    }
  };

  const handleRejectedDeckClick = () => {
    if (!cardDrawnFromDeck) {
      const rejectedCard = rejectedCardsArr[0];
      setRejectedCardsArr((prevArr) => {
        prevArr.shift();
        return prevArr;
      });
      dispatch({ type: ACTIONS.DRAW, card: rejectedCard });
    }
  };

  const handleRejectedDeckKeyDown = (event, handlerFunction) => {
    if (event.key === "Enter") {
      handlerFunction();
    }
  };

  return (
    <div className="deck-wrap">
      <div
        role="button"
        tabIndex={-1}
        className="deck-remaining"
        onClick={handleDeckClick}
        onKeyDown={(event) => handleDeckKeyDown(event)}
      >
        <h2>Draw deck</h2>
        <Card key="deck-card" disableFlip flip={false} card={{}} />
      </div>
      <div
        role="button"
        tabIndex={-1}
        className="deck-rejected"
        onClick={() => rejectedCardsArr.length > 0 && handleRejectedDeckClick()}
        onKeyDown={(event) =>
          rejectedCardsArr.length > 0 &&
          handleRejectedDeckKeyDown(event, handleRejectedDeckClick)
        }
      >
        <h2>Rejected deck</h2>
        {rejectedCardsArr.length > 0 ? (
          <Card
            key="rejected-card"
            card={rejectedCardsArr[0]}
            disableFlip
            flip
          />
        ) : (
          <div className="card disabled rejected" />
        )}
      </div>
    </div>
  );
}

DeckPanel.propTypes = {
  drawCard: PropTypes.func.isRequired,
};
