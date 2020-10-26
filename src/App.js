import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React, {useState, useEffect} from 'react'
import NasaComponent from "./Components/NasaComponent";

unction App() {
  
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [temperatureType, setTemperature] = useState('');
  useEffect(() => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition)
    }
 }, [])

  const showPosition = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
    
  }

  const setTemperatureType = (event) => {
    if(event.target.value == 'on') {
      setTemperature(true);
      console.log('f')
    }
  }


return (
    <div className="App">
      <h1>{latitude}</h1>
      <h1>{longitude}</h1>
      <h1>{temperatureType}</h1>
      <div>
      <label className="switch">
        <input type="checkbox"  onChange={(e) => setTemperatureType(e)} value={temperatureType}/>
        <span className="slider round" />
        
      </label>
      </div>
    </div>
  );
}

export default App;
