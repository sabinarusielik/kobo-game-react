import React from "react";
import PropTypes from "prop-types";

export default function InfoBelt({ playerTurn }) {
  return (
    <div className="info-belt white br-20">
      {playerTurn ? "Player One Turn" : "Player Two Turn"}
    </div>
  );
}

InfoBelt.propTypes = {
  playerTurn: PropTypes.bool.isRequired,
};
