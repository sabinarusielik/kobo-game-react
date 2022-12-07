import React from "react";

export default function PlayerAction() {
  return (
    <div className="player-action">
      <div id="reject-btn" className="btn">
        reject
      </div>
      <div className="deck-drawn">
        <div className="card disabled"></div>
      </div>
      <div id="replace-btn" className="btn">
        replace
      </div>
    </div>
  );
}
