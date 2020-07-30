import React from 'react';


const Word = ({ word }) => {
    return (
        <div className="card">
            <h3>{word.name}</h3>
            <p>Gender = {word.gender}</p>
            <p>Birth Year = {word.birth_year}</p>

        </div>
    );
}

export default Word;