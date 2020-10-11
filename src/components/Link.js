import React from "react";
import PropTypes from "prop-types";

const Link = ({ link, isCopied, setIdCopied }) => {
  const copyShortenedLink = () => {
    navigator.clipboard.writeText(link.shortenedLink);
    if (setIdCopied) {
      setIdCopied(link.id);
    }
  };

  return (
    <div className="Link">
      <div className="original-link">
        <a href={link.originalLink} target="_blank" rel="noopener noreferrer">
          {link.originalLink}
        </a>
      </div>
      <div className="shortened-link">
        <a href={link.shortenedLink} target="_blank" rel="noopener noreferrer">
          {link.shortenedLink}
        </a>
      </div>
      <div className="copy-button">
        <button name={link.id} onClick={() => copyShortenedLink()}>
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

Link.propTypes = {
  link: PropTypes.object.isRequired,
  isCopied: PropTypes.bool,
  setIdCopied: PropTypes.func,
};

export default Link;
