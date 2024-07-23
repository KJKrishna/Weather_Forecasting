import React, { useState, useEffect } from 'react';
import './Block.css';
import Fetch from '../Fetch/Fetch';

function Block({city}) {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');
    const [Loading, setLoading] = useState(true);

    const apiKey = 'f5f161496d03bfa46738021583236a2c';

    // Function to fetch weather data
    const getWeatherData = async (city) => {
        setWeatherData(null)
        setLoading(true)
        try {
            const data = await Fetch(city, 'currentWeather');
            setWeatherData(data);
            setError('');
            setLoading(false)
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setError('Error fetching weather data. Please try again.');
            setLoading(false)
        }
    };

    useEffect(() => {
        getWeatherData(city);
    }, [city]);

    return (
        <div className="down-row">

            {error && <p className="error">{error}</p>}

            {Loading && <p className="Loading" style={{color:'green',fontSize:'150%',fontWeight:'600'}}>Loading...</p>}

            {weatherData && (
                <div id="weatherData">
                    <div className="weather-box">
                        <p className="weather-label">Humidity</p>
                        <p className="weather-value">{weatherData.main.humidity}%</p>
                    </div>
                    <div className="weather-box">
                        <p className="weather-label">Visibility</p>
                        <p className="weather-value">{weatherData.visibility / 1000} km</p>
                    </div>
                    <div className="weather-box">
                        <p className="weather-label">Feels Like</p>
                        <p className="weather-value">{weatherData.main.feels_like}°C</p>
                    </div>
                    <div className="weather-box">
                        <p className="weather-label">Temperature</p>
                        <p className="weather-value">{Math.round(weatherData.main.temp_min)}°C / {Math.round(weatherData.main.temp_max)}°C</p>
                    </div>
                    <div className="weather-box">
                        <p className="weather-label">Precipitation</p>
                        <p className="weather-value">{weatherData.rain ? weatherData.rain["1h"] : 0} mm</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Block;
