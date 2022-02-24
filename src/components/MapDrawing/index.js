import React from 'react';
import "./styles.scss";
import hotelImage from "./../../images/hotel.jpg";

function MapDrawing() {
  return (
    <div className="drawing">
      <img
        className="image"
        src={hotelImage}
        width="1024"
        height="715"
        alt=""
      />
    </div>
  );
}

export default MapDrawing;