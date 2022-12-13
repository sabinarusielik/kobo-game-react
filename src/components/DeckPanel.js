import React from "react";
import Card from "./Card";

export default function DeckPanel() {
  return (
    <div className="deck-wrap">
      <div className="deck-remaining">
        <h2>Draw deck</h2>
        <Card key="deck-card" card={{ suit: "", value: "" }} />
      </div>
      <div className="deck-rejected">
        <h2>Rejected deck</h2>
        <Card key="rejected-card" card={{ suit: "♦", value: "6" }} />
      </div>
    </div>
  );
}
