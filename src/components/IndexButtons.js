import React from "react";

export default function IndexButtons({ playerDeck, replaceCard }) {
  console.log(playerDeck);
  const buttons = [];

  const handleIndexButtonClick = index => {
    replaceCard(index);
  };

  playerDeck.forEach((card, index) => {
    buttons.push(
      <div
        className="index-btn"
        key={`button-${playerDeck[index].value}${playerDeck[index].suit}`}
        onClick={() => handleIndexButtonClick(index)}
      >
        {index + 1}
      </div>
    );
  });

  return <div className="index-btn-wrap">{buttons}</div>;
}
