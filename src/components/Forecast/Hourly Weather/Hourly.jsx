import React, { useState, useEffect } from 'react';
import './Hourly.css';

const Hourly = ({ data }) => {
    const [hourlyData, setHourlyData] = useState(null);
    const [loading, setLoading] = useState(true);

    // const apiKey = 'f5f161496d03bfa46738021583236a2c';

    useEffect(() => {
        if(data){
            setHourlyData(data.list.slice(0, 5));
            setLoading(false)
        }
    }, [data]);

    return (
        <div>
            <h2>Hourly Weather Forecast</h2>

            {loading && <p className="Loading" style={{ color: 'blue', fontSize: '150%', fontWeight: '600' }}>Loading...</p>}

            {
                hourlyData &&
                <div className="forecast-container">
                    {hourlyData.map((item, index) => (
                        <div key={index} className="forecast-item">
                            <h4>{new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h4>
                            <img
                                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                                alt={item.weather[0].description}
                            />
                            <p>Temperature: {item.main.temp.toFixed(2)} °C</p>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
};

export default Hourly;

