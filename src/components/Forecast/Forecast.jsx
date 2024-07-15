import React from "react";

function TodaysHighlights(props) {
  console.log(props);
  return (
    <div className="TodaysHighlights">
      <p className="element">{props.element}</p>
      <h3 className='measurement'>{props.measurement}<sub>{props.unit}</sub></h3>
      
      <p>{props.children}</p>
    </div>
  );
}

export default TodaysHighlights;
import React from 'react'
import Fetch from './fetch.js'
import WeatherCard from './Curr_Weather';


const Forecast = () => {
    return (
        <div>
            Forecast components

            {/* Use any option line as per requirement

            Search with lat and lon

            <Fetch query="currentWeather" lat={21.170240} lon={72.831062}/>
            <Fetch query="forecast" lat={21.170240} lon={72.831062} cnt={7} />
            <Fetch query="airPollution" lat={21.170240} lon={72.831062} />

            */}

            <Fetch city="Surat,Gujarat,India"/>
            {/*
            Search with city or state ot country

            <Fetch city="Surat,Gujarat,India"/>
            <Fetch city="Surat,India"/>
            <Fetch city="Surat"/>
                */}

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
