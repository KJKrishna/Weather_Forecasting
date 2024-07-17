
import React from 'react';
import TodaysHighlights from './components/Forecast/Forecast';

function App() {
  return (
    <div>
     <h3>Today's Highlights</h3>

    <TodaysHighlights element='Wind speed'unit='kmph'measurement='7.9'></TodaysHighlights> 
    <TodaysHighlights element='UV Index' unit ='UV'measurement='5.50'></TodaysHighlights> 
     {/* <div className="SunriseSunset">
      <div style={{display:'inline-block'}}><p>Sunrise & Sunset</p><p>sunrise: 6:30AM</p></div>
      <div style={{display:'inline-block',paddingLeft:'10px'}}><p>sunset: 7:02PM</p></div>
    </div> */}
    <TodaysHighlights element='Sunrize'unit='am'measurement='6:30'></TodaysHighlights>
    <TodaysHighlights element='Sunset'unit='pm'measurement='7:00'></TodaysHighlights>

    </div>
  );
}

export default App;
