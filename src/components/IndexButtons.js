import PropTypes from "prop-types";
import Button from "./Button";

export default function IndexButtons({
  playerDeck,
  replaceCard,
  showReplacementButtons,
}) {
  const buttons = [];

  const handleIndexButtonClick = (index) => {
    replaceCard(index);
  };

  const handleXButtonClick = () => {
    showReplacementButtons();
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

  buttons.push(
    <Button
      className="index-btn back"
      key="button-x"
      clickHandler={handleXButtonClick}
    >
      X
    </Button>
  );

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
  showReplacementButtons: PropTypes.func.isRequired,
};
