import React, { useState } from "react";
import Card from "./Card";

export default function PlayerContainer({ cards }) {
  return (
    <div className="player-container">
      <div className="cards-container">
        {cards.map((card) => {
          return <Card key={card.suit + card.value} card={card} />;
        })}
      </div>
    </div>
  );
}
