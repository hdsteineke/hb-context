import React from 'react';
import Card from './Card';
import useGameContext from './useGameContext';

export default function CardList() {
  const { 
    cards, 
    setSelectedCard, 
    player, 
    setFrom, 
    selectedCard 
  } = useGameContext(); 
  
  
  return (
    <div className='card-list'>
      {
        cards.map((card => <Card 
          key={card.suit + card.value} 
          setSelectedCard={setSelectedCard} 
          selectedCard={selectedCard}
          player={player}
          setFrom={setFrom}
          card={card}
        />))
      }
    </div>
  );
}
