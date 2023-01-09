import React from "react";

export default function InfoBelt({ playerTurn }) {
  return (
    <div className="info-belt white br-20">
      {playerTurn ? "Player One Turn" : "Player Two Turn"}
    </div>
  );
}
