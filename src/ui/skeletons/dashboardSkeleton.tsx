import { LeftSideSkeleton } from "./leftSide";
import { RightSideSkeleton } from "./rightSide";

export function DashboardSkeleton() {
    return (

        <main className="flex flex-grow p-5 bg-gray-300 dark:bg-black">
        <div className="flex flex-row flex-grow mx-auto max-w-full rounded-2xl">
            <div style={{width: '20%'}} className="flex flex-grow"> 
                <LeftSideSkeleton/>
            </div>
            <div style={{width: '80%'}} className="flex flex-grow">
                <RightSideSkeleton/>
            </div>
        </div>
        </main>

    );
}