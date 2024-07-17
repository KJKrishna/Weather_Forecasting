
import React from "react";
import './Card.css'

function Card(props) {
  console.log(props);
  return (
    <div className="TodaysHighlights">
      <p className="element">{props.element}</p>
      <h3 className='measurement'>{props.measurement}<sub>{props.unit}</sub></h3>
      <p>{props.children}</p>
    </div>
  );
}

export default Card;
