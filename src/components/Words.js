import React, {useState, useContext} from 'react';
import { useQuery } from 'react-query';

import Word from './Word';
import { WordContext } from '../context/WordContext';


const fetchWords = async (searchType, word) => {
    if (!word || word === "") {
        word = "nothing";
    }
    if (!searchType || searchType === "") {
        searchType = "ml";
    }
    const res = await fetch(`https://api.datamuse.com/words?${searchType}=${word}`);
    return res.json();

}

const Words = () => {
    const { searchWord, searchType } = useContext(WordContext);
    const { data, status } = useQuery([ searchType, searchWord], fetchWords);

    let value = data;
    if (value !== undefined ) {
        console.log(Object.entries(value).length);
    } 

    return (
        <>
            {
                status === 'loading' && (
                    <div id="status-message">Data loading...</div>
                )
            }
            
            {
                status === 'error' && (
                    <div id="status-message">No data loaded.</div>
                )
            }

            {
                status === 'success' && (
                    <>
                        {(Object.entries(value).length === 0) ? 
                        <div className="empty-div"></div>  :
                        data.map(word =>
                            <Word
                                key={word.word}
                                word={word.word}
                                score={word.score}
                                tag={word.tag}
                            />
                        )}
                    </>
                )
            }
        </>
    );
}

export default Words;