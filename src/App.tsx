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
        <h3 className="text-3xl font-bold underline text-center">Test Tailwind</h3>
      </header>
      
    </div>
  );
}

export default App;
