import React, { useState } from 'react';
import './colortwo.css'; // Import the CSS file for styling
import {Link} from 'react-router-dom'
const Colortwo = () => {
    const initialColors = [
        ['white', 'white', 'white'],
        ['white', 'white', 'white'],
        ['white', 'white', 'white'],
       
      ];
      const [colors, setColors] = useState(initialColors);
      const [isGameOver, setIsGameOver] = useState(false);
    
      const handleBoxClick = (rowIndex, boxIndex) => {
        if (!isGameOver) {
          const updatedColors = [...colors];
          updatedColors[rowIndex][boxIndex] = updatedColors[rowIndex][boxIndex] === 'white' ? getRandomColor() : 'white';
          setColors(updatedColors);
        }
      };
    
      const resetColors = () => {
        setColors(initialColors);
        setIsGameOver(false);
      };
    
      const getRandomColor = () => {
        const colorOptions = [
          'red',
          'green',
          'blue',
          'yellow',
          'orange',
          'purple',
          'pink',
          'brown',
          'gray',
          'black',
          'cyan',
          'magenta',
          'lime',
          'teal',
          'indigo',
        ];
        const randomIndex = Math.floor(Math.random() * colorOptions.length);
        return colorOptions[randomIndex];
      };
    
      return (
        <div className='sctn_four'>
                  <div className="color-game">
          <h1>Color Game</h1>  <button className='goback'><Link  to="/colors" spy={true} smooth={false}><span className="navlnk">Go Back</span></Link></button>
          <div className="box-container">
            {colors.map((row, rowIndex) => (
              <div key={rowIndex} className="row">
                {row.map((color, boxIndex) => (
                  <div
                    key={boxIndex}
                    className={`box ${color !== 'white' ? 'filled' : ''}`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleBoxClick(rowIndex, boxIndex)}
                  ></div>
                ))}
              </div>
            ))}
          </div>
          <button className="reset-button" onClick={resetColors}>
            Reset
          </button>
        </div>
        
      
        
        
        </div>
      
      );
    };

export default Colortwo;
