import React from 'react'
import Fetch from './fetch.js'
import WeatherCard from './Curr_Weather';


const Forecast = () => {

    /* Use any one way as per given data */
    const data = Fetch("Palakkad","airPollution");
    //const data = Fetch(null, "currentWeather",10.7681928,76.6521319);
    

    
    

    return (
        <div>
            Forecast components
            
 
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