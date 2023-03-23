import React, { useState } from "react";
import PropTypes from "prop-types";

export default function KoboButton({ declareWinner, resetGame }) {
  const [koboIsDeclared, setKoboIsDeclared] = useState(false);

  const handleKoboClick = () => {
    declareWinner();
    setKoboIsDeclared(true);
    if (koboIsDeclared) {
      resetGame();
      setKoboIsDeclared(false);
    }
  };

  return (
    <button type="button" className="btn kobo" onClick={handleKoboClick}>
      <span>{koboIsDeclared ? "AGAIN!" : "KOBO"}</span>
    </button>
  );
}

KoboButton.propTypes = {
  declareWinner: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
};
