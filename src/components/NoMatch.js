import React, { useState } from "react";

const api = {
  key: "5cc68af46127480e9d6144839200410",
  base: "http://api.weatherapi.com/v1/",
};

export const NoMatch = () => {
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

  return (
    <>
      <main>
        <h1 className="checker">nomatch</h1>
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
      </main>
    </>
  );
};
