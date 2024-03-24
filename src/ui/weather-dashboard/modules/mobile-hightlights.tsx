import { MobileUvIndex } from "../elements/highlights/uv-index";
import { MobileWindBlock } from "../elements/highlights/wind-block";
import { MobileSunriseSunsetBlock } from "../elements/highlights/sunrise-sunset";
import { MobileHumidityBlock } from "../elements/highlights/humidity";
import { MobileAirQualityBlock } from "../elements/highlights/air-quality";
import { MobileSurfacePressure } from "../elements/highlights/pressure";
import { Suspense } from "react";
import { currentDayInfo, daysInfo } from "@/lib/definitions";
import { AirQuality } from "@/lib/definitions";

export function TodaysHighlights(
    {days, current, airquality}: {days: daysInfo, current: currentDayInfo, airquality: AirQuality}
) {
    return(
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                <Suspense>
                    <MobileUvIndex uvIndexMax={days.uvIndexMax[0]}/>
                </Suspense>
                <Suspense>
                    <MobileWindBlock windDirection={current.windDirection} windSpeed={current.windSpeed}/>
                </Suspense>
                <MobileSunriseSunsetBlock sunrise={days.sunrise[0]} sunset={days.sunset[0]}/>
                <MobileHumidityBlock humidity={current.relativeHumidity}/>
                <MobileSurfacePressure surfacePressure={current.surfacePressure}/>
                <MobileAirQualityBlock airquality={airquality}/>
        </div>
    )
}