import React from "react";
import { DateBuilder } from "./DateBuilder";

function InformationBox({ weather }) {
  if (weather.main !== undefined) {
    return (
      <div>
        <div className="location-box">
          <div className="location">
            {" "}
            {weather.name}, {weather.sys.country}{" "}
          </div>
          <div className="date">{DateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">{Math.round(weather.main.temp)}°C</div>
          <div className="weather"> {weather.weather[0].main} </div>
        </div>
      </div>
    );
  }
  return "";
}

export default InformationBox;
