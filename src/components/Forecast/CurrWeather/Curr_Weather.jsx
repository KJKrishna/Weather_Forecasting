import React, { useEffect, useState } from 'react';
import './styles.css';

const WeatherCard = ({ currentWeather, city }) => {
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setLoading(true)
    },[city])
    useEffect(()=>{
        if(currentWeather){
            setLoading(false)
        }
    },[currentWeather])
    return (
        <>
            <div className="container mt-5">
                <div className='row justify-content-center'>
                    <div className='col-md-8 col-lg-5 WeatherCard text-center' >
                        <h5 className="card-title"> {city.slice(0, city.length - 3)} </h5>
                        <h6 className="card-subtitle mb-2 text-light"> {loading ? 'loading...' : (currentWeather ? currentWeather.weather[0].description : 'N/A')} </h6>
                        <img
                            src={`http://openweathermap.org/img/wn/${loading ? 'loading...' : (currentWeather ? currentWeather.weather[0].icon : 'N/A')}@2x.png`}
                            alt={loading ? 'loading...' : (currentWeather ? currentWeather.weather[0].description : 'N/A')}
                        />
                        <p className="card-text">{loading ? 'loading...' : (currentWeather ? Math.round(currentWeather.main.temp) + '°C' : 'N/A')}</p>
                        <p className="card-text">Humidity: {loading ? 'loading...' : (currentWeather ? currentWeather.main.humidity + '%' : 'N/A')}</p>
                        <p className="card-text">Wind Speed: {loading ? 'loading...' : (currentWeather ? currentWeather.wind.speed + 'm/s' : 'N/A')} </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherCard;