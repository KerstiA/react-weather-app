import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="conatiner">
        <Weather />
        <footer>
          This project is coded by Kersti Allikvee and is {""}
          <a
            href="https://github.com/KerstiA/react-weather-app"
            target="_blank"
          >
            open-source on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
