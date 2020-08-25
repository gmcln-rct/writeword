import React, { useContext } from "react";

const InfoBox = () => {
    return ( 
        <>
            <details id="info-box">
                <summary>What is The Write Word?</summary>
                <p>The Write Word is a thesaurus tool that helps writers find word inspiration with synonyms, antonyms, rhymes, related words and more.</p>
                <p>Developed by Glenn McClanan using the Datamuse API.</p>
            </details>
        </>
     );
}
 
export default InfoBox;