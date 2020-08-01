import React, {useState, useContext} from 'react';
import { useQuery } from 'react-query';

import Word from './Word';
import { WordContext } from '../context/WordContext';


const fetchWords = async (key, search, word) => {
    const res = await fetch(`https://api.datamuse.com/words?${search}=${word}`);
    return res.json();

}

const Words = () => {

    const { searchWord, searchType } = useContext(WordContext);
    // const [ word, setWord ] = useState("");
    const { data, status } = useQuery(['words', "ml", searchWord], fetchWords);

    let value = data;
    if (value !== undefined ) {
        console.log(Object.entries(value).length);
    }

    return (
        <>
            {
                status === 'loading' && (
                    <div id="status-message">Data loading</div>
                )
            }
            {
                status === 'error' && (
                    <div id="status-message"> Error fetching data </div>
                )
            }

            {
                status === 'success' && (
                    <>
                        {data.map(word =>

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