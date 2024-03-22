import MainCard from "../ui/weather-dashboard/mainCard";
import WeatherDashboard from "../ui/weather-dashboard/weather-dashboard";
import { weatherInfo, LocationData } from "../lib/definitions";
import { fetchRealTimeWeather, fetchLocationCoordinates } from "../lib/data";
import { headers } from 'next/headers'
import MobileCard from "../ui/weather-dashboard/MobileCard";


export default async function Page({
    params,
    searchParams,
    }: {
        params: { slug: string };
        searchParams?: { [key: string]: string | string[] | undefined };
    }) 
{   
    
    const deviceType = getDeviceType()
    if (!searchParams?.location) return emptyPage();

    const locationData: LocationData | null = await fetchLocationCoordinates(searchParams?.location as string);
    if (locationData == null) return emptyPage();

    const weatherData: weatherInfo = await fetchRealTimeWeather(locationData.latitude, locationData.longitude) as weatherInfo;

    if (deviceType == 'mobile') 
    return(
            <main className="bg-gray-300 dark:bg-black flex flex-grow p-5">
                <div className="flex flex-row flex-grow mx-auto max-w-full rounded-2xl">
                </div>
            </main>

    )
    else
    return ( 
        <main className="bg-gray-300 dark:bg-black flex flex-grow p-5">
            <div className="flex flex-row flex-grow mx-auto max-w-full rounded-2xl">
                <div style={{width: '20%'}} className="flex flex-grow"> 
                    <MainCard currentDay={weatherData.current} locationName={locationData.name}/> 
                </div>
                <div style={{width: '80%'}} className="flex flex-grow">
                    <WeatherDashboard 
                    days={weatherData.daily} 
                    currentDay={weatherData.current}
                    latitude={locationData.latitude}
                    longitude={locationData.longitude}
                    /> 
                </div>
            </div>
        </main>
    )

}

function emptyPage() {
    return (
        <main className="flex flex-grow flex-row items-center p-5 bg-gray-300">
            <span className="mx-auto text-4xl text-black"> Data not found </span>
        </main>
    )
}

export const getDeviceType = () => {
    const headersList = headers()
    const userAgent = headersList.get('user-agent')
    
    return userAgent!.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
    ? 'mobile'
    : 'desktop'
}