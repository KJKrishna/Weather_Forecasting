import React, { useState, useEffect } from "react";
import Fetch from './Fetch/Fetch.jsx'
import WeatherCard from './CurrWeather/Curr_Weather.jsx';
import TodaysHighlights from "./TodaysHighlights/TodaysHighlights.jsx";
import Block from "./TodaysHighlights/Block.jsx";
import HourlyWeather from "./Hourly Weather/Hourly.jsx";
import DailyWeather from "./DailyWeather/DailyWeather.jsx";
import Searchbar from "./Searchbar/Searchbar.js";
import NavBar from "../Home/NavBar.jsx";
import './Forecast.css'


const Forecast = () => {

    const [city, setCity] = useState("Kolkata,IN")
    // console.log(city)
    const [currentWeather, setCurrentWeather] = useState(null);
    const [loading, setLoading] = useState(true)

    const fetchWeatherData = async () => {
        setLoading(true)
        const weatherData = await Fetch(city, "currentWeather");
        setLoading(false)
        if (weatherData) {
            setCurrentWeather(weatherData);
        }
    };
    
    useEffect(() => {
        fetchWeatherData();
        console.log(currentWeather);
    }, [city]);

    /* Use any one way as per given data */
    // const data = Fetch("Palakkad","airPollution");
    //const data = Fetch(null, "currentWeather",10.7681928,76.6521319);

    return (
        <div className="main-forecast-container">
            <NavBar/>
            <Searchbar setCity={(city)=>setCity(city)}/>
            <WeatherCard 
                city={city}
                currentWeather={currentWeather}
                loading={loading}
                />
            <TodaysHighlights
                city={city}
                currentWeather={currentWeather}
                loading={loading}
            />
            <Block
                currentWeather={currentWeather}
                loading={loading}
             />
            <HourlyWeather 
                city={city}
            />
            <DailyWeather/>

        </div>
    );
};

export default Forecast;
