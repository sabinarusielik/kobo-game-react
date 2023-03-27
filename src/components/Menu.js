import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import logoWhite from "../logo-white.svg";

Modal.setAppElement("#root");

export default function Menu({
  playersNames,
  setPlayerOneName,
  setPlayerTwoName,
}) {
  const [modalIsOpen, setIsOpen] = useState(true);

  const openModal = () => {
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
  }

  const handleFormButton = (event) => {
    event.preventDefault();
    let playerOneInput = document.getElementById("name-one").value;
    let playerTwoInput = document.getElementById("name-two").value;
    if (playerOneInput === "") {
      playerOneInput = "Player One";
    }
    if (playerTwoInput === "") {
      playerTwoInput = "Player Two";
    }
    setPlayerOneName(playerOneInput);
    setPlayerTwoName(playerTwoInput);
    console.log(playersNames.playerOne);
  };

  return (
    <div className="menu orange br-20">
      <button type="button" className="menu-circle" onClick={openModal}>
        <div className="line line1" />
        <div className="line line2" />
        <div className="line line3" />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => closeModal()}
        contentLabel="Menu rules modal"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal-left-wrap">
          <img src={logoWhite} alt="KOBO logo" />
          <h1>
            Hi! Welcome to the game. Here the goal is to score the lowest.
          </h1>
          <button
            type="button"
            className="close-button"
            onClick={() => closeModal()}
          >
            X
          </button>
        </div>
        <div className="modal-right-wrap">
          <div>
            <h3>Set up your names here:</h3>
            <form>
              <input
                type="text"
                id="name-one"
                name="name-one"
                minLength="3"
                maxLength="15"
                placeholder={playersNames.playerOne}
              />
              <input
                type="text"
                id="name-two"
                name="name-two"
                minLength="3"
                maxLength="15"
                placeholder={playersNames.playerTwo}
              />
              <button
                type="button"
                className="btn save"
                onClick={(event) => handleFormButton(event)}
              >
                save
              </button>
            </form>
          </div>
          <div className="text-wrap">
            <h3>How to play?</h3>
            <p>
              <b>Game goal:</b> to have the lowest possible sum of card values.
            </p>
            <ol>
              <li>
                You get 4 cards but only can check the 2 of them out. Don’t peek
                on your opponent now!
              </li>
              <li>
                You take turns and draw one card from the remaining deck or from
                the rejected cards deck (if anythings there). Then you decide
                whether you want to reject it or replace one of your cards with
                it. Your evey move is visible from now on!
              </li>
              <li>
                If you’re feeling confident in your score simply hit
                &ldquo;KOBO&ldquo; button and check who won.
              </li>
            </ol>
            <p>
              <b>Cards values:</b> Going up from Ace through 2 to 10 ending at
              Jack, Queen and King the values consecutively go from 1 to 13.
              There is an exception though: both red Kings&apos; values are 0.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

Menu.propTypes = {
  setPlayerOneName: PropTypes.func.isRequired,
  setPlayerTwoName: PropTypes.func.isRequired,
  playersNames: PropTypes.shape({
    playerOne: PropTypes.string,
    playerTwo: PropTypes.string,
  }).isRequired,
};
