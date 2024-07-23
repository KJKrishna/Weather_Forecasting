import React, { useState, useEffect } from 'react';
import Card from './Card';
import Fetch from '../Fetch/Fetch.jsx';

function TodaysHighlights({ city }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true)
    setData(null)
    try {
      const currentWeather = await Fetch(city, 'currentWeather');
      console.log(currentWeather)
      if (currentWeather) {
        setData({
          windSpeed: currentWeather.wind.speed,
          uvIndex: currentWeather.main.uvi || 'N/A', // OpenWeatherMap current weather data might not include UV index; adjust based on available data.
          sunrise: new Date(currentWeather.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          sunset: new Date(currentWeather.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        });
      }
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [city]);

  return (
    <div>
      <div className='TodaysHighlights'>
        <h3 style={{ textAlign: 'center', color: 'rgb(144 193 255)', marginBottom: '3rem' }}>Today's Highlights</h3>

        {error && <p className="error">{error}</p>}

        {loading && <p className="Loading" style={{ color: 'green', fontSize: '150%', fontWeight: '700', marginTop: '3rem' }}>Loading...</p>}

        {
          data &&
          <div className="cards">
            <Card element='Wind speed' unit='m/s' measurement={data.windSpeed + ' m/s'}></Card>
            <Card element='UV Index' unit='UV' measurement={data.uvIndex}></Card>
            <Card element='Sunrise' unit='am' measurement={data.sunrise}></Card>
            <Card element='Sunset' unit='pm' measurement={data.sunset}></Card>
          </div>
        }
      </div>
    </div>
  );
}

export default TodaysHighlights;
