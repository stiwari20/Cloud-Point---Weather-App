import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

const InfoBox = ({ info }) => {
  const RAIN_URL =
    "https://images.unsplash.com/photo-1520699697851-3dc68aa3a474?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";
  const HOT_URL =
    "https://media.istockphoto.com/id/921341724/photo/sunrise-in-the-park.webp?b=1&s=612x612&w=0&k=20&c=gaEOpQYmZNoZGwxY2wEyjmszagBF6-i1UpJUnNoIPtg=";
  const COLD_URL =
    "https://plus.unsplash.com/premium_photo-1663090593977-9923cc536f3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c25vd3xlbnwwfHwwfHx8MA%3D%3D";

  return (
    <>
      <div>
        {info.city && (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={
                info.temp < 10
                  ? COLD_URL
                  : info.humidity > 70
                  ? RAIN_URL
                  : HOT_URL
              }
              title="weather image"
            />
            <CardContent className="info">
              <Typography gutterBottom variant="h5" component="div">
                <strong>{info.city}</strong> &nbsp;
                {info.temp < 10 ? (
                  <AcUnitIcon />
                ) : info.humidity > 70 ? (
                  <ThunderstormIcon />
                ) : (
                  <WbSunnyIcon />
                )}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component={"span"}
              >
                <p>Temperature: {info.temp}&deg;C</p>
                <p>Min Temp: {info.minTemp}&deg;C</p>
                <p>Max Temp: {info.maxTemp}&deg;C</p>
                <p>Feels like: {info.feelsLike}&deg;C</p>
                <p>Humidity: {info.humidity}%</p>
                <p>Wind Speed: {info.windSpeed}Km/hr</p>
                <p>
                  The weather can be described as <i>{info.description}</i>
                </p>
              </Typography>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
};

export default InfoBox;
