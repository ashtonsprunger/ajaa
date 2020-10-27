import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import NasaComponent from "./Components/NasaComponent";
import FoodComponent from "./Components/FoodComponent";
import WeatherComponent from "./Components/WeatherComponent";

function App() {
  const [lat, setLatitude] = useState("");
  const [lon, setLongitude] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }, []);

  const showPosition = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  return (
    <div style={{ padding: "1em" }} className="App">
      <Row>
        <Col>
          <h1>Welcome to ajaa</h1>
        </Col>
      </Row>
      <Row>
        <Col xs="6">
          <h2>Lat: {lat}</h2>
        </Col>
        <Col xs="6">
          <h2>Lon: {lon}</h2>
        </Col>
      </Row>
      <Row>
        {lat && lon ? (
          <>
            <Col xs="4">
              <NasaComponent lat={lat} lon={lon} />
            </Col>
            <Col id="weather" xs="4">
              <WeatherComponent lat={lat} lon={lon} />
            </Col>
            <Col xs="4">
              <FoodComponent lat={lat} lon={lon} />
            </Col>
          </>
        ) : null}
      </Row>
    </div>
  );
}

export default App;
