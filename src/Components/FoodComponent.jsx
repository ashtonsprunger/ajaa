import React from 'react';


const Food = (props) => {

     let apiKey = "Wy1wADvYUr6cNdNhe7aFJzcWT9Zk9J5hyEbIPuR4";
     let latitude = props.latitude;
     let longitude = props.longitude;
     let url = `https://developers.zomato.com/api/v2.1/search?lat=${latitude}&lon=${longitude}&appikey=${apiKey}`;

};

getLocation();
 
 navigator.geolocation.getCurrentPosition (
        (position) => {
            console.log("Latitude is :", position .coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })
            this.Food();
        },
        function(error) {
            console.error("Error code =" + error.code + "-" + error.message);
        },
        {
            enableHighAccuracy: false,
            timeout: 10000
        }

    );



export default Food;
