import React, { useState } from 'react'



export default function Textform(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked");
        let nreText=text.toUpperCase();
        setText(nreText)
        props.showAlert("Text has been Upper Cased","Suuccess");
    }

    const handleLoClick=()=>{
        console.log("Lowercase was clicked");
        let nreText=text.toLowerCase();
        setText(nreText)
    }

    const handleOnChange=(event)=>{
        console.log("text was changed");
        setText(event.target.value);
    }

    
    const [text,setText]= useState('Enter text here');
    // setText("New text");
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className='mb-3'>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="3"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to upper case</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lower case</button>
        </div>
        <div className="container my-5">
            <h1>Whatever</h1>
            <p>{text.replace(/\n/g," ").split(' ').filter(value=>value!=="").length} A very  long paragraph and {text.length} characters</p>
            <p>Can be read in {0.008 * text.split(" ").length} minutes</p>
        </div>
        </>
    )
}
