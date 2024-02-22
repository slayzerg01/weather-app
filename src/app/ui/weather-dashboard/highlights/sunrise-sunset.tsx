import Image from "next/image";

export async function SunriseSunsetBlock (
    { sunrise, sunset }: 
    { 
        sunrise: string, 
        sunset: string
    }
) {
    return (
        <>
            <span className="self-start text-gray-700 text-bold text-2xl mb-2">Sunrise & Sunset</span>
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