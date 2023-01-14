import React, { useEffect, useState } from 'react';
import init, {adding} from "wasm-lib";
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';

function App() {

  const [ans, setAns] = useState(0);
  useEffect(() => {
    init().then(() => {
      setAns(adding(1, 1));
      })
  }, [])
  return (
    <div className="App bg-orange-100 h-screen w-screen">
      <div className="App-header py-4">
        <h3 className="text-3xl font-bold text-center font-sans text-orange-500">Create Collage {ans}</h3>
      </div>
      <div className="App-main-content flex h-4/5">
        <div className="flex-none w-1/4">
          <LeftPanel/>
        </div>
        <div className="flex-1">
          <RightPanel/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
