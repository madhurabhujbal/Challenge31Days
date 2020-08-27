import React from "react";

function Searchbox({ query, search, setQuery }) {
  return (
    <div className="search-box">
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
        autoFocus
      />
    </div>
  );
}

export default Searchbox;
