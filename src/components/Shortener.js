import React, { useState } from "react";
import PropTypes from "prop-types";

const Shortener = (props) => {
  const [link, setLink] = useState("");
  const [error, setError] = useState(false);

  const submitLink = (e) => {
    e.preventDefault();

    if (link.length <= 0) {
      setError(true);
      return;
    }

    setError(false);
  };

  return (
    <div className="Shortener">
      <form onSubmit={submitLink}>
        <input
          type="text"
          placeholder="Shorten a link here..."
          name="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <button type="submit">Shorten it!</button>
        {error ? <small className="error">Please add a link</small> : null}
      </form>
    </div>
  );
};

Shortener.propTypes = {};

export default Shortener;
