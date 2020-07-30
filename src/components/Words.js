import React from 'react';
import { useQuery } from 'react-query';

import Planet from './Planet';

const fetchWords = async () => {
    const res = await fetch('api.datamuse.com/words?ml=cold');

    return res.json();

}

const Words = () => {

    const { data, status } = useQuery('words', fetchWords);
    console.log(data);
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
                        {data.results.map(planet =>
                            <Planet
                                key={planet.name}
                                planet={planet}
                            />
                        )}
                    </div>
                )
            }
        </div>
    );
}

export default Words;