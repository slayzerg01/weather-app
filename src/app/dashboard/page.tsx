'use client'

//import { headers } from 'next/headers'
import { useSearchParams } from 'next/navigation'
import { Dashboard } from '../../ui/weather-dashboard/dashbard'
import { isMobile } from 'react-device-detect';
import EmptyPage from '../../ui/empty-page';
import MobileCard from '@/ui/weather-dashboard/MobileCard';


export default function Page() 
{   

    const searchParams = useSearchParams()
    const location = searchParams.get('location')
    if (location == null) return(EmptyPage())

    return ( 
        <main className="bg-gray-300 dark:bg-black flex flex-grow p-5">
            {isMobile ? (<MobileCard location={location}/>) : (<Dashboard location={location}/>)}  
        </main>
    )

}
