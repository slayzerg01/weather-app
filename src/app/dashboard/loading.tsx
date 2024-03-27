import { DashboardSkeleton } from "@/ui/skeletons/dashboardSkeleton";
import { MobileSkeleton } from "@/ui/skeletons/MobileSkeleton";
import { getDeviceType } from "@/lib/dieviceType";

export default function Loading() {
    return ( 
        <main className="bg-gray-300 dark:bg-black flex flex-grow p-5">
            { getDeviceType() == 'mobile' ? (<MobileSkeleton/>) : (<DashboardSkeleton />)} 
        </main>
    )
}


