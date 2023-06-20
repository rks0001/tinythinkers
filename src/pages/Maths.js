import React, { useState } from 'react';
import './math.css';

const Maths = () => {
  const [cards, setCards] = useState([1]);

  const handleButtonClick = () => {
    const lastCard = cards[cards.length - 1];
    if (lastCard < 100) {
      const newCard = lastCard + 1;
      setCards([...cards, newCard]);
    }
  };

  const handleResetClick = () => {
    setCards([1]);
  };

  return (
    <div className='mathcon'>
      <div className='mathtext'>Counting Game</div>
      <div className='mathtext2'>Click on Next Card</div>
      <div className='btncon'>
      <button className="button" onClick={handleButtonClick}>
        Next Card
      </button>
      <button className="button" onClick={handleResetClick}>
          Reset
        </button>
      </div>
      
        <div className="game-container">
      <div className="card-container">
        {cards.map((card) => (
          <div key={card} className="card">
            {card}
          </div>
        ))}
      </div>
      
    </div>
    </div>
    
  );
};

export default Maths;
