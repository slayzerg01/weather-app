import { daysInfo } from "@/lib/definitions"
import Image from "next/image";

export default function MobileWeatherDailyForecast({days}: {days: daysInfo}) {
    return (
        <ul>
            {
                days.time.map((element, index) => {
                    if (index >= 1) {
                        return (
                            <MobileDayForecast key={index} 
                            day={days.time[index]} 
                            temperatureMax={days.temperatureMax[index]} 
                            temperatureMin={days.temperatureMin[index]}
                            weatherCode={days.weatherCode[index]}
                            weatherCodeText={days.weatherCodeText[index]}
                            />
                        )
                    } 
                })
            }
        </ul> 
    )
}

function MobileDayForecast( {day, temperatureMax, temperatureMin, weatherCode, weatherCodeText}: 
    {
        day: string, 
        temperatureMax: number,
        temperatureMin: number,
        weatherCode: number,
        weatherCodeText: string;
    }) 
{
    return (
        <>
            <li className="flex flex-row justify-between md:justify-around items-center m-2">
                <span className="w-1/4 justify-self-center">{day}</span>
                <span className="w-1/4 text-center">{temperatureMax}°/{temperatureMin}°</span>
                <Image src={`/weather-status/${weatherCode}.png`} width="40" height="40" alt="weather image" />
                <span className="w-1/4 text-center">{weatherCodeText}</span>
            </li>
            <hr style={{borderTop: '1px solid'}} className="mx-auto mb-2"></hr>
        </>
    )
}