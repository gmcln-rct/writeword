  
import React, { useContext, useState } from 'react';
import { WordContext } from '../context/WordContext';

const InputForm = () => {
  const {setSearchWord, setSearchType} = useContext(WordContext);  

  const [word, setWord] = useState('');
  const [searchType, setSearch] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchWord(word);
    setSearchType(searchType);
    setWord('');
    setSearch('');
  }

  function handleChange(e) {
    setSearchType(e.target.value);
    let idx = e.target.selectedIndex;
    searchType = e.target.options[idx].innerText;
    return (
      <div>Just a return value</div>
    )
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input  type="text" 
                placeholder="Enter Word" 
                value={word}
                onChange={(e) => setWord(e.target.value)} 
                required />

        {/* <select
          className="select-css"
          value={searchType}
          onChange={handleChange}
        >
          <option value="ml">Synonyms</option>
          <option value="sl">Sounds Like</option>
          <option value="rel_rhym">Rhymes</option>
          <option value="sp">Similar Spelling</option>
          <option value="rel_jjb">Related Adjectives</option>
          <option value="rel_jja">Related Nouns</option>
        </select> */}
        <input type="submit" value="Find Related Words" />
      </form>
      <h2 id="search-word">
        Current search term: <span id="yellow-text">{word === '' ? "nothing" : word}</span> 
      </h2>
      </>
      
  );
}
 
export default InputForm;