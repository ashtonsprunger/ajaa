import React from 'react';

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

     let key = "70d415361464c75295b5f22c9849e8c3";
     let lat = props.lat;
     let lon = props.lon;
     let url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;


     // TODO: FETCH HERE

     return(
          <div>
               
          </div>
          );
}

export default Weather;