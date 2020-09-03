import React from 'react';


const Word = ({ word, score, tag }) => {

    let percentage = isNaN(Math.ceil((score / 1200))) ? 1 : Math.ceil((score / 1200));
    percentage = percentage > 100? 100 : percentage;
    let alpha = ((score/1200)/100).toFixed(2);
    let rgb;
    let fontcolor = "#000"

    switch(true) {
      case (alpha > .70):
        // rgb = "26,22,85";
        // fontcolor = "rgb(255,255,255)";
        rgb = "255,255,255";
        fontcolor = "26,22,85";
        break;
      case (alpha > .50):
        rgb = "182,191,237";
        fontcolor = "20,20,20";
        break;
      case (alpha > .30):
        rgb = "56,56,85";
        fontcolor = "255,255,255";
        break;
      default:
        rgb = "154,154,194";
        fontcolor = "5,5,5";
    }


    return (
      <div className="card" style={{ background: `rgba(${rgb},0.9)`, color: `rgb(${fontcolor})` }}>
        <h2>{word}</h2>
        <p>Relevance: {percentage}%</p>
        {/* <p>{percentage}</p> */}
        {/* <p>Tag = {tag}</p> */}
      </div>
    );
}

export default Word;