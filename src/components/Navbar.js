import React, {useContext} from 'react';

import {ReactComponent as Twitter} from '../images/twitter.svg';
import { ReactComponent as Facebook } from "../images/fb.svg";


const Navbar = () => {

    return (
      <nav role="navigation">
        <span>The Write Word</span>
        <span id="social-share">
          <a
            href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwriteword.site%2F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook
              alt="Share on Facebook"
              id="share-icon"
              aria-label="Share on Facebook Icon"
            />
          </a>

          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwriteword.site%2F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter
              alt="Share on Twitter"
              id="share-icon"
              aria-label="Share on Twitter Icon"
            />
          </a>
        </span>
      </nav>
    );
}
 
export default Navbar;