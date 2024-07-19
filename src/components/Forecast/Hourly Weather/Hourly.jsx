import React, { useState, useEffect } from 'react';
import './Hourly.css';
import Fetch from '../Fetch/Fetch.jsx';

const Hourly = ({ city }) => {
    const [hourlyData, setHourlyData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const apiKey = 'f5f161496d03bfa46738021583236a2c'; // Replace with your OpenWeather API key
    city = 'Palakkad';

    useEffect(() => {
        const fetchHourlyWeather = async () => {
            if (!city) {
                setError("City name is required.");
                setLoading(false);
                return;
            }

            try {
                const data = await Fetch(city,'forecast');
                setHourlyData(data.list.slice(0, 5)); // Get only the first 5 forecasts
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchHourlyWeather();
    }, [city, apiKey]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Hourly Weather Forecast</h2>
            <div className="forecast-container">
                {hourlyData.map((item, index) => (
                    <div key={index} className="forecast-item">
                        <h4>{new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h4>
                        <img 
                            src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} 
                            alt={item.weather[0].description} 
                        />
                        <p>Temperature: {item.main.temp} °C</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hourly;

