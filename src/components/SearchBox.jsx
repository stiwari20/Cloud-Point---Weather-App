import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SearchBox = ({ updateInfo }) => {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  const getWeatherInfo = async () => {
    try {
      let rawResponse = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );

      let jsonResponse = await rawResponse.json();

      // console.log(jsonResponse);

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        maxTemp: jsonResponse.main.temp_max,
        minTemp: jsonResponse.main.temp_min,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        description: jsonResponse.weather[0].description,
        windSpeed: jsonResponse.wind.speed,
      };

      return result;
    } catch (err) {
      throw err;
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setCity("");
      let newInfo = await getWeatherInfo();
      setError(false);
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <Button
          variant="contained"
          size="large"
          type="submit"
          style={{ marginBottom: "20px" }}
        >
          Search
        </Button>
        {error ? <p style={{ color: "red" }}>No such place exists!</p> : null}
      </form>
    </div>
  );
};

export default SearchBox;
