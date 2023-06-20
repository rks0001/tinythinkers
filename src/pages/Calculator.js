import React, { useState } from 'react';
import './calculator.css'; // Import the CSS file for styling

const Calculator = () => {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult('');
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className='sctn_four'>
        <h1>Calculator</h1>
    <div className="calculator">
      <input type="text" value={result} className="input-field" />
      <div className="keypad">
        <button className='calcbutton' name="1" onClick={handleClick}>1</button>
        <button className='calcbutton' name="2" onClick={handleClick}>2</button>
        <button className='calcbutton' name="3" onClick={handleClick}>3</button>
        <button className='calcbutton' name="+" onClick={handleClick}>+</button>
        <button className='calcbutton' name="4" onClick={handleClick}>4</button>
        <button className='calcbutton' name="5" onClick={handleClick}>5</button>
        <button className='calcbutton' name="6" onClick={handleClick}>6</button>
        <button className='calcbutton' name="-" onClick={handleClick}>-</button>
        <button className='calcbutton' name="7" onClick={handleClick}>7</button>
        <button className='calcbutton' name="8" onClick={handleClick}>8</button>
        <button className='calcbutton' name="9" onClick={handleClick}>9</button>
        <button className='calcbutton' name="*" onClick={handleClick}>*</button>
        <button className='calcbutton' name="0" onClick={handleClick}>0</button>
        <button className='calcbutton' name="." onClick={handleClick}>.</button>
        <button className='calcbutton' name="/" onClick={handleClick}>/</button>
        <button className="clear" onClick={clear}>Clear</button>
        <button className="equal" onClick={calculate}>=</button>
      </div>
    </div>
    </div>
    
  );
};

export default Calculator;
