import React from 'react';


const Food = (props) => {

     let apiKey = "Wy1wADvYUr6cNdNhe7aFJzcWT9Zk9J5hyEbIPuR4";
     let latitude = props.lat;
     let longitude = props.lon;
     let url = `https://developers.zomato.com/api/v2.1/search?lat=${latitude}&lon=${longitude}&appikey=${apiKey}`;

};

fetch("https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&category=dinner&sort=cost", { headers: { "user-key": apiKey } }
)
  .then(response => {
    return response.json();
  })
  .then(json => {
    json.restaurants.forEach(restaurant => {
      console.log(restaurant.restaurant.name);
      console.log(restaurant.restaurant.cuisines)
      console.log(restaurant.restaurant.location.address)
      console.log(restaurant.restaurant.location.city);
    });
  });

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

    return(
        <div>
             <span>
                  <Row>
                       <span>Name: {name}</span>
                  </Row>
                  <Row>
                       <span>Type of Food: {cuisines}</span>
                  </Row>
                  <Row>
                       <span>Address: {address}</span>
                  </Row>
             </span>
        </div>
        );


export default Food;
