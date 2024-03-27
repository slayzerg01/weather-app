import { AirQuality, LocationData, weatherInfo as WeatherInfo, daysInfo as DaysInfo, Hourly, currentDayInfo as CurrentDayInfo } from "@/lib/definitions";
import { fetchAirQuality, fetchLocationCoordinates, fetchRealTimeWeather } from "@/lib/data";
import EmptyPage from "../empty-page";
import { MobileCardHeader } from "./modules/mobile-card-header";
import MobileCardBody from "./modules/mobile-card-body";

export default async function MobileCard ({
    location
}: {
    location: string
}) 
{
    const locationData: LocationData | null = await fetchLocationCoordinates(location)
    if (locationData == null) return EmptyPage()

    const weatherData: WeatherInfo | null = await fetchRealTimeWeather(locationData.latitude, locationData.longitude)
    if (weatherData == null) return EmptyPage()
    
    const airquality: AirQuality | null = await fetchAirQuality(locationData.latitude, locationData.longitude);
    if (airquality == null) return EmptyPage()
    
    const curDay: CurrentDayInfo  = weatherData.current 
    const days: DaysInfo = weatherData.daily
    const hourly: Hourly = weatherData.hourly

    return (
        <div className="flex flex-col rounded-2xl justify-start w-full bg-white dark:bg-zinc-800">
            <MobileCardHeader 
            location={locationData.name} 
            temperature={curDay.temperature}
            temperature_max={days.temperatureMax[0]}
            temperature_min={days.temperatureMin[0]} 
            weatheCode={curDay.weatherCode}
            weatheCodeText={curDay.weatherCodeText}
            time={curDay.time}/>
            <MobileCardBody days={days} current={curDay} airquality={airquality} hourly={hourly}/>
        </div>
    );
}
