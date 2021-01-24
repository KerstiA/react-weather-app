import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h4> 01/23/2021 </h4>
      <div className="row">
        <div className="col-6">
          <h2>Raasiku</h2>
          <img src="https://ssl.gstatic.com/onebox/weather/64/snow_light.png" />
          <h3>8 °C</h3>
          <ul>
            <li>Mostly Cloudy</li>
            <li>Humidity: 10%</li>
            <li>Wind: 12 km/h</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>Monday</li>
            <li>10°C/8°C</li>
            <li>Wind: 12 km/h</li>
            <li>Mostly cloudy</li>
          </ul>
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
          <p>“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers</p>
        </div>
      </div>
    </div>
  );
}
