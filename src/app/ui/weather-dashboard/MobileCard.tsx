import Image from "next/image";
import { weatherInfo } from "@/app/lib/definitions";

export default async function MobileCard ({weatherdata}: 
    {weatherdata: weatherInfo}) 
    {
    
    return (
        <div className="flex flex-col rounded-2xl justify-start items-center w-full bg-white dark:bg-zinc-800">
            <MobileCardHeader />
        </div>
    );
}

function MobileCardHeader () {

    return (
        <div className="flex flex-row">
            <span>0 C</span>
            <span>Baik</span>
            {/* <Image className="p-4" src={`/weather-status/${currentDay.weatherCode}.png`} width="350" height="350" alt="product image" /> */}
        </div>
    );
}

