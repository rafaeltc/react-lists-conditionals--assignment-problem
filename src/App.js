import React, { useState } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
import './App.css';


const App = props => {

    /* app inline styles */
    const inputStyle = {
      backgroundColor: "cadetblue",
      width: "50%",
      textAlign: "center",
      display: "block",
      margin : "0 auto",
      padding: "15px"
    }

    /* javascript */
    const [state, setState] = useState({
     inputValue:'',
    });

    const updateInputHandler = (event) => {
      setState({
        inputValue:event.target.value,
      });
    }

    const removeCharHandler = (index) => {
      const newCharList = [...state.inputValue];
      newCharList.splice(index,1);
      setState({
        inputValue: newCharList.join(""),
      });
    }

    let charComponentList = state.inputValue.split("").map((c, index) => {
      return <CharComponent char={c} key={index} onClick={removeCharHandler.bind(this,index)}></CharComponent>
    })

    /* JSX */
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <div style={inputStyle}>
          <input onChange={updateInputHandler} value={state.inputValue}></input>
          <p>length: {state.inputValue.length}</p>
          <ValidationComponent textLength={state.inputValue.length}></ValidationComponent>
          {charComponentList}
        </div>
      </div>
    );
    
}

export default App;
