import { SUITS, VALUES } from "./cardsData";
import { useEffect, useState, useContext } from "react";
import { DrawnCardContext } from "./context/DrawnCardContext";
import logo from "./logo.svg";
import InfoBelt from "./components/InfoBelt";
import Menu from "./components/Menu";
import DeckPanel from "./components/DeckPanel";
import Player from "./components/Player";
import PlayerAction from "./components/PlayerAction";
import { ACTIONS } from "./reducers/drawnCardReducer";

export default function App() {
  const [deck, setDeck] = useState([]);
  const [playerOneDeck, setPlayerOneDeck] = useState([]);
  const [playerTwoDeck, setPlayerTwoDeck] = useState([]);
  const { dispatch } = useContext(DrawnCardContext);
  const [playerOneTurn, setPlayerOneTurn] = useState(true);
  // const [cardDrawnFromDeck, setCardDrawnFromDeck] = useState(null);
  // console.log(dispatch);

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
    let index = deck.length;
    let oldCard;
    let newIndex;

    while (index) {
      newIndex = Math.floor(Math.random() * index--);
      oldCard = deck[index];
      deck[index] = deck[newIndex];
      deck[newIndex] = oldCard;
    }
    return deck;
  };

  const drawCard = () => {
    const drawnCard = deck.shift();
    dispatch({ type: ACTIONS.DRAW, card: { ...drawnCard } });
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
  }, []);

  const changeTurn = () => {
    setPlayerOneTurn((prevTurn) => !prevTurn);
  };

  console.log("App deck", deck);
  console.log("App players decks", playerOneDeck, playerTwoDeck);

  return (
    <div className="App">
      <div className="logo white br-20">
        <img src={logo} alt="Typographic logo of KOBO" />
      </div>

      <InfoBelt playerTurn={playerOneTurn} />
      <Menu />
      <DeckPanel deck={deck} drawCard={drawCard} />

      <div className="players-wrap white br-20">
        <Player
          cards={playerOneDeck}
          playerTurn={playerOneTurn}
          changeTurn={changeTurn}
        />
        <PlayerAction
          playerDeck={playerOneTurn ? playerOneDeck : playerTwoDeck}
          changeTurn={changeTurn}
        />
        <Player
          cards={playerTwoDeck}
          playerTurn={!playerOneTurn}
          changeTurn={changeTurn}
        />
      </div>
    </div>
  );
}
