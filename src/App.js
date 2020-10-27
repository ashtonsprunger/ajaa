import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import NasaComponent from "./Components/NasaComponent";
import FoodSecondComponent from "./Components/FoodSecondComponent";
// import WeatherComponent from "./Components/WeatherComponent";

function App() {
  const [lat, setLatitude] = useState("");
  const [lon, setLongitude] = useState("");
  const [temperatureType, setTemperature] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }, []);

  const showPosition = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  const setTemperatureType = (event) => {
    if (event.target.value == "on") {
      setTemperature(true);
      console.log("f");
    }
  };

  return (
    <div className="App">
      <Row>
        <h1>Welcome to ajaa</h1>
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
        <Col xs="4">
          <NasaComponent lat={lat} lon={lon} />
        </Col>
        <Col>{/* <WeatherComponent /> */}</Col>
        <Col xs="4">{/* <WeatherComponent lat={lat} lon={lon} /> */}</Col>
        {/* <Col xs="4"><FoodComponent lat={lat} lon={lon}/></Col>  */}
        <FoodSecondComponent />
      </Row>

      <div>
        <label className="switch">
          <input
            type="checkbox"
            onChange={(e) => setTemperatureType(e)}
            value={temperatureType}
          />
          <span className="slider round" />
        </label>
      </div>
    </div>
  );
}

export default App;
