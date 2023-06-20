import React, { useState } from 'react';
import './wordgame.css'; // CSS file for styling
import {Link } from 'react-router-dom'
const WordGame = () => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [sentence, setSentence] = useState('');

  const dictionary = [
    "abandon",
    "benefit",
    "create",
    "dedicate",
    "examine",
    "fascinate",
    "gather",
    "humble",
    "improve",
    "justify",
    "kangaroo",
    "legacy",
    "magnify",
    "navigate",
    "observe",
    "participate",
    "question",
    "recognize",
    "satisfy",
    "transform",
    "understand",
    "validate",
    "wonder",
    "xylophone",
    "yield",
    "zealous",
    "accept",
    "believe",
    "construct",
    "discover",
    "educate",
    "familiarize",
    "generate",
    "hypothesize",
    "illuminate",
    "justify",
    "knowledge",
    "leverage",
    "manipulate",
    "nurture",
    "organize",
    "persuade",
    "quantify",
    "reinforce",
    "synthesize",
    "translate",
    "unify",
    "vary",
    "witness",
    "xerox",
    "yield",
    "zero",
    "activate",
    "benefit",
    "calculate",
    "develop",
    "establish",
    "foster",
    "generate",
    "harness",
    "implement",
    "join",
    "knowledge",
    "learn",
    "motivate",
    "navigate",
    "organize",
    "perform",
    "quantify",
    "realize",
    "strengthen",
    "train",
    "utilize",
    "visualize",
    "widen",
    "xenophobia",
    "yearn",
    "zeal",
    "accomplish",
    "balance",
    "collaborate",
    "differentiate",
    "emphasize",
    "facilitate",
    "grasp",
    "hypothesize",
    "illustrate",
    "justify",
    "keep",
    "leverage",
    "maintain",
    "navigate",
    "observe",
    "prepare",
    "quantify",
    "resolve",
    "sustain",
    "teach",
    "uncover",
    "validate",
    "witness",
    "x-ray",
    "yawn",
    "zoom",
    "acquire",
    "build",
    "convey",
    "discover",
    "elevate",
    "focus",
    "gather",
    "harness",
    "innovate",
    "journey",
    "know",
    "leverage",
    "maintain",
    "navigate",
    "observe",
    "perceive",
    "qualify",
    "recognize",
    "solve",
    "transform",
    "understand",
    "value",
    "work",
    "xenophile",
    "yield",
    "zone"
  ];

  
  
  
  
  
  
  

  const generateWord = () => {
    const randomIndex = Math.floor(Math.random() * dictionary.length);
    const randomWord = dictionary[randomIndex];

    setWord(randomWord);
    setDefinition(getRandomDefinition(randomWord));
    setSentence(getRandomSentence(randomWord));
  };

  const getRandomDefinition = (word) => {
    // Replace this with your own logic to retrieve definitions for each word
    return `Definition of ${word}`;
  };

  const getRandomSentence = (word) => {
    // Replace this with your own logic to retrieve example sentences for each word
    return `Example sentence with ${word}`;
  };

  const pronounceWord = () => {
    const speechSynthesis = window.speechSynthesis;
    const speechUtterance = new SpeechSynthesisUtterance(word);
    speechSynthesis.speak(speechUtterance);
  };

  return (
    <div className='sctn'>
<div className="word-game">
      <h1>Word Game</h1>
      <button onClick={generateWord}>Generate Word</button>
      <button className='goback'><Link  to="/english" spy={true} smooth={false}><span className="navlnk">Go Back</span></Link></button>
      {word && (
        <div className="word-details">
          <h2>Word: {word}</h2>
          <p>Definition: {definition}</p>
          <p>Sentence: {sentence}</p>
          <button onClick={pronounceWord}>Pronounce</button>
        </div>
      )}
    </div>
    </div>
    
  );
};

export default WordGame;
