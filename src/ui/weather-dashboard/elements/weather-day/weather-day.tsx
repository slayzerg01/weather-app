import Image from "next/image";

export default function WeatherDay({day, temperatureMax, temperatureMin, weatherCode} : 
    {day: string, 
    temperatureMax: number, 
    temperatureMin: number,
    weatherCode: number}
): JSX.Element {
    return (
        <div style={{width: '12%'}} className="flex flex-col justify-around items-center bg-white dark:bg-zinc-800 rounded-xl">
            <h2 className="text-lg text-center font-semibold">{day}</h2>
            <Image className="p-2" src={`/weather-status/${weatherCode}.png`} width="100" height="100" alt="weather image"></Image>
            <p>{temperatureMax}°<span className="text-gray-500">/{temperatureMin}°</span></p>
        </div>
    );
}
