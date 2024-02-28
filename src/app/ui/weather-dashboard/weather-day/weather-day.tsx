import Image from "next/image";

function WeatherDay({day, temperatureMax, temperatureMin, weatherCode} : 
    {day: string, 
    temperatureMax: number, 
    temperatureMin: number,
    weatherCode: number}
): JSX.Element {
    return (
        <div style={{width: '12%'}} className="flex flex-col justify-around items-center bg-white rounded-xl">
            <h2 className="text-black text-lg text-center font-semibold">{day}</h2>
            <Image className="p-2" src={`/weather-status/${weatherCode}.png`} width="100" height="100" alt="fdf"></Image>
            <p className="text-black">{temperatureMax}°<span className="text-gray-500">/{temperatureMin}°</span></p>
        </div>
    );
}

export default WeatherDay;
