import React from 'react';


const Word = ({ word, score, tag }) => {

    let percentage = (score/1200).toFixed(2);
    let alpha = ((score/1200)/100).toFixed(2);
    let rgb;
    let fontcolor = "#fff"

    switch(true) {
      case (alpha > .80):
        rgb = "225,225,225";
        fontcolor = "#000";
        break;
      case (alpha > .60):
        rgb = "125,125,125";
        break;
      case (alpha > .40):
        rgb = "50,50,50";
        break;
      default:
        rgb = "0,0,0";
    }


    return (
      <div className="card" style={{ background: `rgba(${rgb},0.8)`, color: `${fontcolor}` }}>
        <h3>{word}</h3>
        <p>Relevance = {percentage}%</p>
        {/* <p>{percentage}</p> */}
        {/* <p>Tag = {tag}</p> */}
      </div>
    );
}

export default Word;