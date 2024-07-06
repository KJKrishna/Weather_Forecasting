import React from 'react';
import WeatherCard from './Curr_Weather';

const Forecast = () => {
    return (
        <WeatherCard 
                PlaceName= "Palakkad"
                Weather= "Raining"
                Temperature= "42"
                Humidity= "20"
                WindSpeed= "5"
            />
    )
}

export default Forecast;