import axios from "axios";


export default function useWeather() {

    const fetchWeather = async (city: string, country: string) => {
        const apiKey = import.meta.env.VITE_API_KEY;
        try{
            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=${apiKey}`;
            const geoResponse = await axios.get(geoUrl);
            const { lat, lon } = geoResponse.data[0];
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
            const weatherResponse = await axios.get(weatherUrl);
            console.log('Weather data:', weatherResponse.data);
            console.log(`Fetching weather for, ${geoUrl}`);
        }catch (error) {
            console.error("Error fetching weather data:", error);
        }
    }
    return{ fetchWeather }
}