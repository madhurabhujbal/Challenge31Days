import React from "react";
import Result from "./Result";

function Results({ results, openPopup }) {
  if (results === "not found")
    return (
      <section className="results">
        <h3>No data found</h3>
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
