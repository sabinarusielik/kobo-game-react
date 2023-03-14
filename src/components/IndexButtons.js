import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

export default function IndexButtons({ playerDeck, replaceCard }) {
  console.log(playerDeck);
  const buttons = [];

  const handleIndexButtonClick = (index) => {
    replaceCard(index);
  };

  playerDeck.forEach((card, index) => {
    buttons.push(
      <Button
        className="index-btn"
        key={`button-${playerDeck[index].value}${playerDeck[index].suit}`}
        clickHandler={() => handleIndexButtonClick(index)}
      >
        {index + 1}
      </Button>
    );
  });

  return <div className="index-btn-wrap">{buttons}</div>;
}

IndexButtons.propTypes = {
  playerDeck: PropTypes.arrayOf(
    PropTypes.shape({
      suit: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
  replaceCard: PropTypes.func.isRequired,
};
