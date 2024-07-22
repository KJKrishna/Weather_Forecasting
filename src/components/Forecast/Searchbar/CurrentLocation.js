import { useEffect, useState } from 'react'

// `http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={API key}`

const CurrentLocation = () => {
    const API_key = 'e60a9ebecf05d0e91736a8dd4539a026'
    const [currentlocation, setCurrentLocation] = useState("")
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            const { latitude, longitude } = pos.coords;
            // console.log(latitude,longitude);
            const CurrentLocationAPI = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_key}`;
            fetch(CurrentLocationAPI)
                .then(res => res.json())
                .then(data => setCurrentLocation(data[0].name));
            // console.log(currentlocation);

        });
    }, [])
    return currentlocation
}

export default CurrentLocation
