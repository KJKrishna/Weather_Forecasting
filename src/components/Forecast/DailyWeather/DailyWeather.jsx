import React, { useState, useEffect } from 'react';
import './DailyWeather.css';
import Fetch from '../Fetch/Fetch.jsx';

const DailyWeather = () => {

  
  const [weatherData, setWeatherData] = useState([])


  const apiKey = `8d50132a8b2d5d465a7e024343d56756`;
  const city = 'Palakkad';

  useEffect(()=>{
    const fetchDailyWeather = async ()=>{
      const data = await Fetch(city,'forecast')
      setWeatherData(data.list)
    }

    fetchDailyWeather()
  }, [city, apiKey]);

  const date = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = days[date.getDay()];
  const dayNumber = days.indexOf(currentDay);
  const displayDate = new Date();
  const iconToEmoji = {
    '01d': '☀️', 
    '01n': '🌙', 
    '02d': '🌤️', 
    '02n': '🌑', 
    '03d': '☁️', 
    '03n': '☁️', 
    '04d': '☁️', 
    '04n': '☁️', 
    '09d': '🌧️', 
    '09n': '🌧️', 
    '10d': '🌦️', 
    '10n': '🌦️', 
    '11d': '⛈️', 
    '11n': '⛈️', 
    '13d': '❄️', 
    '13n': '❄️', 
    '50d': '🌫️', 
    '50n': '🌫️', 
  };
  const indicesToShow = [0, 8, 16, 24, 32]

  return (
    <div>
      <h3 style={{ textAlign: 'center', margin: '2rem', color: '#4cafa2' }}>Daily weather updates</h3>
      <div className='box'>
      {weatherData.length > 0 && indicesToShow.map((index) => {
          const day = weatherData[index];
          const dayOfWeek = days[(dayNumber + (index / 8)) % 7];
          displayDate.setDate(date.getDate() + (index / 8));
          const formattedDate = displayDate.toDateString().replace(displayDate.getFullYear(), '');

          return (
            <div key={index} className='weather'>
              <p style={{ color: 'tomato' }}> {formattedDate}</p>
              <hr></hr>
              <p id='days' style={{ color: '#197468' }}> {dayOfWeek}</p>
              <p>{day.main.feels_like.toFixed(0)}°C / {day.main.temp.toFixed(0)}°C</p>
              <p>Weather: {iconToEmoji[day.weather[0].icon]}</p>
              <p>Humidity🍃: {day.main.humidity}%</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DailyWeather;
