import React, { useState} from 'react';
import Navbar from './components/Navbar';
import Planets from './components/Planets';
import People from './components/People';
import Words from './components/Words';
import { ReactQueryDevtools } from "react-query-devtools";

function App() {

  const [page, setPage] = useState('words');
  
  return (
    <div className="App">
      <h1>Words App</h1>
      {/* <Navbar setPage={setPage}/> */}
      <div className="content">
        <Words />
      </div>
    </div>
  );
}

export default App;
