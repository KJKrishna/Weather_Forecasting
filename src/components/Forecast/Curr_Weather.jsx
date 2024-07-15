import React from 'react';
import './styles.css';
import Dummy from './assets/10d.png'

const WeatherCard = ({PlaceName, Weather, Temperature, Humidity, WindSpeed}) => {
    return (
        <div className = "container mt-5">
            <div className='row justify-content-center'>
                <div className='col-md-8 col-lg-5 WeatherCard text-center' >
                    <h5 className="card-title"> {PlaceName} </h5>
                    <h6 className="card-subtitle mb-2 text-light"> {Weather} </h6>
                    <img src={Dummy} alt="Weather Icon" />
                    <p className="card-text">{Temperature}°C</p>
                    <p className="card-text">Humidity: {Humidity}</p>
                    <p className="card-text">Wind Speed: {WindSpeed}</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard;