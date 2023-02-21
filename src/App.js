import { useEffect, useState, useContext, useRef } from "react";
import { SUITS, VALUES } from "./cardsData";
import { DrawnCardContext } from "./context/DrawnCardContext";
import logo from "./logo.svg";
import InfoBelt from "./components/InfoBelt";
import Menu from "./components/Menu";
import DeckPanel from "./components/DeckPanel";
import Player from "./components/Player";
import PlayerAction from "./components/PlayerAction";
import { ACTIONS } from "./reducers/drawnCardReducer";

export default function App() {
  const { cardDrawnFromDeck, dispatch } = useContext(DrawnCardContext);
  const [deck, setDeck] = useState([]);
  const [playerOneDeck, setPlayerOneDeck] = useState([]);
  const [playerTwoDeck, setPlayerTwoDeck] = useState([]);
  const [playerOneTurn, setPlayerOneTurn] = useState(true);
  const [startDrawingFromDeck, setStartDrawingFromDeck] = useState(0);
  const firedFirstEffectRef = useRef(false);

  // functions
  const createDeck = () =>
    SUITS.flatMap((suit) =>
      VALUES.map((value) => {
        const card = { suit, value };
        return card;
      })
    );

  const shuffleDeck = (createdDeck) => {
    const deckCopy = Array.from(createdDeck);

    deckCopy.forEach((card, index) => {
      let cardElement = card;

      const currentIteration = deckCopy.length - index;
      const newIndex = Math.floor(Math.random() * currentIteration);
      const oldIndex = currentIteration - 1;

      cardElement = deckCopy[oldIndex];
      deckCopy[oldIndex] = deckCopy[newIndex];
      deckCopy[newIndex] = cardElement;
    });

    return deckCopy;
  };

  const drawCard = () => {
    if (!cardDrawnFromDeck) {
      const drawnCard = deck.shift();
      dispatch({ type: ACTIONS.DRAW, card: { ...drawnCard } });
    }
  };

  const startDrawing = () => {
    setStartDrawingFromDeck(startDrawingFromDeck + 1);
  };

  useEffect(() => {
    if (firedFirstEffectRef.current) return;
    firedFirstEffectRef.current = true;

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
    console.log("!!!Fire useEffect");
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
      <DeckPanel
        deck={deck}
        drawCard={() => startDrawingFromDeck === 2 && drawCard()}
      />

      <div className="players-wrap white br-20">
        <Player
          cards={playerOneDeck}
          playerTurn={playerOneTurn}
          changeTurn={changeTurn}
          startDrawing={startDrawing}
        />
        <PlayerAction
          playerDeck={playerOneTurn ? playerOneDeck : playerTwoDeck}
          changeTurn={changeTurn}
        />
        <Player
          cards={playerTwoDeck}
          playerTurn={!playerOneTurn}
          changeTurn={changeTurn}
          startDrawing={startDrawing}
        />
      </div>
    </div>
  );
}
