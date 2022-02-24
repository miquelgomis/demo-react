import React from 'react';
import "./styles.scss";
import Marker from "./../Marker";
import hotelImage from "./../../images/hotel.jpg";

function Map() {
  return (
    <div className="resort">
      <img
        className="image"
        src={hotelImage}
        width="1024"
        height="715"
        alt=""
      />

      <svg
        className="polygon polygon-1"
        width="1024"
        height="715"
        viewBox="0 0 1024 715"
      >
        <polygon points="100,10 40,78 10,78 160,198" />
        <polygon points="300,50 80,178 80,378 290,400" />
      </svg>

      <Marker markerID="marker-1" x={20} y={60} />
      <Marker markerID="marker-2" x={40} y={80} />
      <Marker markerID="marker-3" x={80} y={70} />
    </div>
  );
}

export default Map;