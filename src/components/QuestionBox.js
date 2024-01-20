import React,{useEffect,useState,useCallback,useMemo} from 'react'
import "./QuestionBox.css";
import questions from '../questions';
import Result from './Result';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

export default function QuestionBox() {

  const [dark, setTheme] = useState(true);
  const [themeName, setThemeName] = useState("dark");
  const[currentQuestion, setCurrentQuestion] = useState(0);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [score , setscore] = useState(0)
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
  const optionClicked =(isCorrect) => {
    if (isCorrect){
      setscore((prev)=>prev+1)
    }
    if (currentQuestion === questions.length - 1) {
      localStorage.setItem("score" , score)
      setShowResult(true);
    } else {
    setCurrentQuestion(currentQuestion + 1);
  }
}

  useEffect(()=>{
    if(dark){
      setThemeName(<MdDarkMode size="2em" />)
    }
    else{
      setThemeName(<MdLightMode size="2em" />)
    }
  },[dark])

  const handleClick = ()=>{
    setTheme(!dark);
  }

  const handleHighlight = () => {
    setIsHighlighted(true);
  }

  const handleRemoveHighlight = () => {
    setIsHighlighted(false);
  }

  const styleTheme = {
    backgroundColor:dark ? "black":"#ffffff",
   }
   const fontTheme = {
    color:dark ? "#ffffff":"black",
   }
  
   const questionStyle = {
    color: isHighlighted ? 'red' : 'rgb(49, 49, 250)',
   };
  return (
    <div>
       {showResult ? ( 
        <Result dark={dark} />
      ) : (
    <div>
      <h1 className='kalvium'>Kalvium</h1>
      <button className='mode' onClick={handleClick}>{themeName}</button>
     
      <div className='main' id='main' style={styleTheme}>
        <h1 style={fontTheme} className='Qcount'>Question {currentQuestion + 1} out of {questions.length}</h1>
        <h1 className='question' style={questionStyle}>{questions[currentQuestion].text}</h1>
        <ul>
          {questions[currentQuestion].options.map((option)=>{
            return(
              <li style={fontTheme} onClick={()=> optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
            )
          })}
        </ul>
            
        <button onClick={handleHighlight} className='highlight'>Highlight</button>
        <button onClick={handleRemoveHighlight} className='Remove_highlight'>Remove Highlight</button>
      </div>
    
    </div>
    )}
       </div>
  )
}