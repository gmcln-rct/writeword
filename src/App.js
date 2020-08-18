import React, { useState} from 'react';

import InputForm from './components/InputForm';
import Navbar from './components/Navbar';
import Words from './components/Words';
import Footer from './components/Footer';
import { ReactQueryDevtools } from "react-query-devtools";

import { WordContextProvider } from './context/WordContext';


function App() {

  return (
    <div className="App">
      <WordContextProvider>
        <Navbar />
        <InputForm />
        <main className="content">
          <Words />
        </main>
      </WordContextProvider>
      <Footer />
    </div>
  );
}

export default App;
