import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = '';
    setText(newText);
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById('toggle')
    if (toogle.textContent == "Speak") {
        toogle.innerHTML = "Stop"
    }
    else {
        toogle.innerHTML = "Speak"
        if (toogle.innerHTML = "Speak"){
            window.speechSynthesis.cancel()
        }
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleExtraSpaces = ()=>{
    let words = text.split(' ');
    let joinedWords = '';
    words.forEach((elem)=>{
        if(elem[0] != undefined){
            joinedWords += elem + " ";
            console.log(joinedWords);
        }
    })
    setText(joinedWords);
};

const titleCase = () =>{
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  const upper = text.split(' ').map(capitalize).join(' ');
  setText(upper)
}

  const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color:props.mode=== 'dark'?'white': '#121212'}}>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" style={{backgroundColour: props.mode==='dark'? 'white': 'grey', color:props.mode=== 'dark'?'black': '#121212'}}
 value={text} onChange={handleOnChange} rows="8"></textarea>
      </div>
      <button type="button" className="btn btn-info mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button type="button" className="btn btn-primary mx-1" onClick={handleLowClick} >Convert to Lowercase</button>
      <button type="submit" className="btn btn-warning mx-2 my-2" onClick={speak} id="toggle">Speak</button>
      <button type="button" className="btn btn-dark mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <button type="button" className="btn btn-danger mx-1" onClick={titleCase}>Title Case</button>
      <button type="button" className="btn btn-success mx-1" onClick={handleClearClick}>Clear text</button>
    </div>

    <div className="container my-3" style={{color:props.mode=== 'dark'?'white': '#121212'}}>
      <h2>Your Text Summary</h2>
      <p>{text === "" ? 0 : text.split(" ").length} words and {text.trim().length} characters</p>
      <h3>Preview</h3>
      <p>{text.length>0?text: "Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
