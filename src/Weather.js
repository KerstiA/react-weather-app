import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      image: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new date(response.data.dt * 1000),
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <FormattedDate date={weatherData.date} />
        <div className="row">
          <div className="col-6">
            <h2>{weatherData.city}</h2>
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              class="float-left"
            />
            <strong id="cityTemp">{Math.round(weatherData.temperature)}</strong>
            <span id="units">°C|°F</span>
            <ul>
              <li>{weatherData.description}</li>
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Wind: {Math.round(weatherData.wind)}km/h</li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>Monday</li>
              <li>10°C/8°C</li>
              <li>Wind: 12 km/h</li>
              <li>Mostly cloudy</li>
            </ul>
          </div>
          <div className="col-4">
            <input
              target="search"
              placeholder="Search a City..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-80"
            />
          </div>
          <div className="col-6">
            <p>
              “Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `88493d926515e36fa055dfe27bbb8ecd`;
    let city = `Tallinn`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
