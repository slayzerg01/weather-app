export function LeftSideSkeleton() { 
    return (
        <div className="flex flex-col rounded-l-2xl justify-start items-center w-full bg-white dark:bg-zinc-800 p-4">
            <div className="flex items-center justify-center w-11/12 h-1/3 bg-gray-300 dark:bg-zinc-600 rounded mt-4 mb-8 animate-pulse">
                <svg className="w-10 h-10 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                </svg>
            </div>

            <div className="flex flex-col items-center flex-1 animate-pulse">
                <div className="h-4 bg-gray-200 dark:bg-zinc-600 rounded-full w-64 mb-8"></div>
                <div className="h-4 bg-gray-200 dark:bg-zinc-600 rounded-full w-64 mb-8"></div>
                <div className="h-4 bg-gray-200 dark:bg-zinc-600 rounded-full w-64 mb-8"></div>
                
                <div className="h-4 bg-gray-200 dark:bg-zinc-600 rounded-full w-64 mb-8"></div>      
                <div className="h-4 bg-gray-200 dark:bg-zinc-600 rounded-full w-64 mb-8"></div>
                
                <div className="h-4 bg-gray-200 dark:bg-zinc-600 rounded-full w-64 mb-8"></div>
                <div className="flex items-center justify-center w-11/12 h-1/3 bg-gray-300 dark:bg-zinc-600 rounded mt-4 mb-8">
                <svg className="w-10 h-10 text-gray-200 dark:bg-zinc-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                </svg>
            </div>
            </div>
        </div>
    )
}