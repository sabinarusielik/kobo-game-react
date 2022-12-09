import { SUITS, VALUES } from "./cardsData";
import { useEffect, useState } from "react";
import logo from "./logo.svg";
import InfoBelt from "./components/InfoBelt";
import Menu from "./components/Menu";
import DeckPanel from "./components/DeckPanel";
import Player from "./components/Player";
import PlayerAction from "./components/PlayerAction";

export default function App() {
  const [deck, setDeck] = useState([]);
  const [playerOneDeck, setPlayerOneDeck] = useState([]);
  const [playerTwoDeck, setPlayerTwoDeck] = useState([]);

  // functions
  const createDeck = () => {
    return SUITS.flatMap((suit) => {
      return VALUES.map((value) => {
        const card = { suit: suit, value: value };
        return card;
      });
    });
  };

  const shuffleDeck = (deck) => {
    let n = deck.length;
    let oldCard;
    let newIndex;

    while (n) {
      newIndex = Math.floor(Math.random() * n--);
      oldCard = deck[n];
      deck[n] = deck[newIndex];
      deck[newIndex] = oldCard;
    }
    return deck;
  };

  useEffect(() => {
    // create and shuffle deck
    const shuffledDeck = shuffleDeck(createDeck());

    // create and give initial cards to players
    const initialPlayersCards = shuffledDeck.splice(0, 8);
    const playerOneInitialCards = initialPlayersCards.slice(0, 4);
    const playerTwoInitialCards = initialPlayersCards.slice(
      4,
      initialPlayersCards.length
    );
    setPlayerOneDeck(playerOneInitialCards);
    setPlayerTwoDeck(playerTwoInitialCards);
    setDeck(shuffledDeck);

    console.log("useEffect1");
  }, []);

  console.log("App comp");
  console.log(deck);
  console.log(playerOneDeck, playerTwoDeck);

  return (
    <div className="App">
      <div className="logo white br-20">
        <img src={logo} alt="Typographic logo of KOBO" />
      </div>

      <InfoBelt />
      <Menu />
      <DeckPanel />

      <div className="players-wrap white br-20">
        <Player cards={playerOneDeck} />
        <PlayerAction />
        <Player cards={playerTwoDeck} />
      </div>
    </div>
  );
}
