import React from "react";

export default function IndexButtons({ playerDeck }) {
  console.log(playerDeck);
  const buttons = [];

  const handleIndexButtonClick = (index) => {
    console.log(index);
  };

  for (let i = 0; i < playerDeck.length; i++) {
    buttons.push(
      <div
        className="index-btn"
        key={`button-${i}`}
        onClick={() => handleIndexButtonClick(i)}
      >
        {i + 1}
      </div>
    );
  }

  return <div className="index-btn-wrap">{buttons}</div>;
}
