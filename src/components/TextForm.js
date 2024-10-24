import React, {useState} from 'react'

export default function TextForm(props) {

  // UpperCase function
  const handleUpperClick = () =>{
    setText(text.toUpperCase());
  }
  // LowerCase function
  const handleLowerClick = () => {
    setText(text.toLowerCase());
  }
  // Clear the text
  const handleClearClick = () => {
    setText('');
  }
  // Format the text
  const handleFormatClick = () => {
    // Split the text into an array by spaces
    const arr = text.split(' ');
    // Use map to capitalize the first letter of each word and keep the rest of the word lowercase
    const capitalizedArr = arr.map(t => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase());
    // Join the array back into a string and update the state once
    setText(capitalizedArr.join(' '));
  }
  // Text to Voice conversion
  const handleSpeakClick = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  // Remove extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }


  // Function to allow write something inside text area
  const handleOnChange = (e) => {
    setText(e.target.value); // Update the text state when the user types
  }
  const [text, setText] = useState('Enter some text here...');
  return (
    <>
    <div className='container'>
        <div class="mb-3">
            <label for="myBox" class="form-label"><b>{props.heading}</b></label>
            <textarea class="form-control" id="myBox" value={text} onChange={handleOnChange} rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpperClick}>UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleFormatClick}>Fortmatting</button>
        <button className="btn btn-primary mx-2" onClick={handleSpeakClick}>Speak</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        
    </div>
    <div className='container my-3'>
        <h2>Your text summary</h2>
        {/* <p>{text.split(' ').length} words and {text.length} characters</p> [This is counting the spaces as word]*/}
        <p> { text==="" ?0 :text.trim().split(" ").length} words, {text.length} characters</p>
    </div>
    </>
  )
}
