import React, { useState} from 'react';
import Words from './components/Words';
import InputForm from './components/InputForm';
import Navbar from './components/Navbar';
import { ReactQueryDevtools } from "react-query-devtools";

import { WordContextProvider } from './context/WordContext';


function App() {

  
  return (
    <div className="App">
      <Navbar />
      <WordContextProvider>
      <InputForm />
      <div className="content">
        <Words />
      </div>
        </WordContextProvider>
    </div>
  );
}

export default App;
