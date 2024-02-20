import Image from "next/image";
import { CloudIcon } from "@heroicons/react/24/outline";
import { ChartBarIcon } from "@heroicons/react/24/solid";

function MainCard () {
    return (
        <div className="flex flex-col justify-start items-center w-full bg-white">
            <Image className="p-2" src="/weather.png" width="350" height="350" alt="product image" />
            <div className="mb-5">
                <h5 className="text-2xl text-center font-semibold tracking-tight text-black ">27°C</h5>
                <h5 className="text-2xl text-center font-semibold tracking-tight text-black mb-5">Monday, 16:00</h5>
                <hr style={{borderTop: '1px solid #0e0e0e'}} className="w-72 mx-auto mb-2"></hr>
                <div className="flex flex-row justify-start items-center mx-auto">
                    <CloudIcon className="h-10 w-10 text-black mr-5" />
                    <span className="text-black text-center text-l font-medium">Mostly Cloudy</span>      
                </div>
                <div className="flex flex-row justify-start items-center mx-auto">
                    <ChartBarIcon style={{rotate: '180deg', transform: 'scaleX(-1)'}} className="h-10 w-10 text-black mr-5"/>
                    <span className="text-black text-center text-l font-medium">Rain - 30%</span>
                </div>
            </div>
        </div>
    );
}

export default MainCard;