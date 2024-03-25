'use client'
import Image from "next/image"
import { useTheme } from "next-themes";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

export function SurfacePressure (
    { surfacePressure }: 
    { 
        surfacePressure: number, 
    }
) {
    const { theme, setTheme } = useTheme()
    return (
        <div className="flex flex-row justify-between flex-grow">
            <div className="flex flex-col">
                <span className="self-start text-gray-700 dark:text-white text-bold text-2xl mb-6">Pressure</span>
                <span className="ml-2 align-middle text-gray-500 text-bold text-4xl">{Math.ceil(surfacePressure)} hPa</span>
            </div>
            <Image className="mr-6 self-center" src={`/${theme === 'dark' ? 'white-pressure.png' : 'pressure.png'}`} width="100" height="100" alt="pressure"/>
        </div>
    )
}

export function MobileSurfacePressure (
    { surfacePressure }: 
    { 
        surfacePressure: number, 
    }
) {
    const { theme, setTheme } = useTheme()
    return (
        <Card className='dark:bg-zinc-800'>
            <CardHeader className="pb-2">Pressure</CardHeader>
            <CardBody className='flex flex-row justify-between items-center'>
                <span className="text-2xl text-gray-500 text-bold">{Math.ceil(surfacePressure)} hPa</span>
                <Image className="self-center" 
                src={`/${theme === 'dark' ? 'white-pressure.png' : 'pressure.png'}`} 
                width="50" 
                height="50" 
                alt="pressure"/>
            </CardBody>
        </Card>
    )
}