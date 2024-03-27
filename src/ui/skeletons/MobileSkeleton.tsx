import { Card } from "@nextui-org/react";

export function MobileSkeleton() {
    return (

        <div className="flex flex-col rounded-2xl justify-start w-full bg-white dark:bg-zinc-800">
            <div className="flex flex-row items-center justify-around p-4 animate-pulse min-h-[1/4]">
        
                <div className="flex flex-col animate-pulse py-4">
                    <div className="h-2 bg-gray-200 dark:bg-zinc-600 rounded-full w-64 mb-4"></div>
                    <div className="h-2 bg-gray-200 dark:bg-zinc-600 rounded-full w-64 mb-4"></div>
                    <div className="h-2 bg-gray-200 dark:bg-zinc-600 rounded-full w-64 "></div>
                </div>
                
                <svg className="w-10 h-10 text-gray-200 animate-pulse" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                </svg>

            </div>

            <div className="flex flex-col flex-grow bg-gray-200 dark:bg-zinc-700 rounded-2xl p-4 ">
                <div className="flex flex-col"> 
                    <div className="flex flex-row justify-start gap-6 m-2 animate-pulse">
                        <div className="h-3 bg-gray-200 dark:bg-zinc-600 rounded-full w-28"></div>
                        <div className="h-3 bg-gray-200 dark:bg-zinc-600 rounded-full w-16"></div>
                        <div className="h-3 bg-gray-200 dark:bg-zinc-600 rounded-full w-16"></div>
                    </div>
                </div>
                <div className="flex-grow grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2 animate-pulse">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card className="col-span-2"></Card>
                </div>
            </div>
        </div>

    );
}