import React from 'react';
import { useQuery } from 'react-query';

import Planet from './Planet';

const fetchPeople = async () => {
    const res = await fetch('http://swapi.dev/api/people/');

    return res.json();

}

const People = () => {

    const { data, status } = useQuery('people', fetchPeople);
    console.log(data);
    return (
        <div>
            <h2>People</h2>
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

export default People;