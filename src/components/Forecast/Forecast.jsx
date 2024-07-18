import React from "react";
import Fetch from './Fetch/Fetch.jsx'
import WeatherCard from './CurrWeather/Curr_Weather.jsx';
import TodaysHighlights from "./TodaysHighlights/TodaysHighlights.jsx";
import Block from "./TodaysHighlights/Block.jsx";
import HourlyWeather from "./Hourly Weather/Hourly.jsx";
import DailyWeather from "./DailyWeather/DailyWeather.jsx";


const Forecast = () => {
    return (
        <div>
            {/* Use any option line as per requirement

            Search with lat and lon

            <Fetch query="currentWeather" lat={21.170240} lon={72.831062}/>
            <Fetch query="forecast" lat={21.170240} lon={72.831062} cnt={7} />
            <Fetch query="airPollution" lat={21.170240} lon={72.831062} />

            */}

            <Fetch city="Surat,Gujarat,India" />
            {/*
            Search with city or state ot country

            <Fetch city="Surat,Gujarat,India"/>
            <Fetch city="Surat,India"/>
            <Fetch city="Surat"/>
                */}

            <Fetch />
            <WeatherCard
                PlaceName="Palakkad"
                Weather="Raining"
                Temperature="42"
                Humidity="20"
                WindSpeed="5"
            />
            <TodaysHighlights />
            <Block />
            <HourlyWeather/>
            <DailyWeather/>

        </div>
    );
};

export default Forecast;
