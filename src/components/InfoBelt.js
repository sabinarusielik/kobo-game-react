import React from "react";
import PropTypes from "prop-types";

export default function InfoBelt({ playerTurn, winner, playersNames }) {
  const infoText = () => {
    if (winner) return `${winner} is the winner!`;
    return playerTurn
      ? `${playersNames.playerOne}'s Turn`
      : `${playersNames.playerTwo}'s Turn`;
  };
  return <div className="info-belt white br-20">{infoText()}</div>;
}

InfoBelt.propTypes = {
  playerTurn: PropTypes.bool.isRequired,
  winner: PropTypes.string.isRequired,
  playersNames: PropTypes.shape({
    playerOne: PropTypes.string,
    playerTwo: PropTypes.string,
  }).isRequired,
};
