import React, { useState, useEffect } from 'react';

// API key: 70d415361464c75295b5f22c9849e8c3
// let lat = ?
// let long = ?

// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// api.openweathermap.org/data/2.5/weather?lat=39.770639&lon=-86.285116&appid=70d415361464c75295b5f22c9849e8c3

// Your location coordinates:
// Weather:
// Description:
// Temperature:
// Feels like:
// Air pressure:
// Humidity:
// Wind speed:

const Weather = (props) => {

     const key = "70d415361464c75295b5f22c9849e8c3";
     let lat = props.lat;
     let lon = props.lon;
     let url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;

     const [ weather, setWeather        ] = useState('');
     const [ description, setDescription] = useState('');
     const [ temperature, setTemperature] = useState('');
     const [ feels, setFeels            ] = useState('');
     const [ pressure, setPressure      ] = useState('');
     const [ humidity, setHumidity      ] = useState('');
     const [ windSpeed, setWindSpeed    ] = useState('');

     const weather = () = {
          fetch(url).then((res) => {
               setWeather(res.weather.main)
               setDescription(res.weather.description)
          })
     }

     return(
          <div>
               
          </div>
          );
}

export default Weather;