import Image from "next/image";

export function MobileCardHeader ({location, temperature, temperature_max, temperature_min} :
    {location: string, 
    temperature: number, 
    temperature_max: number, 
    temperature_min: number
    }) 
{

    return (
            <div className="flex flex-row justify-around p-4">
                <span className="text-4xl self-center justify-self-end">{temperature}°</span>
                
                <div className="flex flex-col self-center">
                    <span>{location}</span>
                    <span>Cloudy {temperature_max}°/{temperature_min}°</span>
                </div>
                <Image className="p-4 flex" src={`/weather-status/1.png`} width="80" height="80" alt="product image" />
            </div>
    );
}