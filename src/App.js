import React, { useState} from 'react';
import Words from './components/Words';
import InputForm from './components/InputForm';
import { ReactQueryDevtools } from "react-query-devtools";

import { WordContextProvider } from './context/WordContext';


function App() {

  
  return (
    <div className="App">
      <h1>Words App</h1>
      <InputForm />
      <div className="content">
        <Words />
      </div>
    </div>
  );
}

export default App;
