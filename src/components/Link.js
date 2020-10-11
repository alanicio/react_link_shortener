import React from "react";
import PropTypes from "prop-types";

const Link = ({ link }) => {
  return (
    <div className="Link">
      <div className="original-link">
        <a href={link.originalLink}>{link.originalLink}</a>
      </div>
      <div className="shortened-link">
        <a href={link.shortenedLink}>{link.shortenedLink}</a>
      </div>
      <div className="copy-button">
        <button>Copy</button>
      </div>
    </div>
  );
};

Link.propTypes = {
  link: PropTypes.object.isRequired,
};

export default Link;
