import React, { useContext } from "react";

const InfoBox = () => {
    return ( 
        <>
            <details id="info-box">
                <summary>What is The Write Word?</summary>
                <p>The Write Word is a thesaurus tool that helps writers find word inspiration with synonyms, antonyms, rhymes, related words and more.</p>
                <p>By design, the app casts a wide net, showing you even distantly related words to help you find the right word for your project.</p>
                <p>Developed by Glenn McClanan using the (awewome) Datamuse API.</p>
                <p>Write On!</p>
            </details>
        </>
     );
}
 
export default InfoBox;