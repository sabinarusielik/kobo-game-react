import React from "react";
import Card from "./Card";

export default function PlayerContainer() {
  return (
    <div className="player-container">
      <div className="cards-container">
        <Card key="♦7" flipped={false} card={{ suit: "", value: "" }} />
        <Card key="♦8" flipped={false} card={{ suit: "", value: "" }} />
        <Card key="♦9" flipped={false} card={{ suit: "", value: "" }} />
        <Card key="♦10" flipped={false} card={{ suit: "", value: "" }} />
      </div>
    </div>
  );
}
