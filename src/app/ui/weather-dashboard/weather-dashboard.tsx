import WeatherDay from "./weather-day/weather-day";
import styles from '@/app/ui/home.module.scss';
import { daysInfo, currentDayInfo, AirQuality } from "@/app/lib/definitions";
import Image from "next/image";
import { fetchAirQuality } from "@/app/lib/data";

async function WeatherDashboard (
    { days, currentDay, latitude, longitude }: 
    { days:  daysInfo, 
    currentDay: currentDayInfo, 
    latitude: number, 
    longitude: number
    }) 
    {
    const airquality: AirQuality | null = await fetchAirQuality(latitude, longitude);
    
    return (
        <div className="w-full rounded-r-2xl px-8 bg-gray-200">
            <div className="flex flex-col justify-start p-4 mb-4">
                <span className="self-start pl-4 mb-4 mt-6 text-black text-bold text-3xl">Week</span>
                <div className="weather-week flex flex-row justify-around">
                    {
                        
                        days.time.map((element, index) => {
                            if (index >= 1) {
                                return (
                                    <WeatherDay key={index} 
                                    day={days.time[index]} 
                                    temperatureMax={days.temperatureMax[index]} 
                                    temperatureMin={days.temperatureMin[index]}/>
                                )
                            } 
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col justify-start p-2">
                <span className="text-black text-bold text-3xl ml-4 mb-6">Todays highlights</span>
                <div className="flex flex-row justify-between px-4 mb-6">
                    <div style={{width: '32%'}} className="flex flex-col p-4 items-center justify-start rounded-2xl bg-white min-h-44">
                        <span className="self-start text-gray-500 text-bold text-2xl">UV Index</span>
                        <div className={styles.semidonut} style={{'--percentage': `${days.uvIndexMax[0]*8.33}`}}>
                            {days.uvIndexMax[0]}
                        </div>
                    </div>
                    <div style={{width: '32%'}} className="flex flex-col justify-start p-4 rounded-2xl text-black bg-white min-h-44">
                        <span className="self-start text-gray-500 text-bold text-2xl">Wind status</span>
                    </div>
                    <div style={{width: '32%'}} className="flex flex-col justify-start p-4 rounded-2xl text-black bg-white min-h-44">
                        <span className="self-start text-gray-500 text-bold text-2xl">Sunrise & Sunset</span>
                    </div>
                </div>
                <div className="flex flex-row justify-between p-4">
                    <div style={{width: '32%'}} className="flex flex-col justify-start rounded-2xl p-4 text-black bg-white min-h-44">
                        <span className="self-start text-gray-500 text-bold text-2xl mb-4">Pressure</span>
                        <div className="self-center flex">
                            <Image src="/pressure.png" width="50" height="50" alt="pressure"/>
                            <span className="ml-4 align-middle text-gray-500 text-bold text-2xl mb-4">{currentDay.surfacePressure}</span>
                        </div>
                    </div>
                    <div style={{width: '32%'}} className="flex p-4 flex-col justify-start rounded-2xl text-black bg-white min-h-44">
                        <span className="self-start text-gray-500 text-bold text-2xl">Humidity</span>
                    </div>
                    <div style={{width: '32%'}} className="flex p-4 flex-col justify-start rounded-2xl text-black bg-white min-h-44">
                        <div className="flex flex-row mb-6 justify-between">
                            <span className="text-gray-700 text-bold text-2xl">Air Quality {airquality?.usAqi}</span>
                            <span className="flex items-center text-xl font-medium text-gray-600 me-3">
                            <span className="flex w-2.5 h-2.5 bg-green-600 rounded-full me-1.5 flex-shrink-0">
                            </span>Normal</span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            <div>
                                <span className="text-gray-700 text-bold text-lg">SO₂ {airquality?.sulphurDioxide}</span>
                                <span className="text-gray-500 text-bold text-xs"> μg/m³</span>
                            </div>
                            <div>
                                <span className="text-gray-700 text-bold text-lg">CO {airquality?.carbonMonoxide}</span>
                                <span className="text-gray-500 text-bold text-xs"> μg/m³</span>
                            </div>
                            <div>
                                <span className="text-gray-700 text-bold text-lg">PM₁₀ {airquality?.pm10}</span>
                                <span className="text-gray-500 text-bold text-xs"> μg/m³</span>
                            </div>
                            <div>
                                <span className="text-gray-700 text-bold text-lg">NO₂ {airquality?.nitrogenDioxide}</span>
                                <span className="text-gray-500 text-bold text-xs"> μg/m³</span>
                            </div>
                            <div>
                                <span className="text-gray-700 text-bold text-lg">PM₂.₅ {airquality?.pm25}</span>
                                <span className="text-gray-500 text-bold text-xs"> μg/m³</span>
                            </div>
                            <div>
                                <span className="text-gray-700 text-bold text-lg">O₃ {airquality?.ozone}</span>
                                <span className="text-gray-500 text-bold text-xs"> μg/m³</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherDashboard;