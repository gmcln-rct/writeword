import React from 'react';


const Word = ({ word, score, tag }) => {

    let percentage = (score/1200).toFixed(2);
    let alpha = ((score/1200)/100).toFixed(2);
    let rgb;
    let fontcolor = "#000"

    switch(true) {
      case (alpha > .70):
        rgb = "26,22,85";
        fontcolor = "rgb(255,255,255)";
        break;
      case (alpha > .50):
        rgb = "56,56,85";
        fontcolor = "rgb(255,255,255)";
        break;
      case (alpha > .30):
        rgb = "105,104,130";
        fontcolor = "rgb(20,20,20)";
        break;
      default:
        rgb = "154,154,194";
        fontcolor = "rgb(5,5,5)";

    }


    return (
      <div className="card" style={{ background: `rgba(${rgb},0.8)`, color: `${fontcolor}` }}>
        <h3>{word}</h3>
        <p>Relevance: {percentage}%</p>
        {/* <p>{percentage}</p> */}
        {/* <p>Tag = {tag}</p> */}
      </div>
    );
}

export default Word;