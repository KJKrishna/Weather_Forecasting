import React, { useState, useEffect } from 'react';
import './Block.css';

function Block({currentWeather, loading}) {

    const apiKey = 'f5f161496d03bfa46738021583236a2c';

    return (
        <div className="down-row">
                <div id="weatherData">
                    <div className="weather-box">
                        <p className="weather-label">Humidity</p>
                        <p className="weather-value">{currentWeather ? currentWeather.main.humidity + '%' : loading && 'Loading...'}</p>
                    </div>
                    <div className="weather-box">
                        <p className="weather-label">Visibility</p>
                        <p className="weather-value">{currentWeather ? currentWeather.visibility / 1000 + ' km' : loading && 'Loading...'}</p>
                    </div>
                    <div className="weather-box">
                        <p className="weather-label">Feels Like</p>
                        <p className="weather-value">{currentWeather ? currentWeather.main.feels_like + '°C' : loading && 'Loading...'}</p>
                    </div>
                    <div className="weather-box">
                        <p className="weather-label">Temperature</p>
                        <p className="weather-value">{currentWeather ? Math.round(currentWeather.main.temp_min) + '°C /' : loading && 'Loading...'} {currentWeather && Math.round(currentWeather.main.temp_max) + '°C'}</p>
                    </div>
                    <div className="weather-box">
                        <p className="weather-label">Precipitation</p>
                        <p className="weather-value">{currentWeather ? (currentWeather.rain ? currentWeather.rain["1h"] : 0) + 'mm' : loading && 'Loading...'}</p>
                    </div>
                </div> 
        </div>
    );
}

export default Block;
