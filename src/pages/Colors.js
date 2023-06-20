import React, { useState } from 'react';
import './color.css'; // Import the CSS file for styling
import {Link} from 'react-router-dom'

const Colors = () => {
  const colors = [
    'Red',
    'Green',
    'Blue',
    'Yellow',
    'Orange',
    'Purple',
    'Pink',
    'Brown',
    'Gray',
    'Black',
    'Cyan',
    'Magenta',
    'Lime',
    'Teal',
    'Indigo',
    'Silver',
    'Gold',
    'Maroon',
    'Navy',
    'Olive',
  ];
  const [selectedColor, setSelectedColor] = useState('');
  const [message, setMessage] = useState('');

  const handleCardClick = (color) => {
    setSelectedColor(color);
    setMessage(color);
    setTimeout(() => {
      setMessage('');
    }, 1500);
  };

  return (
    <section className='sctn_pages'>
    <div className="guess-the-color-game">
      <h1>Guess the Color Game</h1> <button className='nextgame'><Link  to="colortwo" spy={true} smooth={false}><span className="navlnk">Play Another Game</span></Link></button>
      <div className="card-container">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`color-card ${selectedColor === color ? 'active' : ''}`}
            style={{ backgroundColor: color.toLowerCase() }}
            onClick={() => handleCardClick(color)}
          >
            {selectedColor === color ? <span>{message}</span> : null}
          </div>
        ))}
      </div>
    </div>
    
    </section>
    
  );
};

export default Colors;
