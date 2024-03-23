import { DashboardSkeleton } from "../../ui/skeletons/dashboardSkeleton";
import { getDeviceType } from "@/lib/utils";

export default function Loading() {
    return ( <>{ getDeviceType() == 'mobile' ? ( <div>dsf </div>) : (<DashboardSkeleton />)} </>)
}
