import Image from "next/image";

export function MobileCardHeader ({location, temperature, temperature_max, temperature_min} :
    {location: string, 
    temperature: number, 
    temperature_max: number, 
    temperature_min: number
    }) 
{

    return (
            <div className="flex flex-row items-center justify-around p-4">
                <span className="text-6xl justify-self-end">{temperature}°</span>
                
                <div className="flex flex-col">
                    <span className="text-2xl">{location}</span>
                    <span>Cloudy {temperature_max}°/{temperature_min}°</span>
                </div>
                <Image className="p-2 flex" src={`/weather-status/1.png`} width="80" height="80" alt="product image" />
            </div>
    );
}