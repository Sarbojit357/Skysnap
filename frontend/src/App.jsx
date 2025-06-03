import React, { useState } from "react";
import "./App.css";

const getIconUrl = (icon) =>
  `https://openweathermap.org/img/wn/${icon}@4x.png`;

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:5000/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ city }),
      });
      const result = await response.json();
      if (response.ok) {
        setData(result);
      } else {
        setData(null);
        setError(result.message || "Error fetching data");
      }
    } catch (error) {
      setError("Failed to connect to the server");
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      {/* Header/Navbar */}
      <header className="navbar">
        <div className="navbar-logo">
          <span role="img" aria-label="cloud">⛅</span>
          <span className="project-name">SkySnap</span>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#weather">Weather</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode((prev) => !prev)}
          />
          <span className="slider"></span>
          <span className="toggle-label">{darkMode ? "Dark" : "Light"} Mode</span>
        </label>
      </header>

      {/* Main Content */}
      <main className="center-wrapper">
        <div className="weather-container" id="weather">
          <div className="header">
            <h1 className="title">Weather App</h1>
          </div>
          <div className="search-box">
            <input
              type="text"
              value={city}
              placeholder="Enter city name"
              onChange={(e) => setCity(e.target.value)}
              className="search-input"
            />
            <button onClick={fetchData} className="search-btn">
              Search
            </button>
          </div>
          {loading && <p className="loading">Loading...</p>}
          {error && <p className="error">{error}</p>}
          {data && data.cod !== "404" && (
            <div className="weather-card">
              <h2 className="city">{data.name}</h2>
              <img
                src={getIconUrl(data.weather[0].icon)}
                alt={data.weather[0].description}
                className="weather-icon"
              />
              <div className="temp">{Math.round(data.main.temp)}°C</div>
              <div className="weather">{data.weather[0].main}</div>
              <div className="details">
                <span>Humidity: {data.main.humidity}%</span>
                <span>Wind: {data.wind.speed} m/s</span>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div>
          &copy; {new Date().getFullYear()} SkySnap &mdash; Your Modern Weather Companion
        </div>
        <div>
          Made with <span role="img" aria-label="love">❤️</span> by Sarbojit
        </div>
      </footer>
    </div>
  );
}

export default App;
