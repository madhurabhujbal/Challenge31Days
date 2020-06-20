import React from 'react';
import Search from './components/Search';

function App() {
  // OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=e0a0442a
  const apiUrl = "http://www.omdbapi.com/?apikey=e0a0442a";
  return (
    <div className="App">
      <header>
        <h1> Movie Database </h1>
      </header>
      <main>
        <Search />
      </main>
    </div>
  );
}

//omdb api key Here is your key: e0a0442a

export default App;
