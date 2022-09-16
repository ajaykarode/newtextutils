import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked - " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Upper Case","success");
    }
    const handleloClick = () => {
        // console.log("Uppercase was clicked - " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To Lower Case","success");
    }
    const handleClearClick = () => {
        // console.log("Uppercase was clicked - " + text);
        let newText = " ";
        setText(newText);
        props.showAlert("Cleared Successfully","success");
    }






    // const handleLightClick = () => {
    //     const dark = document.querySelector('body')
    //     dark.style.backgroundColor = "white";
    // }
    // const handleDarkClick = () => {
    //     // console.log("Uppercase was clicked - " + text);
    //     const light = document.querySelector('body')
    //     // console.log(light);
    //     light.style.backgroundColor = "black";
    //     light.style.color = "white";
    // }
    
    const handleTitleClick = () => {
        // console.log("Uppercase was clicked - " + text);
        let newText = text.split(" ").map((currentValue)=>{
            let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
            return newText;
            
        });

        setText(newText.join(" "));
        props.showAlert("Converted To Title Case","success");
    }
    const handlecopy = () =>{
        // console.log("i am copy");
        var text = document.getElementById("MyBox");
        text.select();
        // text.setSelectionRange(0,99999);
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied To Clipboard","success");

    }

//Remove extra spaces
    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed","success");
    }



//to extract only the numbers in the text:
    const handleNumExtract =()=>{
    const regex = /[0-9/ /]/g;

    const digits = text.match(regex);
    const res = digits.join('');
    setText(res)
    props.showAlert("Numbers Extracted from Text","success");
    };

//remove all the symbols
    const handletextExtract =()=>{
    const regex = /[0-9/A-Z/a-z/ /]/g;
    const letters = text.match(regex);
    const res1 = letters.join('');
    setText(res1)
    props.showAlert("Symbols Removed","success");
    };

// Function to reverse text:

    const handleReverse = (event) => {
    /* Convert string to array*/
    let strArr = text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
      props.showAlert("Text Reversed Successfully","success");
  };

// capitalize selected text
    function capitalizeSelectedText() {
    if (window.getSelection) {
    let selectedText = window.getSelection().toString();
    
    if (selectedText) {
    let newText = text.replace(selectedText, selectedText.toUpperCase());
    setText(newText);
    props.showAlert("Your Selected Text Is Capitalized","success");
    }
    }
    }
// The action of this function is to speak text what ever you written 
    const handleTextToSpeech = () => {
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;     //  text what you written
    window.speechSynthesis.speak(msg);
    };

  
    


    const handleOnChange = (event) => {
        // console.log("Handle OnChange");
        setText(event.target.value);
        
    }
    const [text,setText] = useState('Enter Text Here..');
    return (
        <>
        <div className='container' style={{color : props.mode==='dark'?'white':'black'}}>
            <h2 className='mb-4'>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'#323232':'rgb(220,220,220)',color: props.mode==='dark'?'white':'black'}} id="MyBox" rows="8"></textarea>
            </div>
            {/* <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={readTxt}>upload</button> */}
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert To UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleloClick}>Convert To LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleTitleClick}>Title Case</button>
            {/* <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlefontClick}>Italic Case</button> */}
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleExtraSpace}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={capitalizeSelectedText}>Capitalize Selected Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleReverse}>Reverse Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleNumExtract}>Extract Numbers</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handletextExtract}>Extract Symbols</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleTextToSpeech}>Text To Speech</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlecopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
            {/* <button className="btn btn-primary mx-2" onClick={handleItalicClick}>Conver To Italic </button> */} 
        </div>

        <div className="container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} WORDS AND {text.length} CHARACTERS</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} MINUTES TAKEN TO READ THE COMPLETE PARAGRAPH</p>
            <h2>PREVIEW</h2>
            <p>{text.length>0?text:"Nothing To Preview!!"}</p>
        </div>
        </>
    )
}
