import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="conatiner">
        <Weather defaultCity="Tallinn" />
        <footer>
          This project is coded by Kersti Allikvee and is {""}
          <a
            href="https://github.com/KerstiA/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-source on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
