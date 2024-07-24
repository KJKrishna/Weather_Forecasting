
import React from "react";
import './Card.css'

function Card({label, value}) {
  // console.log(props);
  return (
    <div className="weather-box">
      <p className="weather-label">{label}</p>
      <p className="weather-value">{value}</p>
    </div>
  );
}

export default Card;
