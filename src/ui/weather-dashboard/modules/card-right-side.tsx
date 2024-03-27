import WeatherDay from "../elements/weather-day/weather-day";
import { daysInfo, currentDayInfo, AirQuality } from "@/lib/definitions";
import { AirQualityBlock } from "../elements/highlights/air-quality";
import { SunriseSunsetBlock } from "../elements/highlights/sunrise-sunset";
import { HumidityBlock } from "../elements/highlights/humidity";
import { WindBlock } from "../elements/highlights/wind-block";
import { SurfacePressure } from "../elements/highlights/pressure";
import { UvIndex } from "../elements/highlights/uv-index";
import { fetchAirQuality } from "@/lib/data";

async function CardRightSide (
    { days, currentDay, latitude, longitude }: 
    { days:  daysInfo, 
    currentDay: currentDayInfo, 
    latitude: number, 
    longitude: number
    }) 
{   
    const airquality: AirQuality | null = await fetchAirQuality(latitude, longitude);
    
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
                        <UvIndex uvIndexMax={airquality ? airquality.uvIndex : 0}/>
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
                        <AirQualityBlock airquality={airquality}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardRightSide;