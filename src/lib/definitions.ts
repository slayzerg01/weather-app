export type WeatherResponse = {
    latitude?: number;
    longitude?: number;
    generationtime_ms?: number;
    utc_offset_seconds?: number;
    timezone?: string;
    timezone_abbreviation?: string;
    elevation?: number;
    current_units?: currentUnits;
    current: currentDay;
    daily_units?: dailyUnits;
    daily: daily;
}

type daily = {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    sunrise: string[];
    sunset: string[];
    precipitation_sum?: number[];
    wind_speed_10m_max?: number[];
}

type currentUnits = {
    time: string;
    interval?: string;
    temperature_2m: string;
    apparent_temperature: string;
    precipitation: string;
    weather_code: string;
    surface_pressure: string;
    relative_humidity_2m: string;
    wind_speed_10m: string;
    wind_direction_10m: string;
}

type currentDay = {
    time: string;
    interval?: number;
    temperature_2m: number;
    apparent_temperature: number;
    precipitation?: number;
    wind_direction_10m: number;
    weather_code: number;
    surface_pressure?: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
}

type dailyUnits = {
    time: string;
    weather_code: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    sunrise: string;
    sunset: string;
    precipitation_sum: string;
    wind_speed_10m_max: string;
}

export type currentDayInfo = {
    time: string;
    temperature: number;
    aparentTemperature: number;
    precipitation: number;
    weatherCodeText: string;
    weatherCode: number;
    windDirection: number;
    surfacePressure: number;
    relativeHumidity: number;
    windSpeed: number;
}

export type daysInfo = {
    time: string[];
    weatherCode: number[];
    temperatureMax: number[];
    temperatureMin: number[];
    sunrise: string[];
    sunset: string[];
    uvIndexMax: number[];
    precipitationSum: number[];
    windSpeedMax: number[];
}

export type weatherInfo = {
    current: currentDayInfo;
    daily: daysInfo;
}

export type AirQualityResponse = {
    latitude?: number;
    longitude?: number;
    generationtime_ms?: number;
    utc_offset_seconds?: number;
    timezone?: string;
    timezone_abbreviation?: string;
    elevation?: number;
    current_units?: AirQualityUnits,
    current: AirQualityCurrent;
}

type AirQualityUnits = {
    time: string;
    interval: string;
    european_aqi: string;
    us_aqi: string;
    pm10: string;
    pm2_5: string;
    carbon_monoxide: string;
    nitrogen_dioxide: string;
    sulphur_dioxide: string;
    ozone: string;
    uv_index: string;
}

type AirQualityCurrent = {
    time: string;
    interval: number;
    european_aqi: number;
    us_aqi: number;
    pm10: number;
    pm2_5: number;
    carbon_monoxide: number;
    nitrogen_dioxide: number;
    sulphur_dioxide: number;
    ozone: number;
    uv_index: number;
}

export type AirQuality = {
    europeanAqi: number;
    usAqi: number;
    pm10: number;
    pm25: number;
    carbonMonoxide: number;
    nitrogenDioxide: number;
    sulphurDioxide: number;
    ozone: number;
    uvIndex:number;
}

export type GeocodingResponse = {
    results: [
        {
            id: number,
            name: string,
            latitude: number,
            longitude: number,
            elevation: number,
            feature_code: string,
            country_code: string,
            admin1_id: number,
            admin2_id: number,
            timezone: string,
            population: number,
            country_id: number,
            country: string,
            admin1: string,
            admin2: string
        }
    ],
        generationtime_ms: number
}

export type LocationData = {
    name: string,
    latitude: number,
    longitude: number,
}