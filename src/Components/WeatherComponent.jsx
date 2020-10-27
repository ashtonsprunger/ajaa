import React, { useState, useEffect } from 'react';
import {
     Col,
     Row
} from 'reactstrap';

// API key: 70d415361464c75295b5f22c9849e8c3
// let lat = ?
// let long = ?

// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// api.openweathermap.org/data/2.5/weather?lat=39.770639&lon=-86.285116&appid=70d415361464c75295b5f22c9849e8c3

const Weather = (props) => {

     const key = props.weather_key;
     let lat = props.lat;
     let lon = props.lon;
     let url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;

     const [ description, setDescription] = useState('');
     const [ temperature, setTemperature] = useState('');
     const [ feels, setFeels            ] = useState('');
     const [ pressure, setPressure      ] = useState('');
     const [ humidity, setHumidity      ] = useState('');
     const [ windSpeed, setWindSpeed    ] = useState('');

     const getWeather = () => {
          fetch(url).then((res) => {
               setDescription(res.weather.description);
               setTemperature((((res.main.temp - 273.15)*9) / 5) + 32);
               setFeels(res.main.feels_like);
               setPressure(res.main.pressure);
               setHumidity(res.main.humidity);
               setWindSpeed(res.wind.windSpeed);
          })
     }

     const fToC = (temp) => {
          let c = temp - 32 * 5/9
     }

     useEffect(getWeather, []);

     return(
          <>
               {/* switch goes here */}
               <Row>
                    <span>Current weather: {description}</span>
               </Row>
               <Row>
                    <span>Temperature: {temperature}</span>
               </Row>
               <Row>
                    <span>Feels like: {feels}</span>
               </Row>
               <Row>
                    <span>Air pressure: {pressure}</span>
               </Row>
               <Row>
                    <span>Humidity: {humidity}</span>
               </Row>
               <Row>
                    <span>Wind speed: {windSpeed}</span>
               </Row>
               </>
          );
}

export default Weather;