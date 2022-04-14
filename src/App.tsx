import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import init, { DigitRecognizer } from "wasm-lib";
import UploadButton from './UploadButton'

// Adapted from 'How to create a React app with Rust and WebAssembly'
// https://tkat0.github.io/posts/how-to-create-a-react-app-with-rust-and-wasm

function App() {
  const [percentCorrect, calculatePercentCorrect] = useState("");
  const [trainingSet, setTrainingSet] = useState("");
  const [validationSet, setValidationSet] = useState("");

  useEffect(() => {
    init().then(() => {
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
          <h1>Digit Recognizer implemented in Rust/Web Assembly</h1>
          <UploadButton name='Upload Training Set' stateChanger={setTrainingSet} />
          <span> </span>
          <UploadButton name='Upload Validation Set' stateChanger={setValidationSet} />
      </article>
    </div>
  )
}

export default App;
