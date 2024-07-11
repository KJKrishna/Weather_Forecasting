import React from 'react';

const key = 'd0ee7c48bc16012bdc03275e7eb7e6e3';

const fetchData = async(url) => {
    //console.log("Fetching...");
    let raw = await fetch(url);
    if (raw.status == 200) {
        let data = await raw.json();
        console.log(data);
        return data;
    }

    else {
        console.log("An error occured while fetching data.");
    }
}

const Fetch = ({query, lat, lon, cnt = 5, city}) => { 

    const geo = () => {
        let search = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${key}`;
        let info =  fetchData(search);
    }
    
    
    const BASEURL = (type) => {
        return `https://api.openweathermap.org/data/2.5/${type}?lat=${lat}&lon=${lon}&appid=${key}`;
    }

    const pos = () => {
        let currentWeather = BASEURL('weather');
        let forecast = BASEURL('forecast') + `&cnt=${cnt}`;
        let airPollution = BASEURL('air_pollution');

        let url;
        
        switch (query){
            case 'currentWeather':
                url = currentWeather;
                break;
            case 'forecast':
                url = forecast;
                break;
            case 'airPollution':
                url = airPollution;
                break;
            default:
                console.log("Query not found.")
                return;
        }
        let info = fetchData(url);
    }
    
    if (city){
        geo();
    }
    else if (lat){
        pos();
    }
};

export default Fetch;