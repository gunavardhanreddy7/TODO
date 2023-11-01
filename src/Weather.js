import React, { useState } from "react";

function Weather() {
  const [api, setApi] = useState("338aecc2eaec1dacefefb52b985232e6");
  const [city, setCity] = useState("");
  const [state, setstate] = useState("");
  const [country, setCountry] = useState("");
  const [data, setData] = useState([]);
  const urls =
    "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={api}";

  function fetchDet() {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${api}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }
  return (
    <div>
      <h1>Weather Details API</h1>
      <p>Enter the weather deatils you want to fetch</p>
      <label>City Name: </label>
      <input
        type="text"
        description="Enter the city name"
        onChange={(e) => setCity(e.target.value)}
      />
      <label>State Code: </label>
      <input
        type="text"
        description="Enter the state code"
        onChange={(e) => setstate(e.target.value)}
      />
      <label>Country Code: </label>
      <input
        type="text"
        description="Enter the country code"
        onChange={(e) => setCountry(e.target.value)}
      />
      <button type="submit" onClick={fetchDet}>
        Fetch Details
      </button>
      {data.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </div>
  );
}

export default Weather;
