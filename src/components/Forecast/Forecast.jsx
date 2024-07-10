import React from 'react'
import Fetch from './fetch.js'


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
        </div>
    );
};

export default Forecast;