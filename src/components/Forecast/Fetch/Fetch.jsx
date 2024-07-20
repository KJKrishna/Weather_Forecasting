import React from 'react';

const key = 'd0ee7c48bc16012bdc03275e7eb7e6e3';

const fetchData = async (url) => {
    //console.log("Fetching...");
    let raw = await fetch(url);
    if (raw.status == 200) {
        let data = await raw.json();
        // console.log(data);
        return data;
    }

    else {
        console.log("An error occured while fetching data.");
    }
}

const Fetch = async (city, query = undefined, lat = undefined, lon = undefined, cnt = 5) => { 

    const geo = async () => {
        let search = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${key}`;
        let info = await fetchData(search);
        return info;
    }
    

    const pos = async (query, lat, lon, cnt) => {

        const BASEURL = (type) => {
            return `https://api.openweathermap.org/data/2.5/${type}?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
        }
        
        let currentWeather = BASEURL('weather');
        let forecast = BASEURL('forecast') + `&cnt=${cnt}`;
        let airPollution = BASEURL('air_pollution');

        let url;

        switch (query) {
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
        return info;
        
    }
    
    if (city){
        let info = await geo();
        let x = await info[0].lat;
        let y = await info[0].lon;
        //console.log(x,y);
        let data = await pos(query, x, y, cnt);
        return data;
    }
    else if (lat && lon){
        let data = await pos(query, lat, lon, cnt);
        return data;
    }
    
};

export default Fetch;