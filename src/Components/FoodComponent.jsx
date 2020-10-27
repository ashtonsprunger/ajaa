import React from 'react';


/*const Food = (props) => {

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
        );*/


        class App extends Component {
            componentDidMount() {
              navigator.geolocation.getCurrentPosition(this.geolocationSuccess, this.geolocationError);
            }
          
            geolocationSuccess = (position) => {
              let latitude  = position.coords.latitude;
              let longitude = position.coords.longitude;
              fetchNearbyRestaurants(latitude, longitude);
              initAutoComplete();
            }
          
            geolocationError = () => {
              this.initAutoComplete();
            }
          
            fetchNearbyRestaurants = (latitude, longitude) => {
              let headers = new Headers();
              headers.append('Content-Type', 'application/json');
              headers.append('user-key', 'Wy1wADvYUr6cNdNhe7aFJzcWT9Zk9J5hyEbIPuR4');
              let options = {
                method: 'GET',
                headers: headers
              };
              let url = "https://developers.zomato.com/api/v2.1/geocode?lat=" + latitude + "&lon=" + longitude;
              window.fetch(url, options)
              .then(response => response.json())
              .then(data => {
                this.extractLocations(data.nearby_restaurants);
                this.extractRestaurantDetails(data.nearby_restaurants);
              })
            }
          
            extractLocations = (restaurants) => {
              this.listOfLocations = [];
              this.restautantDetails = [];
              for(let restaurant of restaurants) {
                this.listOfLocations.push(restaurant.restaurant.location);
              }
            }
          
        
            extractRestaurantDetails = (restaurants) => {
              for(let restaurant of restaurants) {
                let {
                  name, cuisines, has_online_delivery,
                  is_delivering_now, has_table_booking,
                  book_url, order_url,
                  price_range, user_rating,
                  url, thumb, location, average_cost_for_two,
                  menu_url
                } = restaurant.restaurant;
                this.restautantDetails.push({
                  name: name, cuisines: cuisines,
                  has_online_delivery: has_online_delivery,
                  is_delivering_now: is_delivering_now,
                  has_table_booking: has_table_booking,
                  book_url: book_url, order_url: order_url,
                  price_range: price_range, user_rating: user_rating,
                  url: url, thumb: thumb, location: location,
                  average_cost_for_two: average_cost_for_two,
                  show_order_url: (has_online_delivery && is_delivering_now),
                  menu_url: menu_url
                });
              }
            }
          
            render() {
              return (
                <div className="Zomato">
                  <div className="Food-header">
                    <h2>Surrounding Restaurants</h2>
                  </div>
                  </div>
              );
            }
          }


export default Food;
