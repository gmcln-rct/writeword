import React, { useState} from 'react';
import Words from './components/Words';
import { ReactQueryDevtools } from "react-query-devtools";

function App() {

  
  return (
    <div className="App">
      <h1>Words App</h1>
      <div className="content">
        <Words />
      </div>
    </div>
  );
}

export default App;
