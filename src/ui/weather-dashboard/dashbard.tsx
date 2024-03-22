import CardLeftSide from "./card-left-side";
import CardRightSide from "./card-right-side";
import EmptyPage from "../empty-page";
import { weatherInfo, LocationData } from "@/lib/definitions";
import { fetchRealTimeWeather, fetchLocationCoordinates } from "@/lib/data";

export async function Dashboard({
        location
    }: {
        location: string
    }) {


    const locationData: LocationData | null = await fetchLocationCoordinates(location)
    if (locationData == null) return EmptyPage()

    const weatherData: weatherInfo = await fetchRealTimeWeather(locationData.latitude, locationData.longitude) as weatherInfo

    return(
        <div className="flex flex-row flex-grow mx-auto max-w-full rounded-2xl">
            <div style={{width: '20%'}} className="flex flex-grow"> 
                <CardLeftSide currentDay={weatherData.current} locationName={locationData.name}/> 
            </div>
            <div style={{width: '80%'}} className="flex flex-grow">
                <CardRightSide 
                days={weatherData.daily} 
                currentDay={weatherData.current}
                latitude={locationData.latitude}
                longitude={locationData.longitude}
                /> 
            </div>
        </div>
    )
}
