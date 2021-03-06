import React from 'react';
import InputForm from './components/InputForm';
import Navbar from './components/Navbar';
import InfoBox from './components/InfoBox';
import Words from './components/Words';
import Footer from './components/Footer';

import { WordContextProvider } from './context/WordContext';


function App() {

  return (
    <div className="App">
      <WordContextProvider>
        <header>
          <Navbar />
          <InfoBox />
          <InputForm />
        </header>

        <main className="content">
          <Words />
        </main>
      </WordContextProvider>
      <Footer />
    </div>
  );
}

export default App;
