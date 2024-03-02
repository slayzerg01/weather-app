import Image from "next/image"

export async function SurfacePressure (
    { surfacePressure }: 
    { 
        surfacePressure: number, 
    }
) {
    return (
        <div className="flex flex-row justify-between flex-1">
            <div className="flex flex-col">
                <span className="self-start text-gray-700 text-bold text-2xl mb-6">Pressure</span>
                <span className="ml-2 align-middle text-gray-500 text-bold text-4xl">{Math.ceil(surfacePressure)} hPa</span>
            </div>
            <Image className="mr-6 self-center" src="/pressure.png" width="100" height="100" alt="pressure"/>
        </div>
    )
}