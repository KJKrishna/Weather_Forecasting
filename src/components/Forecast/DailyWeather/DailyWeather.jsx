
import React from 'react'
import './DailyWeather.css'

const DailyWeather = () => {
  const dummyDailyWeatherData = {
    sevenDays: [
      {
        temperature: {
          day: 34,
          night: 26
        },
        weather: '☁️',
        rain: 20,
      },
      {
        temperature: {
          day: 32,
          night: 28
        },
        weather: '☁️',
        rain: 60,
      },
      {
        temperature: {
          day: 35,
          night: 29
        },
        weather: '🌤️',
        rain: 40,
      },
      {
        temperature: {
          day: 31,
          night: 26
        },
        weather: '🌦️',
        rain: 50,
      },
      {
        temperature: {
          day: 30,
          night: 25
        },
        weather: '⛈️',
        rain: 70,
      },
      {
        temperature: {
          day: 37,
          night: 30
        },
        weather: '☀️',
        rain: 30,
      },
      {
        temperature: {
          day: 32,
          night: 26
        },
        weather: '🌧️',
        rain: 50,
      },
    ]
  }

  const date = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = days[date.getDay()];
  const dayNumber = days.indexOf(currentDay);
  const displayDate = new Date();

  return (
    <div>
      <h3 style={{ textAlign: 'center', margin: '2rem', color:'rgb(154 183 237)' }}>Daily weather updates</h3>
      <div className='box'>
        {dummyDailyWeatherData.sevenDays.map((day, index) => {

          const dayOfWeek = days[(dayNumber + index) % 7];
          displayDate.setDate(date.getDate() + index);

          const formattedDate = displayDate.toDateString().replace(displayDate.getFullYear(), '')

          return (
            <div key={index} className='weather'>
              <p> {formattedDate}</p>
              <hr></hr>
              <p id='days'> {dayOfWeek}</p>
              <p>{day.temperature.day}°C / {day.temperature.night}°C</p>
              <p>Weather: {day.weather}</p>
              <p>Rain💧: {day.rain}%</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DailyWeather


