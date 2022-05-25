import { createContext, useState } from 'react';
import { useContext } from 'react/cjs/react.production.min';
import initialCards from './cards-data';

const GameContext = createContext();


export function GameContextProvider({ children }) {
  const [deck, setDeck] = useState(initialCards);
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [selectedCard, setSelectedCard] = useState();
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);

  const playerHands = [playerOneHand, playerTwoHand, playerThreeHand];
  const playerHandSetFunctions = [setPlayerOneHand, setPlayerTwoHand, setPlayerThreeHand];

  const toHand = playerHands[to - 1] || deck;
  const fromHand = playerHands[from - 1] || deck;

  const toSetFunction = playerHandSetFunctions[to - 1] || setDeck;
  const fromSetFunction = playerHandSetFunctions[from - 1] || setDeck;

  const cardToMoveIndex = findCardIndex(card.value, card.suit, fromHand);
  const [cardToMove] = fromHand.splice(cardToMoveIndex, 1);

  
  const stateAndSetters = { deck, setDeck, playerOneHand, setPlayerOneHand, selectedCard, setSelectedCard, playerTwoHand, setPlayerTwoHand, playerThreeHand, setPlayerThreeHand, from, setFrom, to, setTo };

  return <GameContext.Provider value={stateAndSetters}>{children}
  </GameContext.Provider>;

}

export default function useGameContext() {
  return useContext(GameContext);
}