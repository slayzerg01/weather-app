import { daysInfo } from "@/lib/definitions"
import Image from "next/image";

export default function MobileWeatherDailyForecast({days}: {days: daysInfo}) {
    return (
        <ul className="">
            {
                days.time.map((element, index) => {
                    if (index >= 1) {
                        return (
                            <MobileDayForecast key={index} 
                            day={days.time[index]} 
                            temperatureMax={days.temperatureMax[index]} 
                            temperatureMin={days.temperatureMin[index]}
                            weatherCode={days.weatherCode[index]}/>
                        )
                    } 
                })
            }
        </ul> 
    )
}

function MobileDayForecast( {day, temperatureMax, temperatureMin, weatherCode}: 
    {
        day: string, 
        temperatureMax: number,
        temperatureMin: number,
        weatherCode: number
    }) 
{
    return (
        <>
            <li className="flex flex-row justify-between items-center m-2">
                <Image src={`/weather-status/${weatherCode}.png`} width="40" height="40" alt="product image" />
                <span className="justify-self-center">{day}</span>
                <span>{temperatureMax}°/{temperatureMin}°</span>
            </li>
            <hr style={{borderTop: '1px solid'}} className="mx-auto mb-2"></hr>
        </>
    )
}