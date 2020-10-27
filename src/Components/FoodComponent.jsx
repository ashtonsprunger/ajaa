import React, { useState, useEffect } from "react";
import {Table} from 'reactstrap';


const FoodComponent = (props) => {
  let apiKey = "61e3f579285d6f2b7d90dac41a2fdfd9";
  let lat = props.lat;
  let lon = props.lon;
  const [restNames, setRestNames] = useState([]);
 
  useEffect(() => {
    fetch(
      `https://developers.zomato.com/api/v2.1/geocode?lat=${lat}&lon=${lon}`,
      { headers: { "user-key": apiKey,
        "Accept" : "application/json"} }
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json)
        json.nearby_restaurants.forEach((restaurant) => {
            setRestNames(restNames => [...restNames, restaurant.restaurant]);
           
        });
      });
    }, []);
    const restMapper = () => {
      return restNames.map((restaurant, index) => {
        return (
         
         
              <tbody>
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{restaurant.name}</td>
                  <td>{restaurant.cuisines}</td>
                </tr>
              </tbody>
        
        )
      })
    }
  return(
      <div>
        <h1>Restuarants Near You!</h1>
        <Table dark>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
              {restMapper()}
              </tbody>
              </Table>
        </div>
  );
};
export default FoodComponent;
