import React, { useEffect } from "react";

const FoodSecondComponent = (props) => {
  let apiKey = "61e3f579285d6f2b7d90dac41a2fdfd9";

  useEffect(() => {
    fetch(
      "https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&category=dinner&sort=cost",
      { headers: { "user-key": apiKey } }
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        json.restaurants.forEach((restaurant) => {
          console.log(restaurant.restaurant.name);
          console.log(restaurant.restaurant.cuisines);
          console.log(restaurant.restaurant.location.address);
          console.log(restaurant.restaurant.location.city);
        });
      });
  }, []);
  return <>Hello</>;
};

export default FoodSecondComponent;
