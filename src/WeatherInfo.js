import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <FormattedDate date={props.data.date} />

      <h2>{props.data.city}</h2>
      <img
        src={props.data.iconUrl}
        alt={props.data.description}
        class="float-left"
      />
      <WeatherTemperature celsius={props.data.temperature} />
      <ul>
        <li>{props.data.description}</li>
        <li>Humidity: {props.data.humidity} %</li>
        <li>Wind: {Math.round(props.data.wind)}km/h</li>
      </ul>
    </div>
  );
}
