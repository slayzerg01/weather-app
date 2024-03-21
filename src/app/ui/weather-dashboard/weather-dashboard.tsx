import WeatherDay from "./weather-day/weather-day";
import { daysInfo, currentDayInfo } from "@/app/lib/definitions";
import { AirQualityBlock } from "./highlights/air-quality";
import { SunriseSunsetBlock } from "./highlights/sunrise-sunset";
import { HumidityBlock } from "./highlights/humidity";
import { WindBlock } from "./highlights/windBlock";
import { Suspense } from 'react';
import { AirQualitySkeleton } from "../skeletons/airQuality";
import { SurfacePressure } from "./highlights/pressure";
import { UvIndex } from "./highlights/uv-index";

async function WeatherDashboard (
    { days, currentDay, latitude, longitude }: 
    { days:  daysInfo, 
    currentDay: currentDayInfo, 
    latitude: number, 
    longitude: number
    }) 
{
    return (
        <div className="w-full rounded-r-2xl px-8 bg-gray-200 dark:bg-zinc-700">
            <div className="flex flex-col justify-start p-4 mb-4">
                <span className="self-start pl-4 mb-4 mt-6 text-bold text-3xl">Week</span>
                <div className="weather-week flex flex-row justify-around">
                    {
                        days.time.map((element, index) => {
                            if (index >= 1) {
                                return (
                                    <WeatherDay key={index} 
                                    day={days.time[index]} 
                                    temperatureMax={days.temperatureMax[index]} 
                                    temperatureMin={days.temperatureMin[index]}
                                    weatherCode={days.weatherCode[index]}/>
                                )
                            } 
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col justify-start p-2">
                <span className="text-bold text-3xl ml-4 mb-6">Todays highlights</span>
                <div className="flex flex-row justify-between px-4 mb-6">
                    <div style={{width: '32%'}} className="flex flex-row p-4 justify-between rounded-2xl bg-white dark:bg-zinc-800 min-h-44">
                        <UvIndex uvIndexMax={days.uvIndexMax[0]}/>
                    </div>
                    <div style={{width: '32%'}} className="flex flex-col justify-start p-4 rounded-2xl bg-white dark:bg-zinc-800 min-h-44">
                        <WindBlock windDirection={currentDay.windDirection} windSpeed={currentDay.windSpeed}/>
                    </div>
                    
                    <div style={{width: '32%'}} className="flex flex-col justify-start p-4 rounded-2xl bg-white dark:bg-zinc-800 min-h-44">
                        <SunriseSunsetBlock sunrise={days.sunrise[0]} sunset={days.sunset[0]}/>
                    </div>
                </div>
                <div className="flex flex-row justify-between p-4">
                    <div style={{width: '32%'}} className="flex flex-col justify-start rounded-2xl p-4 bg-white dark:bg-zinc-800 min-h-44">
                        <SurfacePressure surfacePressure={currentDay.surfacePressure} />
                    </div>
                    <div style={{width: '32%'}} className="flex p-4 flex-col justify-start rounded-2xl bg-white dark:bg-zinc-800 min-h-44">
                        <HumidityBlock humidity={currentDay.relativeHumidity}/>
                    </div>

                    <div style={{width: '32%'}} className="flex p-4 flex-col justify-start rounded-2xl bg-white dark:bg-zinc-800 min-h-44">
                        <Suspense fallback={<AirQualitySkeleton />}>
                            <AirQualityBlock longitude={longitude} latitude={latitude}/>
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherDashboard;