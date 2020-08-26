import React from "react";
import Result from "./Result";
import Gif from "./Gif";

function Results({ results, openPopup }) {
  if (results === "not found")
    return (
      <section className="results-not-found">
        <h3>Sorry! We could not find this movie</h3>
        <div className="gif">
          <iframe
            className="iframe"
            src="https://gifer.com/embed/v0K"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
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
