export function RightSideSkeleton() { 
    return (
        <div className="w-full rounded-r-2xl px-8 bg-gray-200 dark:bg-zinc-700">
            <div className="flex flex-col justify-start px-4 mb-8">
                <div className="h-5 bg-gray-300 dark:bg-zinc-600 rounded-full w-64 mb-6 mt-12 mx-4 animate-pulse"></div>
                <div className="weather-week flex flex-row justify-around">
                    <div style={{width: '12%'}} className="flex flex-col h-36 justify-around items-center bg-white dark:bg-zinc-800 rounded-xl animate-pulse"></div>
                    <div style={{width: '12%'}} className="flex flex-col h-36 justify-around items-center bg-white dark:bg-zinc-800 rounded-xl animate-pulse"></div>
                    <div style={{width: '12%'}} className="flex flex-col h-36 justify-around items-center bg-white dark:bg-zinc-800 rounded-xl animate-pulse"></div>
                    <div style={{width: '12%'}} className="flex flex-col h-36 justify-around items-center bg-white dark:bg-zinc-800 rounded-xl animate-pulse"></div>
                    <div style={{width: '12%'}} className="flex flex-col h-36 justify-around items-center bg-white dark:bg-zinc-800 rounded-xl animate-pulse"></div>
                    <div style={{width: '12%'}} className="flex flex-col h-36 justify-around items-center bg-white dark:bg-zinc-800 rounded-xl animate-pulse"></div>
                    <div style={{width: '12%'}} className="flex flex-col h-36 justify-around items-center bg-white dark:bg-zinc-800 rounded-xl animate-pulse"></div>
                </div>
            </div>
            <div className="flex flex-col justify-start p-2">
                <div className="h-5 bg-gray-300 dark:bg-zinc-600 rounded-full w-64 ml-4 mb-6 animate-pulse"></div>
                <div className="flex flex-row justify-between px-4 mb-6">
                    <CardSkeleton/>
                    <CardSkeleton/>
                    <CardSkeleton/>
                </div>
                <div className="flex flex-row justify-between p-4">
                    <CardSkeleton/>
                    <CardSkeleton/>
                    <CardSkeleton/>
                </div>
            </div>
        </div>
    )
}

function CardSkeleton() {
    return (
        <div style={{width: '32%'}} className="flex p-8 flex-col justify-start rounded-2xl text-black bg-white dark:bg-zinc-800 min-h-44 animate-pulse">
            <div className="h-3 bg-gray-200 dark:bg-zinc-600 rounded-full w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 dark:bg-zinc-600 rounded-full  max-w-[360px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 dark:bg-zinc-600 rounded-full mb-2.5"></div>
            <div className="h-2 bg-gray-200 dark:bg-zinc-600 rounded-full max-w-[330px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 dark:bg-zinc-600 rounded-full max-w-[300px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 dark:bg-zinc-600 rounded-full max-w-[360px]"></div>
        </div>
    )
}