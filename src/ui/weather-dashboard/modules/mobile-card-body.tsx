'use client'
import { daysInfo, LocationData, AirQuality } from "@/lib/definitions";
import { Tab, Tabs } from "@nextui-org/react";
import MobileWeatherDailyForecast from "../elements/weather-day/mobile-daily-forecast";
import { currentDayInfo } from "@/lib/definitions";
import { TodaysHighlights } from "./mobile-hightlights";

export default function MobileCardBody({days, current, airquality}: 
    {days: daysInfo, 
    current: currentDayInfo, 
    location: LocationData,
    airquality: AirQuality
}) {
    return(
        <div className="flex flex-col flex-grow bg-gray-200 dark:bg-zinc-700 rounded-2xl p-4">
            <Tabs variant="underlined" aria-label="Dynamic tabs">
                <Tab title='Todays highlights'>
                    <TodaysHighlights days={days} current={current} airquality={airquality}/>
                </Tab>
                <Tab title='Hourly'>
                    {/* to do */}
                </Tab>
                <Tab title='Daily'>
                    <MobileWeatherDailyForecast days={days}/>
                </Tab>
            </Tabs>
        </div>
    )
}