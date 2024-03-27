'use client'
import { daysInfo, AirQuality, Hourly, currentDayInfo  } from "@/lib/definitions";
import { Tab, Tabs } from "@nextui-org/react";
import MobileWeatherDailyForecast from "../elements/weather-day/mobile-daily-forecast";
import { TodaysHighlights } from "./mobile-hightlights";
import MobileHourlyForecast from "../elements/hourly/MobileHourlyForecast";

export default function MobileCardBody({days, current, airquality, hourly}: 
    {days: daysInfo, 
    current: currentDayInfo, 
    airquality: AirQuality
    hourly: Hourly
}) {
    return(
        <div className="flex flex-col flex-grow bg-gray-200 dark:bg-zinc-700 rounded-2xl p-4">
            <Tabs variant="underlined" aria-label="Dynamic tabs">
                <Tab title='Todays highlights'>
                    <TodaysHighlights days={days} current={current} airquality={airquality}/>
                </Tab>
                <Tab title='Hourly'>
                    <MobileHourlyForecast hourly={hourly}/>
                </Tab>
                <Tab title='Daily'>
                    <MobileWeatherDailyForecast days={days}/>
                </Tab>
            </Tabs>
        </div>
    )
}