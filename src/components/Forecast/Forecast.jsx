import React, { useState } from "react";
import Fetch from './Fetch/Fetch.jsx'
import WeatherCard from './CurrWeather/Curr_Weather.jsx';
import TodaysHighlights from "./TodaysHighlights/TodaysHighlights.jsx";
import Block from "./TodaysHighlights/Block.jsx";
import HourlyWeather from "./Hourly Weather/Hourly.jsx";
import DailyWeather from "./DailyWeather/DailyWeather.jsx";
import Searchbar from "./Searchbar/Searchbar.js";


const Forecast = () => {

    const [city, setCity] = useState("Kolkata,IN")
    // console.log(city)

    /* Use any one way as per given data */
    // const data = Fetch("Palakkad","airPollution");
    //const data = Fetch(null, "currentWeather",10.7681928,76.6521319);

    return (
        <div>
            <Searchbar setCity={(city)=>setCity(city)}/>
            <WeatherCard 
                      PlaceName= {city.slice(0,city.length - 3)}
                      Weather= "Raining"
                      Temperature= "42"
                      Humidity= "20"
                      WindSpeed= "5"
                  />
            <TodaysHighlights />
            <Block />
            <HourlyWeather city={city}/>
            <DailyWeather/>

        </div>
    );
};

export default Forecast;
