import React, { useState } from "react";
import "../App.css";

const api = {
  key: "5cc68af46127480e9d6144839200410",
  base: "http://api.weatherapi.com/v1/",
};

export const Forecast = () => {
  const [query, setQuery] = useState("");
  const [forecast, setForecast] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}forecast.json?&key=${api.key}&q=${query}&days=3`)
        .then((res) => res.json())
        .then((result) => {
          setForecast(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="searchbar"
            placeholder="Enter Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          ></input>
        </div>
        {typeof forecast.forecast != "undefined" ? (
          <div>
            <div className="loc-box">
              <div className="location">
                {forecast.location.name}, {forecast.location.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="grid-container">
                <div className={(typeof forecast != 'undefined')
                                ? ((forecast.current.temp_c > 19) ? "forecast-warm" : "forecast-cold") : "forecast-box"}>
                  <h1>Today</h1>
                  <div className="forecast-temp">{Math.round(forecast.current.temp_c)}°c</div>
                  <div className="image-box">
                    <img
                      src={forecast.current.condition.icon}
                      alt="forecastimg"
                      className="forecast-img"
                    ></img>
                  </div>
                </div>
              
                <div className={(typeof forecast != 'undefined')
                                ? ((forecast.forecast.forecastday[1].day.avgtemp_c > 19) ? "forecast-warm1" : "forecast-cold1") : "forecast-box1"}>
                <h1>Tomorrow</h1>
                  <div className="forecast-temp">{Math.round(forecast.forecast.forecastday[1].day.avgtemp_c)}°c</div>
                  <div className="image-box">
                    <img
                      src={forecast.forecast.forecastday[1].day.condition.icon}
                      alt="forecastimg"
                      className="forecast-img"
                    ></img>
                  </div>
              </div>
                <div className={(typeof forecast != 'undefined')
                                ? ((forecast.forecast.forecastday[2].day.avgtemp_c > 19) ? "forecast-warm2" : "forecast-cold2") : "forecast-box2"}>
                <h1>In 3 days</h1>
                  <div className="forecast-temp">{Math.round(forecast.forecast.forecastday[2].day.avgtemp_c)}°c</div>
                  <div className="image-box">
                    <img
                      src={forecast.forecast.forecastday[2].day.condition.icon}
                      alt="forecastimg"
                      className="forecast-img"
                    ></img>
                  </div>
                  </div>
              </div>
            </div>
        ) : (
          ""
        )}
      </main>
    </>
  );
};
