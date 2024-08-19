import React, { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

const Weather = () => {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "",
    temp: "",
    maxTemp: "",
    minTemp: "",
    humidity: "",
    feelsLike: "",
    description: "",
    windSpeed: "",
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="container">
      <h1>Cloud Point</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
};

export default Weather;
