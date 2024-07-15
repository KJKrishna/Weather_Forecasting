
import React from "react";

function TodaysHighlights(props) {
  console.log(props);
  return (
    <div className="TodaysHighlights">
      <p className="element">{props.element}</p>
      <h3 className='measurement'>{props.measurement}<sub>{props.unit}</sub></h3>
      
      <p>{props.children}</p>
    </div>
  );
}

export default TodaysHighlights;
