import { AirQuality } from "@/lib/definitions";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

export function AirQualityBlock (
    { airquality }: 
    { 
        airquality: AirQuality | null
    }
) {
    
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

export function MobileAirQualityBlock (
    { airquality }: 
    { 
        airquality: AirQuality
    }
) {
    const airStatus = airquality ? get_air_status(airquality?.usAqi) : null;

    return (
        <Card className='dark:bg-zinc-800 col-span-2'>
            <CardHeader className="pb-0 flex flex-row justify-between">
                <span className="text-bold mr-2">Air Quality</span>
                <div className="flex flex-row gap-2">
                    <span>{airquality?.europeanAqi} AQI</span>
                    <span className="flex items-center font-medium">
                        <span className={`flex w-2.5 h-2.5 ${airStatus ? airStatus.color : ''} rounded-full me-1.5 flex-shrink-0`}>
                    </span>{airStatus ? airStatus.name : 'no data' }</span>
                </div>
            </CardHeader>
            <CardBody>  
                <div className="flex grid grid-cols-2 md:grid-cols-3 gap-1  justify-center">
                    <div>
                        <span className="text-gray-600 dark:text-gray-500 text-bold text-lg">
                            SO₂ {airquality?.sulphurDioxide}
                            <span className="self-end text-gray-500 text-bold text-xs me-3"> μg/m³</span>
                        </span>
                    </div>
                    <div>
                        <span className="text-gray-600 dark:text-gray-500 text-bold text-lg">
                            CO {airquality?.carbonMonoxide}
                            <span className="self-end text-gray-500 text-bold text-xs me-3"> μg/m³</span>
                        </span>
                    </div>
                    <div>
                        <span className="text-gray-600 dark:text-gray-500 text-bold text-lg">
                            PM₁₀ {airquality?.pm10}
                            <span className="self-end text-gray-500 text-bold text-xs me-3"> μg/m³</span>
                        </span>
                    </div>
                    <div>
                        <span className="text-gray-600 dark:text-gray-500 text-bold text-lg">
                            NO₂ {airquality?.nitrogenDioxide}
                            <span className="self-end text-gray-500 text-bold text-xs me-3"> μg/m³</span>
                        </span>
                    </div>
                    <div>
                        <span className="text-gray-600 dark:text-gray-500 text-bold text-lg">
                            PM₂₅ {airquality?.pm25}
                            <span className="self-end text-gray-500 text-bold text-xs me-3"> μg/m³</span>
                        </span>
                    </div>
                    <div>
                        <span className="text-gray-600 dark:text-gray-500 text-bold text-lg">
                            O₃ {airquality?.ozone}
                            <span className="self-end text-gray-500 text-bold text-xs me-3"> μg/m³</span>
                        </span>
                    </div>
                </div>
            </CardBody>
        </Card>   
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