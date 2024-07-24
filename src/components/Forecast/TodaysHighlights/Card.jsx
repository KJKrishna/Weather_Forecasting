
import React from "react";
import './Card.css'

function Card(props) {
  // console.log(props);
  return (
    <div className="highlightsCard">
      <p className="element" style={{color: '#ffeb3b', fontWeight:'500', fontSize: '130%'}}>{props.element}</p>
      <h3 className='measurement' style={{color:'white'}}>{props.measurement}</h3>
      <p>{props.children}</p>
    </div>
  );
}

export default Card;
