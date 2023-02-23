import React from "react";
import PropTypes from "prop-types";

export default function IndexButtons({ playerDeck, replaceCard }) {
  console.log(playerDeck);
  const buttons = [];

  const handleIndexButtonClick = (index) => {
    replaceCard(index);
  };

  const handleIndexButtonKeyDown = (event, handlerFunction) => {
    if (event.key === "Enter") {
      handlerFunction();
    }
  };

  playerDeck.forEach((card, index) => {
    buttons.push(
      <div
        role="button"
        tabIndex={0}
        className="index-btn"
        key={`button-${playerDeck[index].value}${playerDeck[index].suit}`}
        onClick={() => handleIndexButtonClick(index)}
        onKeyDown={(event) =>
          handleIndexButtonKeyDown(event, () => handleIndexButtonClick(index))
        }
      >
        {index + 1}
      </div>
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
