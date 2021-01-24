import React from "react";

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
    return `${wind}`;
  }
  return (
    <div className="WeatherForecast">
      {day()}
      <br />
      {temperature()}
      <br />
      Wind: {wind()}km/h
    </div>
  );
}
