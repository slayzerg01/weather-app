export const weatherData = {
    "latitude": 45.625,
    "longitude": 63.375,
    "generationtime_ms": 0.32389163970947266,
    "utc_offset_seconds": 18000,
    "timezone": "Asia/Qyzylorda",
    "timezone_abbreviation": "+05",
    "elevation": 93.0,
    "current_units": {
        "time": "iso8601",
        "interval": "seconds",
        "temperature_2m": "°C",
        "apparent_temperature": "°C",
        "precipitation": "mm",
        "weather_code": "wmo code",
        "surface_pressure": "hPa",
        "relative_humidity_2m": "%"
    },
    "current": {
        "time": "2024-02-21T11:00",
        "interval": 900,
        "temperature_2m": -7.2,
        "apparent_temperature": -12.1,
        "precipitation": 0.00,
        "weather_code": 3,
        "surface_pressure": 1018.4,
        "relative_humidity_2m": 56,
        "wind_direction_10m": 196,
        "wind_speed_10m": 25
    },
    "daily_units": {
        "time": "iso8601",
        "weather_code": "wmo code",
        "temperature_2m_max": "°C",
        "temperature_2m_min": "°C",
        "sunrise": "iso8601",
        "sunset": "iso8601",
        "uv_index_max": "",
        "precipitation_sum": "mm",
        "wind_speed_10m_max": "m/s"
    },
    "daily": {
        "time": [
            "2024-02-21",
            "2024-02-22",
            "2024-02-23",
            "2024-02-24",
            "2024-02-25",
            "2024-02-26",
            "2024-02-27",
            "2024-02-28"
        ],
        "weather_code": [
            3,
            3,
            3,
            2,
            2,
            0,
            0,
            0
        ],
        "temperature_2m_max": [
            -1.2,
            -1.6,
            -3.4,
            -4.8,
            -4.1,
            -2.7,
            -0.5,
            2.6
        ],
        "temperature_2m_min": [
            -10.1,
            -7.6,
            -10.5,
            -13.5,
            -15.1,
            -12.8,
            -11.5,
            -9.6
        ],
        "sunrise": [
            "2024-02-21T07:39",
            "2024-02-22T07:38",
            "2024-02-23T07:36",
            "2024-02-24T07:35",
            "2024-02-25T07:33",
            "2024-02-26T07:31",
            "2024-02-27T07:29",
            "2024-02-28T07:28"
        ],
        "sunset": [
            "2024-02-21T18:20",
            "2024-02-22T18:22",
            "2024-02-23T18:23",
            "2024-02-24T18:25",
            "2024-02-25T18:26",
            "2024-02-26T18:27",
            "2024-02-27T18:29",
            "2024-02-28T18:30"
        ],
        "uv_index_max": [
            3.60,
            3.40,
            3.55,
            3.60,
            3.65,
            3.65,
            3.85,
            3.70
        ],
        "precipitation_sum": [
            0.00,
            0.00,
            0.00,
            0.00,
            0.00,
            0.00,
            0.00,
            0.00
        ],
        "wind_speed_10m_max": [
            3.83,
            4.57,
            4.24,
            5.31,
            6.27,
            7.17,
            8.13,
            6.05
        ]
    }
}

export const airQuality = {
    "latitude": 52.549995,
    "longitude": 13.450001,
    "generationtime_ms": 0.16689300537109375,
    "utc_offset_seconds": 3600,
    "timezone": "Europe/Berlin",
    "timezone_abbreviation": "CET",
    "elevation": 38.0,
    "current_units": {
        "time": "iso8601",
        "interval": "seconds",
        "european_aqi": "EAQI",
        "us_aqi": "USAQI",
        "pm10": "μg/m³",
        "pm2_5": "μg/m³",
        "carbon_monoxide": "μg/m³",
        "nitrogen_dioxide": "μg/m³",
        "sulphur_dioxide": "μg/m³",
        "ozone": "μg/m³"
    },
    "current": {
        "time": "2024-02-21T16:00",
        "interval": 3600,
        "european_aqi": 22,
        "us_aqi": 41,
        "pm10": 9.7,
        "pm2_5": 8.8,
        "carbon_monoxide": 220.0,
        "nitrogen_dioxide": 17.7,
        "sulphur_dioxide": 1.3,
        "ozone": 54.0
    }
}

export const geocoding = {
    results: [
        {
            id: 1521368,
            name: 'Baikonur',
            latitude: 45.61667,
            longitude: 63.31667,
            elevation: 730,
            feature_code: 'PPLA',
            country_code: 'KZ',
            admin1_id: 1538316,
            timezone: 'Asia/Qostanay',
            population: 70000,
            country_id: 1522867,
            country: 'Kazakhstan',
            admin1: 'Baikonur'
        }
        ],
        generationtime_ms: 0.25606155
}