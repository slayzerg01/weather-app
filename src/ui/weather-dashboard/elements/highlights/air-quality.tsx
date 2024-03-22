import { fetchAirQuality } from "@/lib/data";
import { AirQuality } from "@/lib/definitions";

export async function AirQualityBlock (
    { latitude, longitude }: 
    { 
    latitude: number, 
    longitude: number
    }
) {
    const airquality: AirQuality | null = await fetchAirQuality(latitude, longitude);

    const airStatus = airquality ? get_air_status(airquality?.usAqi) : null;

    return (
        <>
            <div className="flex flex-row mb-6 justify-between">
                <span className="text-gray-700 dark:text-white text-bold text-2xl">Air Quality {airquality?.europeanAqi}</span>
                <span className="flex items-center text-xl font-medium text-gray-500 me-3">
                <span className={`flex w-3 h-3 ${airStatus ? airStatus.color : ''} rounded-full me-1.5 flex-shrink-0`}>
                </span>{airStatus ? airStatus.name : 'no data' }</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div>
                    <span className="text-gray-600 dark:text-gray-500 text-bold text-lg">SO₂ {airquality?.sulphurDioxide}</span>
                </div>
                <div>
                    <span className="text-gray-600 dark:text-gray-500 text-bold text-lg">CO {airquality?.carbonMonoxide}</span>
                </div>
                <div>
                    <span className="text-gray-600 dark:text-gray-500 text-bold text-lg">PM₁₀ {airquality?.pm10}</span>
                </div>
                <div>
                    <span className="text-gray-600 dark:text-gray-500 text-bold text-lg">NO₂ {airquality?.nitrogenDioxide}</span>
                </div>
                <div>
                    <span className="text-gray-600 dark:text-gray-500 text-bold text-lg">PM₂₅ {airquality?.pm25}</span>
                </div>
                <div>
                    <span className="text-gray-600 dark:text-gray-500 text-bold text-lg">O₃ {airquality?.ozone}</span>
                </div>
            </div>
            <span className="self-end text-gray-500 text-bold text-sm me-3">μg/m³</span>
        </>
    )
}

type Status = {
    name: string;
    color: string;
}

function get_air_status(aqi: number ): Status {

    let airStatus: Status = {
        name: '',
        color: ''
    }

    if (aqi <= 50) {
        airStatus.name = 'Good';
        airStatus.color = 'bg-green-600'
    } 
    else if (aqi <= 100) {
        airStatus.name = 'Moderate';
        airStatus.color = 'bg-yellow-400'
    }
    else if (aqi <= 150) {
        airStatus.name = 'Unhealthy for Sensitive Groups';
        airStatus.color = 'bg-orange-500'
    }
    else if (aqi <= 200) {
        airStatus.name = 'Unhealthy';
        airStatus.color = 'bg-red-700'
    }
    else if (aqi <= 300) {
        airStatus.name = 'Very Unhealthy';
        airStatus.color = 'bg-fuchsia-900'
    }
    else {
        airStatus.name = 'Hazardous';
        airStatus.color = 'bg-rose-950'
    }

    return airStatus;
}