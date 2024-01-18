import React,{useEffect,useState,useCallback,useMemo} from 'react'
import "./QuestionBox.css";

export default function QuestionBox() {
  const [dark, setTheme] = useState(true);
  const [themeName, setThemeName] = useState("dark");

  useEffect(()=>{
    if(dark){
      setThemeName("dark")
    }
    else{
      setThemeName("light")
    }
  },[dark])

  const handleClick = ()=>{
    setTheme(!dark);
  }

  const styleTheme = {
    backgroundColor:dark ? "black":"#ccc7c7",
   }
  
  return (
    <div>

      <h1 className='kalvium'>Kalvium</h1>
      <button className='mode' onClick={handleClick}>{themeName}</button>
      <div className='main' style={styleTheme}>
        <h1 className='Qcount'>Question: 1 out of 5</h1>
        <h1 className='question'>What is React JS?</h1>
            <div className='Opcontainer'>
               <button className='option'>Server-side framework</button>
               <button className='option'>user interface framework</button>
               <button className='option'>both a and b</button>
               <button className='option'>none of the above</button>
            </div>
        <button className='highlight'>Highlight</button>
        <button className='Remove_highlight'>Remove Highlight</button>
      </div>
    </div>
  )
}
