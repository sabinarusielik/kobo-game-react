import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { DrawnCardContext } from "../context/DrawnCardContext";
import { RejectedCardContext } from "../context/RejectedCardContext";
import { ACTIONS } from "../reducers/drawnCardReducer";
import Card from "./Card";
import IndexButtons from "./IndexButtons";
import Button from "./Button";

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
    // eslint-disable-next-line no-param-reassign
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
      <Button
        className="btn reject"
        clickHandler={() => cardDrawnFromDeck && handleRejection()}
      >
        reject
      </Button>
      <div className="deck-drawn">
        {cardDrawnFromDeck ? (
          <Card card={cardDrawnFromDeck} disableFlip flip />
        ) : (
          <div className="card disabled" />
        )}
      </div>
      {showIndexButtons ? (
        <IndexButtons
          playerDeck={playerDeck}
          replaceCard={(index) => handleReplacement(index)}
        />
      ) : (
        <Button
          className="btn replace"
          clickHandler={() => cardDrawnFromDeck && showReplacementButtons()}
        >
          replace
        </Button>
      )}
    </div>
  );
}

PlayerAction.propTypes = {
  playerDeck: PropTypes.arrayOf(
    PropTypes.shape({
      suit: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
  changeTurn: PropTypes.func.isRequired,
};
