  
import React, { useContext, useState } from 'react';
import { WordContext } from '../context/WordContext';

const InputForm = () => {
  const wordContext = useContext(WordContext);  

  const [word, setWord] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setWord('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Word" value={word}
        onChange={(e) => setWord(e.target.value)} required />
      <input type="submit" value="Check Word" />
    </form>
  );
}
 
export default InputForm;