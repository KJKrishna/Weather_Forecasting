
import React from 'react'
import './Daily-Weather.css'

const App=() =>{
  let d;
  let n;
  let e;
  let r;

  let city = '' 

  const dummyDailyWeatherData={
    sevenDays:[
      {
        temperature:{
          day : d,
          night:n
        },
        weather:e,
        rain:r,
      },
      {
        temperature:{
          day : 32,
          night:28
        },
        weather:'☁️',
        rain:60,
      },
      {
        temperature:{
          day : 35,
          night:29
        },
        weather:'🌤️',
        rain:40,
      },
      {
        temperature:{
          day : 31,
          night:26
        },
        weather:'🌦️',
        rain:50,
      },
      {
        temperature:{
          day : 30,
          night:25
        },
        weather:'⛈️',
        rain:70,
      },
      {
        temperature:{
          day : 37,
          night:30
        },
        weather:'☀️',
        rain:30,
      },
      {
        temperature:{
          day : 32,
          night:26
        },
        weather:'🌧️',
        rain:50,
      },
    ]
  }



  const date = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = days[date.getDay()];
  const dayNumber = days.indexOf(currentDay);
  const displayDate = new Date();
  

  const display = (data) => (
    <div>
      <h3>Daily weather updates for </h3>
      <div className='box'>
        {data.sevenDays.map((day, index) => {
          
          const dayOfWeek = days[(dayNumber + index) % 7]; 
          displayDate.setDate(date.getDate() + index); 
  
          const formattedDate = displayDate.toDateString().replace(displayDate.getFullYear(),'')

  
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


  return (<>{display(dummyDailyWeatherData)}</>)
};

export default App

