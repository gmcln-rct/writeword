import React from 'react';


const Word = ({ word, score, tag }) => {

    let percentage = (score/1200).toFixed(2);

    return (
      <div className="card">
        <h3>{word}</h3>
        <p>Relevance = {percentage}%</p>
        {/* <p>{percentage}</p> */}
        {/* <p>Tag = {tag}</p> */}
      </div>
    );
}

export default Word;