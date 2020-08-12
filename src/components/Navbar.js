import React, {useContext} from 'react';

import {ReactComponent as Twitter} from '../images/twitter.svg';
import { ReactComponent as Facebook } from "../images/fb.svg";
import { ReactComponent as Email } from "../images/email.svg";

const Navbar = () => {

    return (
      <>
        <nav role="navigation">
          <span>The Write Word</span>
        </nav>
        <span id="social-share">
          <p>share</p>
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

          <a href="mailto:?Subject=The Write Word&amp;Body=Thought%20you%20might%20like%20to%20find%20The%20Write%20Word!%20 https://writeword.site">
            <Email 
              id="share-icon"
              alt="Share via Email"
            />

            {/* <img src="https://simplesharebuttons.com/images/somacro/email.png" alt="Email" /> */}
          </a>
        </span>
      </>
    );
}
 
export default Navbar;