
import React from 'react';
import "./styles.scss";

function Marker(props) {
  return (
    <label htmlFor={props.markerId} className="marker" style={{top: props.y + "%", left: props.x + "%"}}>
        <input type="checkbox" name={props.markerId} id={props.markerId} value="1" />
    </label>
  );
}

export default Marker;