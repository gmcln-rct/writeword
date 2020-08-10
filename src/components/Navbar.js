import React, {useContext} from 'react';


const Navbar = () => {

    return ( 
        <nav role="navigation">
            <span>The Write Word</span> 
            <span id="social-share">
                   <a href="https://www.facebook.com/sharer.php?u=http%3A%2F%2Ftrataka.io%2F" target="_blank" rel="noopener noreferrer">
                    <img src="../images/fb-icon.svg" alt="Share on Facebook" id="share-icon" aria-label="Share on Facebook Icon" /> </a>

                <a href="https://twitter.com/intent/tweet?url=http%3A%2F%2Ftrataka.io%2F" target="_blank" rel="noopener noreferrer">
                    <img src="../images/twitter-icon.svg" alt="Share on Twitter" id="share-icon" aria-label="Share on Twitter Icon" /> </a>

            </span>
    
        </nav>
     );
}
 
export default Navbar;