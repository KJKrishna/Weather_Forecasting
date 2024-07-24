import React from 'react';
import './styles.css';

const WeatherCard = ({ currentWeather, city, loading }) => {
    return (
        <>
            <div className="container mt-5">
                <div className='row justify-content-center'>
                    <div className='col-md-8 col-lg-5 WeatherCard text-center' >
                        <h5 className="card-title"> {city.slice(0, city.length - 3)} </h5>
                        {
                            currentWeather &&
                            <>
                                <h6 className="card-subtitle mb-2 text-light"> {currentWeather.weather[0].description} </h6>
                                <img
                                    src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
                                    alt={currentWeather.weather[0].description}
                                />
                                <p className="card-text">{Math.round(currentWeather.main.temp)}°C</p>
                                <p className="card-text">Humidity: {currentWeather.main.humidity}%</p>
                                <p className="card-text">Wind Speed: {currentWeather.wind.speed} m/s</p>
                            </>
                        }
                        {
                            loading &&
                            <>
                                <h6 className="card-subtitle mb-2 text-light"> loading... </h6>
                                <img
                                    src={`http://openweathermap.org/img/wn/01d@2x.png`}
                                    alt='loading...'
                                />
                                <p className="card-text">loading...</p>
                                <p className="card-text">Humidity: loading...</p>
                                <p className="card-text">Wind Speed: loading...</p>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherCard;