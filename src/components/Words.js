import React from 'react';
import { useQuery } from 'react-query';

import Word from './Word';

const fetchWords = async () => {
    const res = await fetch('https://api.datamuse.com/words?ml=cold');
    return res.json();

}

const Words = () => {

    const { data, status } = useQuery('words', fetchWords);
    window.dataset = data;
    return (
        <div>
            <h2>Words</h2>
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
                    <div id="success-message">
                        {data.map(word =>
                            <Word
                                key={word.word}
                                word={word.word}
                                score={word.score}
                                tag={word.tag}
                            />
                        )}
                    </div>
                )
            }
        </div>
    );
}

export default Words;