import { useEffect, useState, useContext, useRef } from "react";
import { SUITS, VALUES, ASSIGN_VALUE } from "./cardsData";
import { DrawnCardContext } from "./context/DrawnCardContext";
import { RejectedCardContext } from "./context/RejectedCardContext";
import logo from "./logo.svg";
import InfoBelt from "./components/InfoBelt";
import Menu from "./components/Menu";
import DeckPanel from "./components/DeckPanel";
import Player from "./components/Player";
import PlayerAction from "./components/PlayerAction";
import { ACTIONS } from "./reducers/drawnCardReducer";
import KoboButton from "./components/KoboButton";

export default function App() {
  const { cardDrawnFromDeck, dispatch } = useContext(DrawnCardContext);
  const { setRejectedCardsArr } = useContext(RejectedCardContext);
  const [deck, setDeck] = useState([]);
  const [playerOneDeck, setPlayerOneDeck] = useState([]);
  const [playerTwoDeck, setPlayerTwoDeck] = useState([]);
  const [playerOneName, setPlayerOneName] = useState("Player One");
  const [playerTwoName, setPlayerTwoName] = useState("Player Two");
  const [playerOneTurn, setPlayerOneTurn] = useState(true);
  const [winner, setWinner] = useState("");
  const [startDrawingFromDeck, setStartDrawingFromDeck] = useState(0);
  const [stopGame, setStopGame] = useState(false);
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
    setStartDrawingFromDeck((prevState) => prevState + 1);
  };

  const initialGameSetup = () => {
    // prev game cleanup
    setWinner("");
    setStopGame(false);
    setStartDrawingFromDeck(0);
    setRejectedCardsArr([]);
    setDeck([]);
    setPlayerOneDeck([]);
    setPlayerTwoDeck([]);
    setPlayerOneTurn(true);

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
  };

  // First launch of game on load
  useEffect(() => {
    if (firedFirstEffectRef.current) return;
    firedFirstEffectRef.current = true;

    initialGameSetup();
  }, []);

  const changeTurn = () => {
    setPlayerOneTurn((prevTurn) => !prevTurn);
  };

  const countPlayersPoints = (playerDeck) => {
    const valueArray = playerDeck.map((card) => {
      const value = ASSIGN_VALUE(card);
      return value;
    });
    const sumOfPoints = valueArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    return sumOfPoints;
  };

  const declareWinner = () => {
    const playerOneSum = countPlayersPoints(playerOneDeck);
    const playerTwoSum = countPlayersPoints(playerTwoDeck);
    setWinner(playerOneSum < playerTwoSum ? playerOneName : playerTwoName);
    setStopGame(true);
  };

  return (
    <div className="App">
      <div className="logo white br-20">
        <img src={logo} alt="Typographic logo of KOBO" />
      </div>

      <InfoBelt
        playerTurn={playerOneTurn}
        winner={winner}
        playersNames={{ playerOne: playerOneName, playerTwo: playerTwoName }}
      />
      <Menu
        playersNames={{ playerOne: playerOneName, playerTwo: playerTwoName }}
        setPlayerOneName={setPlayerOneName}
        setPlayerTwoName={setPlayerTwoName}
      />
      <DeckPanel drawCard={() => startDrawingFromDeck === 2 && drawCard()} />

      <div
        className={`players-wrap white br-20 ${
          playerOneTurn ? "" : "second-player-align"
        }`}
      >
        <Player
          cards={playerOneDeck}
          playerTurn={playerOneTurn}
          changeTurn={changeTurn}
          startDrawing={startDrawing}
          stopGame={stopGame}
        />
        {!stopGame ? (
          <PlayerAction
            playerDeck={playerOneTurn ? playerOneDeck : playerTwoDeck}
            changeTurn={changeTurn}
          />
        ) : (
          <div className="divider" />
        )}
        <Player
          cards={playerTwoDeck}
          playerTurn={!playerOneTurn}
          changeTurn={changeTurn}
          startDrawing={startDrawing}
          stopGame={stopGame}
        />
      </div>

      <KoboButton declareWinner={declareWinner} resetGame={initialGameSetup} />
    </div>
  );
}
