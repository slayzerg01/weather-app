import Image from "next/image";

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