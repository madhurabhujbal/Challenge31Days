import React, { useState } from "react";
import Searchbox from "./components/Searchbox";
import InformationBox from "./components/InformationBox";
const api = {
  key: "446cc30bc37be1228e1d55b09335aeb6",
  base: "http://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <Searchbox query={query} setQuery={setQuery} search={search} />
        <InformationBox weather={weather} />
      </main>
    </div>
  );
}

export default App;
