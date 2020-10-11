import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function Link(originalLink, hashid) {
  this.id = uuidv4();
  this.originalLink = originalLink;
  this.shortenedLink = `https://rel.ink/${hashid}`;
}

const Shortener = ({ addLink }) => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(false);

  const submitLink = (e) => {
    e.preventDefault();

    if (url.length <= 0) {
      setError(true);
      return;
    }

    setError(false);

    axios
      .post("https://rel.ink/api/links/", {
        url: url,
      })
      .then(({ data }) => {
        let { hashid, url } = data;
        const link = new Link(url, hashid);
        addLink(link);
        setUrl("");
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className="Shortener">
      <form onSubmit={submitLink}>
        <input
          type="text"
          placeholder="Shorten a link here..."
          name="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">Shorten it!</button>
        {error ? <small className="error">Please add a link</small> : null}
      </form>
    </div>
  );
};

Shortener.propTypes = {
  addLink: PropTypes.func.isRequired,
};

export default Shortener;
