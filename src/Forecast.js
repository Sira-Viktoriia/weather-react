import React from "react";

export default function Forecast({ forecastData }) {
  const { main, weather, wind } = forecastData;

  return (
    <ul>
      <li>Temperature: {Math.round(main.temp)} °C;</li>
      <li>Description: {weather[0].description};</li>
      <li>Humidity: {main.humidity}%;</li>
      <li>Wind: {wind.speed} m/sec;</li>
      <li>
        <img
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt={weather[0].description}
        />
      </li>
    </ul>
  );
}
