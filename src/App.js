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

  useEffect(() => {
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

    const shuffledDeck = shuffleDeck(createDeck());
    setDeck(shuffledDeck);
  }, []);

  return (
    <div className="App">
      <div className="logo white br-20">
        <img src={logo} alt="Typographic logo of KOBO" />
      </div>

      <InfoBelt />
      <Menu />
      <DeckPanel />

      <div className="players-wrap white br-20">
        <Player />
        <PlayerAction />
        <Player />
      </div>
    </div>
  );
}
