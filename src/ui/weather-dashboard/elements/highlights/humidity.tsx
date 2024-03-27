import Image from "next/image";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

export async function HumidityBlock (
    { humidity }: 
    { 
        humidity: number
    }
) {
    return (
        <>  
            <div className="flex flex-row justify-between">
                <div className="flex flex-col justify-start">
                    <span className="self-start text-gray-700 dark:text-white text-bold text-2xl mb-6">Humidity</span>
                    <span className="ml-2 text-gray-500 text-bold text-4xl mb-2">{humidity}<sup className="text-2xl">%</sup></span>
                    <span className="ml-2 text-gray-500 text-bold text-2xl"> 
                        { (30<=humidity)&&(humidity<=65) ? 'Normal' : humidity<= 35 ? 'Dry' : 'Wet'}
                    </span>
                </div> 
                <div className="flex flex-row">
                    <Image className="self-end block w-20 h-20 mr-2" src="/water-drop.png" width="70" height="50" alt="water drop"/>
                    <div className="flex flex-col flex-nowrap justify-end w-6 h-32 bg-gray-300 rounded-full overflow-hidden mr-6 mt-2" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>
                    <div className="rounded-full overflow-hidden bg-blue-600" style={{height: `${humidity}%`}}></div>
                    </div>
                </div>  
            </div>
        </>
    )
}

export function MobileHumidityBlock (
    { humidity }: 
    { 
        humidity: number
    }
) {
    return (
        <Card className='dark:bg-zinc-800'>
            <CardHeader className="pb-2">Humidity</CardHeader>
            <CardBody className='flex p-2 flex-row justify-around items-center'>
                <div className="flex flex-row flex-grow justify-around">
                    <div className="flex flex-col justify-center">
                        <span className="ml-2 text-gray-500 text-bold text-3xl mb-2">{humidity}<sup className="text-xl">%</sup></span>
                        <span className="ml-2 text-gray-500 text-bold text-xl"> 
                            { (30<=humidity)&&(humidity<=65) ? 'Normal' : humidity<= 35 ? 'Dry' : 'Wet'}
                        </span>
                    </div> 
                    <div className="flex flex-row">
                        <div className="flex flex-col flex-nowrap justify-end w-3 h-20 bg-gray-300 rounded-full overflow-hidden" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>
                            <div className="rounded-full overflow-hidden bg-blue-600" style={{height: `${humidity}%`}}></div>
                        </div>
                    </div>  
                </div>
            </CardBody>
        </Card>   
    )
}