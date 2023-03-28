import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Card from "./Card";

export default function Player({
  cards,
  playerTurn,
  changeTurn,
  startDrawing,
  stopGame,
}) {
  const [disableFlip, setDisableFlip] = useState(false);
  const [backCount, setBackCount] = useState(0);
  const [frontCount, setFrontCount] = useState(0);

  useEffect(() => {
    if (frontCount === 2 && backCount === 2) {
      setDisableFlip(true);
      startDrawing();
      changeTurn();
    }
  }, [frontCount, backCount]);

  useEffect(() => {
    if (stopGame) {
      setBackCount(0);
      setFrontCount(0);
      setDisableFlip(false);
    }
  }, [stopGame]);

  const handleFrontCounter = () => {
    if (playerTurn) {
      setFrontCount(frontCount + 1);
    }
  };

  const handleBackCounter = () => {
    if (playerTurn) {
      setBackCount(backCount + 1);
    }
  };

  return (
    <div className="player-container">
      <div className="cards-container">
        {cards.map((card) => (
          <Card
            key={card.suit + card.value}
            card={card}
            flip={stopGame}
            disableFlip={disableFlip}
            handleFrontCounter={frontCount < 2 && handleFrontCounter}
            handleBackCounter={backCount < 2 && handleBackCounter}
          />
        ))}
      </div>
    </div>
  );
}

Player.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      suit: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
  playerTurn: PropTypes.bool.isRequired,
  changeTurn: PropTypes.func.isRequired,
  startDrawing: PropTypes.func.isRequired,
  stopGame: PropTypes.bool.isRequired,
};
