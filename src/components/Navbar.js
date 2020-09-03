import React, { useContext } from "react";

import { ReactComponent as Twitter } from "../images/twitter.svg";
import { ReactComponent as Facebook } from "../images/fb.svg";
import { ReactComponent as Email } from "../images/email.svg";

const Navbar = () => {
  return (
    <>
      <nav role="navigation">
        <span>The Write Word</span>
      </nav>
      <span id="social-share">
        <p alt="Share website">Share:</p>
        <a
          href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwriteword.site%2F"
          target="_blank"
          alt="Share on Facebook"
          rel="noopener noreferrer"
          aria-label="share on facebook"
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
          alt="Share on Twitter"
          rel="noopener noreferrer"
          aria-label="share on twitter"
        >
          <Twitter
            alt="Share on Twitter"
            id="share-icon"
            aria-label="Share on Twitter Icon"
          />
        </a>

        <a
          href="mailto:?Subject=The Write Word&amp;Body=Thought%20you%20might%20like%20to%20find%20The%20Write%20Word!%20 https://writeword.site"
          alt="Share via Email"
          aria-label="share via email"
        >
          <Email id="share-icon" alt="Share via Email" />

          {/* <img src="https://simplesharebuttons.com/images/somacro/email.png" alt="Email" /> */}
        </a>
      </span>
    </>
  );
};

export default Navbar;
