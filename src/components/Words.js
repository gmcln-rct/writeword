import React, {useState, useContext} from 'react';
import { useQuery } from 'react-query';

import Word from './Word';
import { WordContext } from '../context/WordContext';


const fetchWords = async (key, searchType, word) => {
    const res = await fetch(`https://api.datamuse.com/words?${searchType}=${word}`);
    return res.json();

}

const Words = () => {

    const { searchWord } = useContext(WordContext);
    const [ word, setWord ] = useState("");
    const { data, status } = useQuery(['words', "ml", searchWord], fetchWords);
    return (
        <>


            {
                status === 'loading' && (
                    <div id="status-message">Tauntauns are loading</div>
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