import React, { Component } from 'react';

// query = weather, forecast, air_pollution, reverse, direct (for currentWeather, forecast, airPollution, reverseGeo, geo)
const formURL = {
    currentWeather(lat, lon, key){
        return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
    },
    forecast(lat, lon, key, cnt=5){
        return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=${cnt}&appid=${key}`
    },
    airPollution(lat, lon, key){
        return `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${key}`;
    }
}

export class Fetch extends Component{ 
    
    async componentDidMount(){
        const key = 'd0ee7c48bc16012bdc03275e7eb7e6e3';

        let url = formURL.forecast(21.170240,72.831062,key);    // to use this for your component, change this line as "formmURL.(name of what you want to fetch (refer the code above to get the names))(parameters as per that call)".
        
        //console.log("Fetching...");
        let raw = await fetch(url);
        if (raw.status == 200){
            let data = await raw.json();
            console.log(data);
            return data;    // to proceed, use "data.(the part of response you want to use)"
        }
        else{
            console.log("An error occured while fetching data.");
        }
    }
    render(){
        return (
            <div>
            </div>
        );
    }
};

export default Fetch