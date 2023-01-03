import React, { useEffect, useState } from 'react';
import init, {adding} from "wasm-lib";

function App() {

  const [ans, setAns] = useState(0);
  useEffect(() => {
    init().then(() => {
      setAns(adding(1, 1));
      })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>{ans}</p>
        <h3 className="text-3xl font-bold underline">Test</h3>
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
