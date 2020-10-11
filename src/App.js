import React, { useState } from "react";
import Header from "./components/Header";
import Link from "./components/Link";
import Navbar from "./components/Navbar";
import Shortener from "./components/Shortener";

function App() {
  const [links, setLinks] = useState([]);
  const [idCopied, setIdCopied] = useState("");

  const addLink = (link) => {
    const url = link.originalLink;
    const linkExistence = links.find((link) => link.originalLink === url);
    if (!linkExistence) {
      setLinks([...links, link]);
    }
  };

  return (
    <>
      <Navbar />
      <Header />
      <div className="content">
        <Shortener addLink={addLink} />
        {links.map((link) => (
          <Link
            key={link.id}
            link={link}
            isCopied={idCopied === link.id ? true : false}
            setIdCopied={setIdCopied}
          />
        ))}
      </div>
    </>
  );
}

export default App;
