import React from "react";
import PropTypes from "prop-types";

export default function InfoBelt({ playerTurn, winner }) {
  const infoText = () => {
    if (winner) return `${winner} is the winner!`;
    return playerTurn ? "Player One Turn" : "Player Two Turn";
  };
  return <div className="info-belt white br-20">{infoText()}</div>;
}

InfoBelt.propTypes = {
  playerTurn: PropTypes.bool.isRequired,
  winner: PropTypes.string.isRequired,
};
