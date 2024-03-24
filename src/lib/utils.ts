import { WeatherResponse, weatherInfo, AirQualityResponse, AirQuality, GeocodingResponse, LocationData } from "./definitions";
import dayjs from "dayjs";

function formatTimeWithWeekDay(time: string) {
    return dayjs(time).format('dddd, HH:mm');
}

function formatTime(time: string) {
    return dayjs(time).format('HH:mm');
}

export function adaptWeatherDataToClient(inputData: WeatherResponse) : weatherInfo {
    const adaptedData = {...inputData, 
        current: {
            time: formatTimeWithWeekDay(new Date().toISOString()),
            temperature: Math.round(inputData.current.temperature_2m),
            aparentTemperature:  Math.round(inputData.current.apparent_temperature),
            precipitation: inputData.current.precipitation,
            weatherCodeText: WMOcodeToText(inputData.current.weather_code),
            weatherCode: inputData.current.weather_code,
            surfacePressure: inputData.current.surface_pressure,
            relativeHumidity: inputData.current.relative_humidity_2m,
            windDirection: inputData.current.wind_direction_10m,
            windSpeed: inputData.current.wind_speed_10m
        },
        daily: {
            time: inputData.daily.time.map((element) => dateToDayOfWeek(element)),
            weatherCode: inputData.daily.weather_code,
            temperatureMax: inputData.daily.temperature_2m_max.map((element) => Math.round(element)),
            temperatureMin: inputData.daily.temperature_2m_min.map((element) => Math.round(element)),
            sunrise: inputData.daily.sunrise.map((element) => formatTime(element)),
            sunset: inputData.daily.sunset.map((element) => formatTime(element)),
            precipitationSum: inputData.daily.precipitation_sum,
            windSpeedMax: inputData.daily.wind_speed_10m_max,
        }
    }
    delete adaptedData.latitude;
    delete adaptedData.longitude;
    delete adaptedData.generationtime_ms;
    delete adaptedData.utc_offset_seconds;
    delete adaptedData.timezone;
    delete adaptedData.timezone_abbreviation;
    delete adaptedData.elevation;
    delete adaptedData.current_units;
    delete adaptedData.daily_units;

    return adaptedData as weatherInfo;
}

export function adaptAirQualityDataToClient(inputData: AirQualityResponse) : AirQuality {
    const adaptedData = {...inputData, 
        current: {
            europeanAqi: inputData.current.european_aqi,
            usAqi: inputData.current.us_aqi,
            pm10: inputData.current.pm10,
            pm25: inputData.current.pm2_5,
            carbonMonoxide: inputData.current.carbon_monoxide,
            nitrogenDioxide: inputData.current.nitrogen_dioxide,
            sulphurDioxide: inputData.current.sulphur_dioxide,
            ozone: inputData.current.ozone,
            uvIndex: inputData.current.uv_index,
        }
    }
    delete adaptedData.latitude;
    delete adaptedData.longitude;
    delete adaptedData.generationtime_ms;
    delete adaptedData.utc_offset_seconds;
    delete adaptedData.timezone;
    delete adaptedData.timezone_abbreviation;
    delete adaptedData.elevation;
    delete adaptedData.current_units;

    return adaptedData.current as AirQuality;
}

export function adaptGeocodingDataToClient(inputData: GeocodingResponse) : LocationData {
    const adaptedData: LocationData = {
        name: inputData.results[0].name,
        latitude: inputData.results[0].latitude,
        longitude: inputData.results[0].longitude
    }

    return adaptedData;
}

function dateToDayOfWeek(date: string) {
    return dayjs(date).format('ddd');
}

function WMOcodeToText(code: number) {
    switch (code) {
        case 0:
            return 'Clear sky';
            break;
        case 1:
            return 'Mainly clear';
            break;
        case 2:
            return 'Partly cloudy';
            break;
        case 3:
            return 'Overcast';
            break;
        case 45:
            return 'Fog';
            break;
        case 48:
            return 'Depositing rime fog';
            break;
        case 51:
            return 'Light drizzle';
            break;
        case 53:
            return 'Moderate drizzle';
            break;
        case 55:
            return 'Dense intensity drizzle';
            break;
        case 56:
            return 'Light freezing drizzle';
            break;
        case 57:
            return 'Dense intensity freezing drizzle';
            break;
        case 61:
            return 'Slight rain';
            break;
        case 63:
            return 'Moderate rain';
            break;
        case 65:
            return 'Heavy intensity rain';
            break;
        case 66:
            return 'Light freezing rain';
            break;
        case 67:
            return 'Heavy intensity freezing rain';
            break;
        case 71:
            return 'Slight snow fall';
            break;
        case 73:
            return 'Moderate snow fall';
            break;
        case 75:
            return 'Heavy intensity snow fall';
            break;
        case 77:
            return 'Snow grains';
            break;
        case 80:
            return 'Slight rain showers';
            break;
        case 81:
            return 'Moderate rain showers';
            break;
        case 82:
            return 'Violent rain showers';
            break;
        case 85:
            return 'Slight snow showers';
            break;
        case 86:
            return 'Heavy snow showers';
            break;
        case 95:
            return 'Thunderstorm';
            break;
        case 96:
            return 'Thunderstorm with slight hail';
            break;
        case 99:
            return 'Thunderstorm with heavy hail';
            break;
        default:
            return 'Weather code not found'
    }
}