
import './App.css';
import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";

export default function App() {
  let [city, setCity] = useState("");
  let [forecastData, setForecastData] = useState(null);

  function showTemperature(response) {
    setForecastData(response.data);
    console.log(forecastData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f81614abe2395d5dfecd45b9298041de&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="seach"
          value={city}
          placeholder="Type a city"
          onChange={updateCity}
        />
        <input type="submit" value="Seach" />
      </form>
      {forecastData ? <Forecast forecastData={forecastData} /> : null}
    </div>
  );
}
