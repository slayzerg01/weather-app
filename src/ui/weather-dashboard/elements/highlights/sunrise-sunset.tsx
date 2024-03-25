import Image from "next/image";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

export async function SunriseSunsetBlock (
    { sunrise, sunset }: 
    { 
        sunrise: string, 
        sunset: string
    }
) {
    return (
        <>
            <span className="self-start text-gray-700 dark:text-white text-bold text-2xl mb-2">Sunrise & Sunset</span>
            <div className="flex flex-col justify-start">
                <div className="flex flex-row items-center mb-2">
                    <Image className="p-2" src="/sunrise.png" width="50" height="50" alt="sunrise image" />
                    <span className=" text-gray-500 text-bold text-2xl">{sunrise}</span>
                </div>
                <div className="flex flex-row items-center">
                    <Image className="p-2" src="/sunset.png" width="50" height="50" alt="sunset image" />
                    <span className="text-gray-500 text-bold text-2xl">{sunset}</span>
                </div>
            </div>
            
        </>
    )
}

export function MobileSunriseSunsetBlock (
    { sunrise, sunset }: 
    { 
        sunrise: string, 
        sunset: string
    }
) {
    return (
        <Card className='dark:bg-zinc-800'>
            <CardHeader className="pb-2">Sunrise & Sunset</CardHeader>
            <CardBody className='flex p-2 flex-row justify-around items-center'>
                <div className="flex flex-col flex-grow justify-start">
                    <div className="flex flex-row justify-around items-center mb-2">
                        <span className=" text-gray-500 text-xl text-bold">{sunrise}</span>
                        <Image src="/sunrise.png" width="30" height="30" alt="sunrise image" />
                    </div>
                    <div className="flex flex-row justify-around items-center">
                        <span className="text-gray-500 text-xl text-bold">{sunset}</span>
                        <Image src="/sunset.png" width="30" height="30" alt="sunset image" />
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}