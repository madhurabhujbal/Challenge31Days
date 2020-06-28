import React from 'react';
const api = {
  key: "446cc30bc37be1228e1d55b09335aeb6",
  base: "http://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
          type="text"
          className="search-bar"
          placeholder="Search..." />
        </div>
      </main>
    </div>
  );
}

export default App;
