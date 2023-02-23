import React, { useState } from "react";

import PropTypes from "prop-types";

export default function Card({
  card,
  disableFlip,
  flip,
  handleFrontCounter,
  handleBackCounter,
}) {
  const [flipped, setFlipped] = useState(flip);

  console.log("Card!!!!", card);

  const changeCardFlip = () => setFlipped((prevSide) => !prevSide);

  const handleClickOnCard = (clickHandlerFunction) => {
    clickHandlerFunction();
    changeCardFlip();
  };

  const handleKeyDownOnCard = (event, keyHandlerFunction) => {
    if (event.key === "Enter") {
      keyHandlerFunction();
      changeCardFlip();
    }
  };

  if (flipped) {
    return (
      <div
        role="button"
        tabIndex={0}
        className={`card front ${
          card.suit === "♥" || card.suit === "♦" ? "red" : "black"
        }`}
        data-suit={card.suit}
        onClick={() => !disableFlip && handleClickOnCard(handleFrontCounter)}
        onKeyDown={(event) =>
          !disableFlip && handleKeyDownOnCard(event, handleFrontCounter)
        }
      >
        {card.value}
      </div>
    );
  }
  return (
    <div
      role="button"
      tabIndex={0}
      className="card back"
      onClick={() => !disableFlip && handleClickOnCard(handleBackCounter)}
      onKeyDown={(event) =>
        !disableFlip && handleKeyDownOnCard(event, handleBackCounter)
      }
    >
      <div className="circle" />
    </div>
  );
}

Card.propTypes = {
  disableFlip: PropTypes.bool.isRequired,
  flip: PropTypes.bool.isRequired,
  card: PropTypes.shape({
    suit: PropTypes.string,
    value: PropTypes.string,
  }),
  handleFrontCounter: PropTypes.func,
  handleBackCounter: PropTypes.func,
};

Card.defaultProps = {
  card: PropTypes.objectOf(PropTypes.string),
  handleFrontCounter: PropTypes.func,
  handleBackCounter: PropTypes.func,
};
