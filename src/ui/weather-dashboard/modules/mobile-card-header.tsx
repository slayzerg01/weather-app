import Image from "next/image";

export function MobileCardHeader (
{location, 
    temperature, 
    temperature_max, 
    temperature_min, 
    weatheCode,
    weatheCodeText,
    time

} :
    {location: string, 
    temperature: number, 
    temperature_max: number, 
    temperature_min: number,
    weatheCode: number,
    weatheCodeText: string,
    time: string
    }) 
{

    return (
            <div className="flex flex-row items-center justify-around p-4">
                <span className="text-6xl justify-self-end">{temperature}°</span>
                
                <div className="flex flex-col">
                    <span className="text-2xl">{location}</span>
                    <span>{weatheCodeText} {temperature_max}°/{temperature_min}°</span>
                    <span>{time}</span>
                </div>
                <Image className="p-2 flex" src={`/weather-status/${weatheCode}.png`} width="80" height="80" alt="weather image" />
            </div>
    );
}