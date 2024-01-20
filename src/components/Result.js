import React, { useEffect, useState } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import './Result.css';

export default function Result() {
  const [dark, setTheme] = useState(true);
  const [themeName, setThemeName] = useState('dark');
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is ReactJS?",
      options: [
        { id: 0, text: "Server-side framework", isCorrect: false },
        { id: 1, text: "user interface framework", isCorrect: true },
        { id: 2, text: "both a and b", isCorrect: false },
        { id: 3, text: "none of the above", isCorrect: false },
      ],
    },
  
    {
      text: "React.js is written in which of the following language?",
      options: [
        { id: 0, text: "JavaScript", isCorrect: "fill a boolean value here like shown in the first question" },
        { id: 1, text: "Java", isCorrect:  "fill a boolean value here like shown in the first question" },
        { id: 2, text: "C", isCorrect:  "fill a boolean value here like shown in the first question" },
        { id: 3, text: "C++", isCorrect:  "fill a boolean value here like shown in the first question" },
      ],
    },
    {
      text: "What is a state in React?",
      options: [
        { id: 0, text: "A permanent storage.", isCorrect:  "fill a boolean value here like shown in the first question" },
        { id: 1, text: "Internal storage of the component.", isCorrect: "fill a boolean value here like shown in the first question" },
        { id: 2, text: "External storage of the component.", isCorrect:  "fill a boolean value here like shown in the first question" },
        { id: 3, text: "None of the above.", isCorrect:  "fill a boolean value here like shown in the first question" },
      ],
    },
    
    {
      text: "What is the return value of the useState hook?",
      options: [
        { id: 0, text: " Pair of current state and function updating it", isCorrect: "fill a boolean value here like shown in the first question" },
        { id: 1, text: "Current State", isCorrect:  "fill a boolean value here like shown in the first question" },
        { id: 2, text: "Function updating the current state", isCorrect:  "fill a boolean value here like shown in the first question" },
        { id: 3, text: "UseState returns nothing", isCorrect:  "fill a boolean value here like shown in the first question" },
      ],
    },
    {
      text: "How many elements can a valid react component return?",
      options: [
        { id: 0, text: "1", isCorrect: "fill a boolean value here like shown in the first question" },
        { id: 1, text: "2", isCorrect:  "fill a boolean value here like shown in the first question" },
        { id: 2, text: "3", isCorrect:  "fill a boolean value here like shown in the first question" },
        { id: 3, text: "4", isCorrect:  "fill a boolean value here like shown in the first question" },
      ],
    },
  ];

  useEffect(() => {
    setThemeName(dark ? <MdDarkMode size="2em" /> : <MdLightMode size="2em" />);
  }, [dark]);

  // State to track user's answers
  const [userAnswers, setUserAnswers] = useState([]);

  // Calculate the score based on user answers
  useEffect(() => {
    const newScore = userAnswers.filter(answer => answer.isCorrect).length;
    setScore(newScore);
  }, [userAnswers]);

  const handleClick = () => {
    setTheme(!dark);
  };

  const fontTheme = {
    color: dark ? '#ffffff' : 'black',
  };

  const styleTheme = {
    backgroundColor: dark ? 'black' : '#ffffff',
  };
  let totalscore = localStorage.getItem("score")

  return (
    <div>
      <h1 className="kalvium">Kalvium</h1>
      <button className="mode" onClick={handleClick}>
        {themeName}
      </button>
      <div className="main" style={styleTheme}>
        <h1 style={fontTheme} className="final">
          Final Result
        </h1>
        <h2 style={fontTheme}>
          {totalscore} out of {questions.length} correct - {(totalscore / 5) * 100}%
        </h2>
        <a href='main'>
        <button className="restart">Restart Game </button>
        </a>
      </div>
    </div>
  );
}