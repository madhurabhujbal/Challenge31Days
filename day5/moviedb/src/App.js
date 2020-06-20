import React, { useState } from 'react';
import Search from './components/Search';

function App() {
  const [state, setState] = useState({
    s: "", //search query
    results: [],
    selected: {} //Movie we select
  });

  // OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=e0a0442a
  const apiUrl = "http://www.omdbapi.com/?apikey=e0a0442a";

  const handleInput = (e) => {
    let s = e.target.value;
    setState(prevState => {
      return { ...prevState, s : s }
    });
    console.log(state.s);
  }

  return (
    <div className="App">
      <header>
        <h1> Movie Database </h1>
      </header>
      <main>
        <Search handleInput={handleInput} />
      </main>
    </div>
  );
}

//omdb api key Here is your key: e0a0442a

export default App;
