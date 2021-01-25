import React from "react";
import "./WeatherForecastPreview.css";

export default function WeatherForecastPreview(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];

    return `${day}`;
  }

  function temperature() {
    let maxTemp = Math.round(props.data.main.temp_max);
    let minTemp = Math.round(props.data.main.temp_min);
    return `Max ${maxTemp}°C / Min ${minTemp}°C`;
  }

  function wind() {
    let wind = Math.round(props.data.wind.speed);
    return `Wind: ${wind}`;
  }

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-2">
          <img
            src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
            alt={props.data.weather[0].icon}
            class="float-left"
          />
        </div>
        <div className="col-2">{day()}</div>
        <div className="col-8">
          {temperature()}
          <br />
          {wind()}km/h
        </div>
      </div>
    </div>
  );
}
