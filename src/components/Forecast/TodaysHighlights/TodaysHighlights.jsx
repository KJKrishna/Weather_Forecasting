
import React from 'react';
import Card from './Card';

function TodaysHighlights() {
  return (
    <div className='TodaysHighlights'>
      <h3 style={{textAlign:'center', margin:'2rem', color:'#3de7ba'}}>Today's Highlights</h3>
    <div className="cards">
      <Card element='Wind speed' unit='m/s' measurement='5.3'></Card>
      <Card element='UV Index' unit='UV' measurement='1'></Card>
      {/* <div className="SunriseSunset">
      <div style={{display:'inline-block'}}><p>Sunrise & Sunset</p><p>sunrise: 6:30AM</p></div>
      <div style={{display:'inline-block',paddingLeft:'10px'}}><p>sunset: 7:02PM</p></div>
    </div> */}
      <Card element='Sunrize' unit='am' measurement='6:09'></Card>
      <Card element='Sunset' unit='pm' measurement='7:00'></Card>
    </div>
    </div>
  );
}

export default TodaysHighlights;
