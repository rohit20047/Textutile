import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('');
  const [len , setlen]  = useState(0);

  

  const handleClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const onChangeUp = (event) => {
    console.log("change");
  
    setText(event.target.value);
  
    // Call wordCount to count words when the input changes
   
  }
// learn it
  const speak= () =>{
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
  }

  const cpyText= ()=>{
    var text = document.getElementById("textarea");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const removeExtraSpaces = ()=>{
    let n = text.split(/[  ]+/);
    setText(n.join(" "));
  }


  return (
    <>
    <div>
      <div className="form-group">
        <h1 className={`my-3 text-${props.mode === 'light' ? 'dark' : 'light'} `}>{props.heading} </h1>

        <textarea className={`form-control bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} value={text} onChange={onChangeUp} id="textarea" rows="5"></textarea>
        <button className="btn btn-primary my-4 mx-4" onClick={handleClick}>convert to uppercase</button>
        <button className="btn btn-primary my-4 mx-4" onClick={handleDownClick}>convert to Lowercase</button> 
        <button className='btn btn-success my-4 mx-4' type = 'submit' onClick={speak}>Speak</button>
        <button className='btn btn-primary my-4 mx-4'  onClick={cpyText}>copy text </button>
        <button className='btn btn-primary my-4 mx-4'  onClick={removeExtraSpaces}>remove extra spaces </button>
      </div>
    </div>
    <div className='container'> 
      <h2 className={`my-3 text-${props.mode === 'light' ? 'dark' : 'light'} `}>Summery</h2>
      {/* learn about it */}
      <span className={` text-${props.mode === 'light' ? 'dark' : 'light'} `}>{text.trim().length} charector count    ||</span><span className={` text-${props.mode === 'light' ? 'dark' : 'light'} `}> {text.replace(/\n/g, " ").split(' ').filter(value=>value!=="").length} word count</span>
      <h2 className={`my-3 text-${props.mode === 'light' ? 'dark' : 'light'} `}>Preview</h2>
      <p className={` text-${props.mode === 'light' ? 'dark' : 'light'} `} >{text.length === 0 ? "enter for preview":text}</p>
    </div>
    </>
  )
}
