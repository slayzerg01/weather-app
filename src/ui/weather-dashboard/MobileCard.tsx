import { LocationData, weatherInfo } from "@/lib/definitions";
import { fetchLocationCoordinates, fetchRealTimeWeather } from "@/lib/data";
import EmptyPage from "../empty-page";
import { MobileCardHeader } from "./modules/mobile-card-header";


export default async function MobileCard ({
    location
}: {
    location: string
}) 
{
    const locationData: LocationData | null = await fetchLocationCoordinates(location)
    if (locationData == null) return EmptyPage()

    const weatherData: weatherInfo | null = await fetchRealTimeWeather(locationData.latitude, locationData.longitude)
    if (weatherData == null) return EmptyPage()
    const curDay = weatherData.current 
    const days = weatherData.daily

    return (
        <div className="flex flex-col rounded-2xl justify-start w-full bg-white dark:bg-zinc-800">
            <MobileCardHeader 
            location={location} 
            temperature={curDay.temperature}
            temperature_max={days.temperatureMax[0]}
            temperature_min={days.temperatureMin[0]} />
        </div>
    );
}


