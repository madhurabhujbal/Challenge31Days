import React from "react";
import Result from "./Result";

function Results({ results, openPopup }) {
  if (results === "not found")
    return (
      <section className="results-not-found">
        <h3>Sorry! We could not find this movie</h3>
        <div className="gif">
          <iframe
            className="iframe"
            src="https://gifer.com/embed/v0K"
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0 }}
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
