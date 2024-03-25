import { Hourly } from "@/lib/definitions"
import Image from "next/image"

export default function MobileHourlyForecast({hourly}: {hourly: Hourly}) {
    return (
        <ul>
            {
                hourly.time.map((element, index) => {
                        return (
                            <MobileHourForecast key={index} 
                            time={hourly.time[index]} 
                            temperature={hourly.temperature[index]} 
                            windSpeed={hourly.windSpeed[index]}
                            weatherCode={hourly.weatherCode[index]}/>
                        )
                })
            }
        </ul> 
    )
}

function MobileHourForecast( {time, temperature, windSpeed, weatherCode}: 
    {
        time: string, 
        temperature: number,
        windSpeed: number,
        weatherCode: number
    }) 
{
    return (
        <>
            <li className="flex flex-row justify-between md:justify-around items-center m-2">
                <span className="justify-self-center">{time}</span>
                <Image src={`/weather-status/${weatherCode}.png`} width="40" height="40" alt="weather image" />
                <span>{temperature}°</span>
                <span>{windSpeed} m/s</span>
            </li>
            <hr style={{borderTop: '1px solid'}} className="mx-auto mb-2"></hr>
        </>
    )
}