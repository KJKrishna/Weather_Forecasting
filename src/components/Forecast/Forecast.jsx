import React from 'react'
import Fetch from './fetch.js'
import WeatherCard from './Curr_Weather';


const Forecast = () => {
    return (
        <div>
            Forecast components
            <Fetch/>
            <WeatherCard 
                      PlaceName= "Palakkad"
                      Weather= "Raining"
                      Temperature= "42"
                      Humidity= "20"
                      WindSpeed= "5"
                  />
        </div>
    );
};

export default Forecast;