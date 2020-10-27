import React, { useState, useEffect } from "react";
import { Button, Col, Row } from "reactstrap";

const Weather = (props) => {
  console.log(props.lat, props.lon);

  const [description, setDescription] = useState("");
  const [temperature, setTemperature] = useState("");
  const [pressure, setPressure] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [units, setUnits] = useState("units=imperial");
  const [butText, setButText] = useState("Switch to Metric");

  const key = "70d415361464c75295b5f22c9849e8c3";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&appid=${key}&${units}`;

  const getWeather = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDescription(data.weather[0].description);
        setTemperature(data.main.temp);
        setPressure(data.main.pressure);
        setHumidity(data.main.humidity);
        setWindSpeed(data.wind.speed);
      });
  };

  useEffect(getWeather, [units]);

  const changeUnits = (e) => {
    if (units == "units=metric") {
      setUnits("units=imperial");
      setButText("Switch to Metric");
    } else {
      setUnits("units=metric");
      setButText("Switch to Imperial");
    }
  };

  return (
    <>
      <h3>Current Weather</h3>
      <Row id="head-row">
        <Col>Set Imperial (default) or Metric:</Col>
        <Col>
          <div>
            <Button onClick={(e) => changeUnits(e)}>{butText}</Button>
          </div>
        </Col>
      </Row>
      <Row className="weather-row">
        <span>
          <strong>Current weather: </strong>
          {description}
        </span>
      </Row>
      <Row>
        <span>
          <strong>Temperature: </strong>
          {temperature}
        </span>
      </Row>
      <Row>
        <span>
          <strong>Air pressure: </strong>
          {pressure}
        </span>
      </Row>
      <Row>
        <span>
          <strong>Humidity: </strong>
          {humidity}%
        </span>
      </Row>
      <Row>
        <span>
          <strong>Wind speed: </strong>
          {windSpeed}
        </span>
      </Row>
    </>
  );
};

export default Weather;
