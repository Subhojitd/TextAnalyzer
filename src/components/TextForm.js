import './style.css'
import copy from './file.png'
import React, { useState } from 'react';


const TextForm = (props) => {
  const [text, setText] = useState('');
  // Handle on Change
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  // Convert to uppercase
  const convertToUppercase = () => {
    setText(text.toUpperCase());
  };
  //convert to lowercase
  const convertLowercase = () => {
    setText(text.toLowerCase());
  };
  //clear text area
  const clearTextArea = () => {
    setText('');
  };
  //download file
  const downloadText = () => {
    const element = document.createElement('a');
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'downloaded_text.txt';
    document.body.appendChild(element);
    element.click();
  };
  //Auto Capitalize
  const autoCapitalizeSentences = () => {
    const sentences = text.split('. ');
    const capitalizedSentences = sentences.map((sentence) => {
      const trimmedSentence = sentence.trim();
      return trimmedSentence.charAt(0).toUpperCase() + trimmedSentence.slice(1);
    });
    setText(capitalizedSentences.join('. '));
  };
  //Reverse words
  const reverseText = () => {
    setText(text.split('').reverse().join(''));
  };
  //Copy the text
  const copyTextToClipboard = () => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  };
  
//Render the text form
  return (
    <>
        {/* Navbar */}
        <nav className='navbar'>
          <h1>Text Counter</h1>
          <div className='navbar-right'>
            <p>Home</p>
            <p>About Us</p>
            <button onClick={downloadText} className='download-btn'>Download .txt file</button>
          </div>
        </nav>
        {/* Main-Section */}
        <div className="wrapper">
            <div className="left-section">
                <div className="screen">
                  <textarea value={text} onChange={handleOnChange} id="text" cols="30" rows="23" placeholder='Enter text here'></textarea>
                  <div className="counter">
                    <p>Word: {text.split(" ").length-1}</p>
                    <p>Character: {text.length}</p>
                    <p>{0.008*(text.split(" ").length-1)} min read</p>
                    <img className='copy' onClick={copyTextToClipboard} src={copy} alt="" />
                  </div>
                </div>
            </div>
            <div className="right-section">
                <button onClick={convertToUppercase} className="btn">To Upper Case</button>
                <button onClick={convertLowercase} className="btn">To Lower Case</button>
                <button onClick={autoCapitalizeSentences} className='btn'>Capitalize Sentences</button>
                <button onClick={clearTextArea} className="btn">Clear Text</button>
                <button onClick={reverseText} className="btn">Reverse Text</button>
            </div>
        </div>

    </>
  );
};

export default TextForm;
