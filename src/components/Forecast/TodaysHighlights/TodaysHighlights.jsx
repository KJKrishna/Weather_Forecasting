import React, { useState, useEffect } from 'react';
import Card from './Card';
import './Card.css';

function TodaysHighlights({ loading, currentWeather }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (currentWeather) {
      setData({
        windSpeed: currentWeather.wind.speed,
        uvIndex: currentWeather.main.uvi || 'N/A',
        sunrise: new Date(currentWeather.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sunset: new Date(currentWeather.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      });
    }
  }, [currentWeather])

  return (
    <div>
      <div className='TodaysHighlights'>
        <h3 style={{ textAlign: 'center', color: 'rgb(144 193 255)', marginTop: '3rem' }}>Today's Highlights</h3>
        {
          <div className="down-row">
            <div id="weatherData">
              {
                loading && <Card label='Loading...' value='Loading...' />
              }
              {
                !loading && currentWeather &&
                <>
                  <Card label='Temperature' value={(currentWeather ? Math.round(currentWeather.main.temp_min) + '°C / ' : loading && 'Loading...') + (currentWeather && Math.round(currentWeather.main.temp_max) + '°C')} />
                  <Card label='Feels Like' value={currentWeather ? currentWeather.main.feels_like + '°C' : loading && 'Loading...'} />
                  <Card label='Humidity' value={currentWeather ? currentWeather.main.humidity + '%' : loading && 'Loading...'} />
                  <Card label='Wind speed' value={data ? data.windSpeed + ' m/s' : loading && 'Loading...'} />
                  <Card label='Visibility' value={currentWeather ? currentWeather.visibility / 1000 + ' km' : loading && 'Loading...'} />
                  <Card label='Sunrise' value={data ? data.sunrise : loading && 'Loading...'} />
                  <Card label='Sunset' value={data ? data.sunset : loading && 'Loading...'} />
                  <Card label='Precipitation' value={currentWeather ? (currentWeather.rain ? currentWeather.rain["1h"] : 0) + 'mm' : loading && 'Loading...'} />
                  <Card label='UV Index' value={data ? data.uvIndex : loading && 'Loading...'} />
                </>
              }
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default TodaysHighlights;
