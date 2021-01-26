import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span id="cityTemp">{Math.round(props.celsius)}</span>
        <span id="units">
          <span id="activ">°C</span>|
          <span href="#" onClick={convertToFahrenheit}>
            °F
          </span>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span id="cityTemp">{Math.round((props.celsius * 9) / 5 + 32)}</span>
        <span id="units">
          <span href="#" onClick={convertToCelsius}>
            °C
          </span>
          |<span id="activ"> °F</span>
        </span>
      </div>
    );
  }
}
