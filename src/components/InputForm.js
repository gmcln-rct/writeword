  
import React, { useContext, useState } from 'react';
import { WordContext } from '../context/WordContext';

const InputForm = () => {
  let { searchWord, setSearchWord, searchType, setSearchType } = useContext(WordContext);  

  const [word, setWord] = useState('');
  const [search, setSearch] = useState('');

  let searchWordDisplay = "";
  let searchTypeDisplay = "";

   const SearchTypeReference = {
    "ml": "synonym",
    "sl": "sounds similar",
    "rel_rhym": "rhyming words",
    "sp": "similar spelling",
    "rel_jjb": "related adjectives",
    "rel_jja": "related nouns",
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchWord(word);
    setSearchType(searchType);
    searchWordDisplay = word;
    setWord('');
    setSearch('');
  }

  function handleChange(e) {
    setSearchType(e.target.value);
    let idx = e.target.selectedIndex;
    // searchType = e.target.options[idx].value;

    // searchTypeDisplay = e.target.options[idx].innerText;
    return (
      <div>Just a return value</div>
    )
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          required
        />

        <select
          className="select-css"
          value={search}
          onChange={handleChange}
        >
          <option value="" defaultValue>Choose Search Type</option>
          <option value="ml">Synonyms</option>
          <option value="sl">Sounds Similar</option>
          <option value="sp">Similar Spelling</option>
          <option value="rel_jjb">Related Adjectives</option>
          <option value="rel_jja">Related Nouns</option>
        </select>
        <input type="submit" value="Find Words" />
      </form>
      <h2 id="search-word">
        Search Term: <span id="yellow-text">{(!searchWord) ? "" : searchWord}</span> </h2>
        <h2 id="search-word">Search Type: <span id="searchtype-text">{SearchTypeReference[searchType]}</span> 
      </h2>
    </>
  );
}
 
export default InputForm;