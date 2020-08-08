  
import React, { useContext, useState } from 'react';
import { WordContext } from '../context/WordContext';

const InputForm = () => {
  let { searchWord, setSearchWord, searchType, setSearchType } = useContext(WordContext);  

  const [word, setWord] = useState('');
  const [search, setSearch] = useState('');

  let searchWordDisplay = "";

   const SearchTypeReference = {
    "ml": "similar or related meaning",
     "rel_ant": "opposite meaning",
    "sl": "sounds similar",
    "rel_rhy": "rhyming words",
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

  // function handleChange(e) {
  //   setSearchType(e.target.value);
  //   let idx = e.target.selectedIndex;
  //   searchType = e.target.options[idx].value;

  //   return (
  //     <div>Just a return value</div>
  //   )
  // };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <span id="input-span">
          <h1 className="input-header">Show me words that...</h1>
          <select
            className="select-css"
            name="choose search type"
            value={searchType}
            onChange={event => setSearchType(event.target.value)}
          >
            <option value="" defaultValue>Choose Search Type</option>
            <option value="ml">have similar meaning to:</option>
            <option value="rel_ant">have opposite meaning to:</option>
            <option value="sl">sound similar to:</option>
            <option value="rel_rhy">rhymes with:</option>
            <option value="rel_jjb">are adjectives related to:</option>
            <option value="rel_jja">are nouns related to:</option>
          </select>
          <input
            type="text"
            placeholder="Enter Word"
            autoFocus
            value={word}
            onChange={(e) => setWord(e.target.value)}
            required
          />
        </span>
        <button type="submit" name="submit" value="Submit" >Submit</button>
        {/* <input type="submit" name="submit" value="Submit" /> */}
      </form>
      <div className="search-info">
        <div id="search-word">Search Term: <span id="yellow-text">{(!searchWord) ? "" : searchWord}</span> </div>
        <div id="search-word"> | </div>
        <div id="search-word">Search Type: <span id="searchtype-text">{searchType === "" ? "similar meaning to" : SearchTypeReference[searchType]}</span> 
        </div>
      </div>

    </>
  );
}
 
export default InputForm;