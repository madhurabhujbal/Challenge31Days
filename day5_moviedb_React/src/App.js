import React, { useState } from "react";
import Search from "./components/Search";
import Results from "./components/Results";
import Popup from "./components/Popup";
import axios from "axios";

function App() {
  const [state, setState] = useState({
    s: "", //search query
    results: [],
    selected: {}, //Movie we select
  });

  // OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=e0a0442a
  const apiUrl = "http://www.omdbapi.com/?apikey=e0a0442a";

  const search = (e) => {
    if (e.key === "Enter") {
      state.s = e.target.value;
      console.log(state.s);
      axios(apiUrl + "&s=" + state.s).then(({ data }) => {
        state.s = "";
        let results = data.Search;
        if (results === undefined) {
          setState((prevState) => {
            return { ...prevState, results: "not found" };
          });
        } else {
          setState((prevState) => {
            return { ...prevState, results: results };
          });
        }
      });
    }
  };

  const openPopup = (id) => {
    axios(apiUrl + "&i=" + id).then(({ data }) => {
      let result = data;

      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div className="App">
      <header>
        <h1> Movie Database </h1>
      </header>
      <main>
        <Search search={search} />
        <Results results={state.results} openPopup={openPopup} />

        {typeof state.selected.Title != "undefined" ? (
          <Popup selected={state.selected} closePopup={closePopup} />
        ) : (
          false
        )}
      </main>
    </div>
  );
}

//omdb api key Here is your key: e0a0442a

export default App;
