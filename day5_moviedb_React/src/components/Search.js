import React from "react";

function Search({ search }) {
  return (
    <section className="searchbox-wrap">
      <input
        type="text"
        placeholder="Search for a movie..."
        className="searchbox"
        onKeyPress={search}
      />
    </section>
  );
}

export default Search;
