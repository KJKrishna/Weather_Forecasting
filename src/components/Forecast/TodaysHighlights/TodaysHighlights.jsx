import React, { useState, useEffect } from 'react';
import Card from './Card';
import Fetch from '../Fetch/Fetch.jsx';

function TodaysHighlights({city}) {
  const [data, setData] = useState({
    windSpeed: null,
    uvIndex: null,
    sunrise: null,
    sunset: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
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
    fetchData();
  }, [city]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className='TodaysHighlights'>
      <h3 style={{textAlign: 'center', color: 'rgb(144 193 255)', marginBottom: '3rem'}}>Today's Highlights</h3>
      <div className="cards">
        <Card element='Wind speed' unit='m/s' measurement={data.windSpeed + ' m/s'}></Card>
        <Card element='UV Index' unit='UV' measurement={data.uvIndex}></Card>
        <Card element='Sunrise' unit='am' measurement={data.sunrise}></Card>
        <Card element='Sunset' unit='pm' measurement={data.sunset}></Card>
      </div>
    </div>
  );
}

export default TodaysHighlights;
