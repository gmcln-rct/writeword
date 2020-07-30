import React from 'react';


const Word = ({ word, score, tag }) => {

    
    return (
      <div className="card">
        <h3>{word}</h3>
        <p>Score = {score}</p>
        <p>Tag = {tag}</p>
      </div>
    );
}

export default Word;