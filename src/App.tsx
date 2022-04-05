import React, { useEffect, useState } from 'react';
import init, { add } from "wasm-lib";
import logo from './logo.svg';
import './App.css';

// How to create a React app with Rust and WebAssembly
// https://tkat0.github.io/posts/how-to-create-a-react-app-with-rust-and-wasm

function App() {
  const [ans, setAns] = useState(0);
  useEffect(() => {
    init().then(() => {
      setAns(add(1, 1));
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>1 + 1 = {ans}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
