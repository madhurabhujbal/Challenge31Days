import React, { useState } from 'react';
import Search from './components/Search';
import Results from './components/Results';
import axios from 'axios';

function App() {
  const [state, setState] = useState({
    s: "", //search query
    results: [],
    selected: {} //Movie we select
  });

  // OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=e0a0442a
  const apiUrl = "http://www.omdbapi.com/?apikey=e0a0442a";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiUrl + "&s=" + state.s)
      .then(({data}) => {
        let results = data.Search;
        setState(prevState => {
          return{ ...prevState, results: results }
        });

      });
    }
  }

  const handleInput = (e) => {
    let s = e.target.value;
    setState(prevState => {
      return { ...prevState, s : s }
    });

    //check text entered in search textbox is getting stored in variable s
    //console.log(state.s);
  }

  const openPopup = id => {
    axios(apiUrl + "&i=" +id)
    .then(({ data }) => {
      let result = data;

      setState(prevState => {
        return{...prevState, selected: result}
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return{...prevState, selected: {}}
    });
  }

  return (
    <div className="App">
      <header>
        <h1> Movie Database </h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} />
      </main>
    </div>
  );
}

//omdb api key Here is your key: e0a0442a

export default App;
