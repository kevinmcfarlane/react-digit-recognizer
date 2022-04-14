import React, { useEffect, useState } from 'react';
import init, { DigitRecognizer } from "wasm-lib";
// import init, { add } from "wasm-lib";
import logo from './logo.svg';
import './App.css';

import UploadButton from './UploadButton'


function App() {
  const [percentCorrect, calculatePercentCorrect] = useState("");
  const [trainingSet, setTrainingSet] = useState("");
  const [validationSet, setValidationSet] = useState("");
  useEffect(() => {
    init().then(() => {
      console.log(`Training Set = ${trainingSet}`);
      calculatePercentCorrect(DigitRecognizer.calculate_percent_correct(trainingSet, validationSet));
    })
  }, [trainingSet, validationSet])
return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>Correctly predicted: {percentCorrect}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <article>
          <h1>Digit Recognizer Web Assembly</h1>
          <UploadButton name='Upload Training Set' stateChanger={setTrainingSet} />
          <span> </span>
          <UploadButton name='Upload Validation Set' stateChanger={setValidationSet} />
      </article>
    </div>
  )
}


// How to create a React app with Rust and WebAssembly
// https://tkat0.github.io/posts/how-to-create-a-react-app-with-rust-and-wasm

// function App() {
//   const [inputText, setInputText] = useState("");
//   const [percentCorrect, calculatePercentCorrect] = useState("");
//   useEffect(() => {
//     init().then(() => {
//       calculatePercentCorrect(DigitRecognizer.calculate_percent_correct());
//     })
//   }, [])
//   // const [ans, setAns] = useState(0);
//   // useEffect(() => {
//   //   init().then(() => {
//   //     setAns(add(1, 1));
//   //   })
//   // }, [])

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <p>Correctly predicted: {percentCorrect}</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       <div style={{ marginTop: "1%", textAlign: "center" }}>
//         <input value={inputText} onChange={(e) => setInputText(e.target.value)} />
//         <br/>
//         <input type="file" onChange={() => previewFile()} />
//         <button onClick={() => alert(inputText)}>Click me</button>
//       </div>
//       </header>

//     </div>
    
//   );
// }

// function previewFile() {
  
//   const [file] = document.querySelector('input[type=file]').files;
//   const reader = new FileReader();

//   reader.addEventListener("load", () => {
//     // this will then display a text file
//     console.log(reader.result);
//   }, false);

//   if (file) {
//     reader.readAsText(file);
//   }
// }


export default App;
