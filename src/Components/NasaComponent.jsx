import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

const NasaComponent = (props) => {
  const [imageUrl, setImageUrl] = useState(
    "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
  );
  //   const [latitude, setLatitude] = useState(props.latitude);
  //   const [longitude, setLongitude] = useState(props.longitude);
  const apiKey = "Wy1wADvYUr6cNdNhe7aFJzcWT9Zk9J5hyEbIPuR4";
  const baseUrl = "https://api.nasa.gov/planetary/earth/imagery";

  let url = `${baseUrl}?lon=${props.lon}&lat=${
    props.lat
  }&api_key=${apiKey}&dim=${0.03}`;

  const getImage = () => {
    fetch(url).then((response) => setImageUrl(response.url));
  };

  useEffect(getImage, []);

  return (
    <div style={{ borderRadius: "50px", width: "500px" }}>
      <img
        style={{ width: "inherit", height: "inherit", borderRadius: "50px" }}
        src={imageUrl}
        alt="location image"
      />
    </div>
  );
};

export default NasaComponent;
