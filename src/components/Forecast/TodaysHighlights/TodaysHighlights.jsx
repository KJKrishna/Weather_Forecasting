import React, { useState, useEffect } from 'react';
import Card from './Card';

function TodaysHighlights({ city, loading, currentWeather }) {
  const [data, setData] = useState(null);

  useEffect(()=>{
    if (currentWeather) {
          setData({
            windSpeed: currentWeather.wind.speed,
            uvIndex: currentWeather.main.uvi || 'N/A',
            sunrise: new Date(currentWeather.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            sunset: new Date(currentWeather.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          });
    }
  },[city, currentWeather])

  return (
    <div>
      <div className='TodaysHighlights'>
        <h3 style={{ textAlign: 'center', color: 'rgb(144 193 255)', marginBottom: '3rem' }}>Today's Highlights</h3>
        {
          <div className="cards">
            <Card element='Wind speed' unit='m/s' measurement={data ? data.windSpeed + ' m/s' : loading && 'Loading...'}></Card>
            <Card element='UV Index' unit='UV' measurement={data ? data.uvIndex : loading && 'Loading...'}></Card>
            <Card element='Sunrise' unit='am' measurement={data ? data.sunrise : loading && 'Loading...'}></Card>
            <Card element='Sunset' unit='pm' measurement={data ? data.sunset : loading && 'Loading...'}></Card>
          </div>
        }
      </div>
    </div>
  );
}

export default TodaysHighlights;
