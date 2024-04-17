import React, { useState } from 'react';

export default function Form(props) {
  const [text, setText] = useState("");
  const [selectedText, setSelectedText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleUppercase = () => {
    setText(text.toUpperCase());
    props.showalert('convert into uppercase','success');
  };

  const handleLowercase = () => {
    setText(text.toLowerCase());
    props.showalert('converted into Lowercase', 'success')
  };

  const handleBlank = () => {
    setText("");
    props.showalert('Space', 'success')
  };

  const boldtext = () => {
    if (selectedText !== '') {
      const newText = text.replace(selectedText, `**${selectedText}**`);
      setText(newText);
      setSelectedText('');
    }
  };

  const handleTextSelect = () => {
    const selection = window.getSelection();
    setSelectedText(selection.toString());
  };

  const handlecopy = () => {
    var textarea = document.getElementById('exampleFormControlTextarea1');
    textarea.focus(); // Ensure textarea is focused
    textarea.setSelectionRange(0, textarea.value.length); // Select all text
    navigator.clipboard.writeText(textarea.value);
    props.showalert('Text is Successfully copy','success');
  }
  const handlespaces = () => {
    let newText = text.split(/[ ]+ /);
    setText(newText.join(' '))
  };

  const handitalic = {
    fontStyle : 'italic',
  };

  const handleItalic = () => {
    if (selectedText !== '') {
      const newText = text.replace(selectedText, `<i>${selectedText.replace(/</gi, "&lt;")}</i>`); // Escape special characters
      setText(newText);
      setSelectedText('');
    }
  };

  return (
    <>
      <div className="container" style={{color :props.mode === 'dark' ? 'white' : props.mode === 'blue' ? '#042743' : 'gray' }}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            style={{backgroundColor : props.mode === 'dark' ? 'grey' : 'white', color : props.mode === 'dark'?'white' : '#042743'}}
            className="form-control"
            value={text}
            onChange={handleTextChange}
            id="exampleFormControlTextarea1"
            rows="8"
            onMouseUp={handleTextSelect}
          />
        </div>
        <button className="btn btn-primary" onClick={handleUppercase}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-4" onClick={handleLowercase}>Convert to Lowercase</button>
        <button className="btn btn-primary" onClick={handleBlank}>Blank</button>
        <button className="btn btn-secondary mx-4" onClick={boldtext}>Bold</button>
        <button className='btn btn-primary mx-4' onClick={handlecopy}>copy text</button>
        <button className='btn btn-primary mx-4' onClick={handlespaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary active  mx-4" onClick={handleItalic} style={handitalic}>Italic</button>
      </div>
      <div className="container my-2" style={{color :props.mode === 'dark' ? 'white' : props.mode === 'white' ? 'gray' : 'yellow'}}>
        <h1>Your text summary</h1>
        <p>{(text.split(" ").length-1)} word(s) and {text.length} character(s)</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
      </div>
    </>
  );
}
