import { Dashboard } from '../../ui/weather-dashboard/dashbard'
import EmptyPage from '../../ui/empty-page';
import MobileCard from '@/ui/weather-dashboard/MobileCard';
import { getDeviceType } from '@/lib/utils';


export default function Page({
    searchParams,
    }: {
    searchParams: { [key: string]: string | undefined };
    }) 
{   
    const location= searchParams["location"];
    if (location == undefined) return(EmptyPage())
    
    return ( 
        <main className="bg-gray-300 dark:bg-black flex flex-grow p-5">
            {getDeviceType() == 'mobile' ? (<MobileCard location={location as string}/>) : (<Dashboard location={location as string}/>)}  
        </main>
    )
}


