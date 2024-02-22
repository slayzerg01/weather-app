import WeatherDay from "./weather-day/weather-day";
import styles from '@/app/ui/home.module.scss';
import { daysInfo, currentDayInfo } from "@/app/lib/definitions";
import Image from "next/image";
import { AirQualityBlock } from "./highlights/air-quality";
import { SunriseSunsetBlock } from "./highlights/sunrise-sunset";
import { HumidityBlock } from "./highlights/humidity";

async function WeatherDashboard (
    { days, currentDay, latitude, longitude }: 
    { days:  daysInfo, 
    currentDay: currentDayInfo, 
    latitude: number, 
    longitude: number
    }) 
{
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
                        <span className="self-start text-gray-700 text-bold text-2xl">UV Index</span>
                        <div className={styles.semidonut} style={{'--percentage': `${days.uvIndexMax[0]*8.33}`}}>
                            {days.uvIndexMax[0]}
                        </div>
                    </div>
                    <div style={{width: '32%'}} className="flex flex-col justify-start p-4 rounded-2xl text-black bg-white min-h-44">
                        <span className="self-start text-gray-700 text-bold text-2xl">Wind status</span>
                    </div>
                    <div style={{width: '32%'}} className="flex flex-col justify-start p-4 rounded-2xl text-black bg-white min-h-44">
                        <SunriseSunsetBlock sunrise={days.sunrise[0]} sunset={days.sunset[0]}/>
                    </div>
                </div>
                <div className="flex flex-row justify-between p-4">
                    <div style={{width: '32%'}} className="flex flex-col justify-start rounded-2xl p-4 text-black bg-white min-h-44">
                        <span className="self-start text-gray-700 text-bold text-2xl mb-4">Pressure</span>
                        <div className="self-center flex">
                            <Image src="/pressure.png" width="50" height="50" alt="pressure"/>
                            <span className="ml-4 align-middle text-gray-500 text-bold text-2xl mb-4">{currentDay.surfacePressure}</span>
                        </div>
                    </div>
                    <div style={{width: '32%'}} className="flex p-4 flex-col justify-start rounded-2xl text-black bg-white min-h-44">
                        <HumidityBlock humidity={currentDay.relativeHumidity}/>
                    </div>
                    <div style={{width: '32%'}} className="flex p-4 flex-col justify-start rounded-2xl text-black bg-white min-h-44">

                        <AirQualityBlock longitude={longitude} latitude={latitude}/>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherDashboard;