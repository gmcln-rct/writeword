import React from 'react';


const Word = ({ word, score, tag }) => {

    let percentage = (score/1200).toFixed(2);
    let alpha = ((score/1200)/100).toFixed(2);
    let rgb;
    let fontcolor = "#000"

    switch(true) {
      case (alpha > .70):

        rgb = "50,50,50";
        fontcolor = "rgb(255,255,150)";
        break;
      case (alpha > .50):
        rgb = "125,125,125";
        fontcolor = "#fff";
        break;
      case (alpha > .30):
        rgb = "200,200,200";
        break;
      default:
        rgb = "255,255,255";
    }


    return (
      <div className="card" style={{ background: `rgba(${rgb},0.7)`, color: `${fontcolor}` }}>
        <h3>{word}</h3>
        <p>Relevance: {percentage}%</p>
        {/* <p>{percentage}</p> */}
        {/* <p>Tag = {tag}</p> */}
      </div>
    );
}

export default Word;