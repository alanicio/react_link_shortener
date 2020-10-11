import React, { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Shortener from "./components/Shortener";

function App() {
  const [links, setLinks] = useState([]);

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
      <Shortener addLink={addLink} />
    </>
  );
}

export default App;
