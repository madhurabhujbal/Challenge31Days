import React from "react";
import Result from "./Result";
import Gif from "./Gif";

function Results({ results, openPopup }) {
  if (results === "not found")
    return (
      <section className="results-not-found">
        <Gif />
      </section>
    );
  else {
    return (
      <section className="results">
        {results.map((result) => (
          <Result key={result.imdbID} result={result} openPopup={openPopup} />
        ))}
      </section>
    );
  }
}

export default Results;
