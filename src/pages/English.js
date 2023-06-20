import React, { useState } from 'react';
import './english.css';
import {Link} from 'react-router-dom'

const English = () => {
  const [cards, setCards] = useState(['A']);

  const handleNextCardClick = () => {
    const lastCard = cards[cards.length - 1];
    let newCard = '';
    if (lastCard !== 'z') {
      const nextCharCode = lastCard.charCodeAt(0) + 1;
      if (nextCharCode >= 91 && nextCharCode <= 96) {
        newCard = String.fromCharCode(nextCharCode + 1);
      } else {
        newCard = String.fromCharCode(nextCharCode);
      }
      setCards([...cards, newCard]);
    }
  };

  const handleResetClick = () => {
    setCards(['A']);
  };

  return (
    <div className='mathcon'>
      
      <div className='mathtext'>Learn the Alphabets</div>
      <div className='mathtext2'>Click on Next Card</div>
      <button className='nextgame'><Link  to="englishtwo" spy={true} smooth={false}><span className="navlnk">Play Another Game</span></Link></button>
      <div className="button-container">
        <button className="button" onClick={handleNextCardClick}>
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

export default English;
