  
import React, { useContext, useState } from 'react';
import { WordContext } from '../context/WordContext';

const InputForm = () => {
  const {setSearchWord, setSearchType} = useContext(WordContext);  

  const [word, setWord] = useState('');
  const [search, setSearch] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchWord(word);
    setWord('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input  type="text" 
              placeholder="Enter Word" 
              value={word}
              onChange={(e) => setWord(e.target.value)} 
              required />
      <input type="submit" value="Check Word" />
    </form>
  );
}
 
export default InputForm;