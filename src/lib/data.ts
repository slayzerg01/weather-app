import { unstable_noStore as noStore } from 'next/cache';
import { 
    adaptWeatherDataToClient, 
    adaptAirQualityDataToClient,
    adaptGeocodingDataToClient
} from './utils';

const {
    weatherData, 
    airQuality,
    geocoding
} = require('./placeholder-data');

const USE_API = false;

const urlWeather = "https://api.open-meteo.com/v1/forecast";
const urlAirQuality = "https://air-quality-api.open-meteo.com/v1/air-quality";
const urlGeoCoding = "https://geocoding-api.open-meteo.com/v1/search";


// const API_KEY = process.env.API_KEY
const axios = require('axios');


export async function fetchRealTimeWeather(latitude: number, longitude: number) {

    const params = {
        "latitude": latitude,
        "longitude": longitude,
        "current": ["temperature_2m", "wind_speed_10m","wind_direction_10m", "relative_humidity_2m", "apparent_temperature", "precipitation", "rain", "showers", "snowfall", "weather_code", "surface_pressure"],
        "daily": ["weather_code", "temperature_2m_max", "temperature_2m_min", "sunrise", "sunset", "uv_index_max", "precipitation_sum", "wind_speed_10m_max"],
        "wind_speed_unit": "ms",
        "timezone": "auto",
        "forecast_days": 8
    };

    console.log('fetching weather data...');
    //await new Promise((resolve) => setTimeout(resolve, 2000));
    //noStore();
    try {

        if (USE_API) {

            const response = await axios(urlWeather, {params: params});
            
            return adaptWeatherDataToClient(response.data);

        }
        else {
            return adaptWeatherDataToClient(weatherData);
        }
        

    } 
    catch (err) {
        console.error('Fetch Error:', err);
        return null
    }
}

export async function fetchAirQuality(latitude: number, longitude: number) {

    const params = {
        "latitude": latitude,
        "longitude": longitude,
        "current": ["european_aqi", "us_aqi", "pm10", "pm2_5", "carbon_monoxide", "nitrogen_dioxide", "sulphur_dioxide", "ozone"],
        "timezone": "auto"
    };
    console.log('fetching airquality data...');
    //await new Promise((resolve) => setTimeout(resolve, 5000));

    //noStore();
    try {

        if (USE_API) {

            const response = await axios(urlAirQuality, {params: params});
            return adaptAirQualityDataToClient(response.data);

        }
        else {
            return adaptAirQualityDataToClient(airQuality);
        }

    } 
    catch (err) {
        console.error('Fetch Error:', err);
        return null;
    }
}

export async function fetchLocationCoordinates(location: string) { 
    const params = {
        "name": location,
        "count": 1,
        "language": "en",
        "format": "json"
    };
    console.log('fetching geocoding data...');
    
    try {

        if (USE_API) {

            const response = await axios(urlGeoCoding, {params: params});
            return adaptGeocodingDataToClient(response.data);

        }
        else {
            return adaptGeocodingDataToClient(geocoding);
        }

    } 
    catch (err) {
        console.error('Fetch Error:', err);
        return null;
    }
}