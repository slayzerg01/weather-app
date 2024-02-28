import Image from "next/image";
import { CloudIcon } from "@heroicons/react/24/outline";
import { ChartBarIcon } from "@heroicons/react/24/solid";
import { currentDayInfo } from "../lib/definitions";


export default async function MainCard ({ currentDay }: { currentDay:  currentDayInfo}) {

    return (
        <div className="flex flex-col rounded-l-2xl justify-start items-center w-full bg-white">
            <Image className="p-4" src={`/weather-status/${currentDay.weatherCode}.png`} width="350" height="350" alt="product image" />
            <div className="flex flex-col flex-1 mb-5">
                <h5 className="text-4xl text-center font-semibold tracking-tight text-black ">{currentDay.temperature} °C</h5>
                <div className="flex flex-row justify-center items-center mx-auto mb-1">
                    <span className="text-xl text-center font-semibold tracking-tight text-gray-500 ">Feels like {currentDay.aparentTemperature} °C</span>
                </div>
                <h5 className="text-2xl text-center font-semibold tracking-tight text-black mb-2">{currentDay.time}</h5>
                
                <hr style={{borderTop: '1px solid #0e0e0e'}} className="w-72 mx-auto mb-5"></hr>
                <div className="flex flex-row items-center mb-5">
                    <CloudIcon className="h-10 w-10 text-black mr-5" />
                    <span className="text-black text-center text-l font-medium">{currentDay.weatherCodeText}</span>      
                </div>
                <div className="flex flex-row items-center mb-10">
                    <ChartBarIcon style={{rotate: '180deg', transform: 'scaleX(-1)'}} className="h-10 w-10 text-black mr-5"/>
                    <span className="text-black text-center text-l font-medium">Precipitation - {currentDay.precipitation}%</span>
                </div>
                
                
                <div className="flex place-self-end  flex-row mx-auto">
                    <div className="relative">
                        <Image style={{display: 'block', width: '320px', height: '120px'}} className="rounded-2xl" src="/sky.jpg" width="250" height="250" alt="product image" />
                        <span className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-700 text-center text-2xl font-bold">Baikonur</span>
                    </div>
                </div>
            </div>
        </div>
    );
}