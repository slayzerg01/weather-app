'use client'
import { daysInfo } from "@/lib/definitions";
import { Tab, Tabs, Card, CardBody, CardHeader } from "@nextui-org/react";
import MobileWeatherDailyForecast from "../elements/weather-day/mobile-daily-forecast";
import { currentDayInfo } from "@/lib/definitions";
import { TodaysHighlights } from "./mobile-hightlights";
import { Provider } from "./provider";

export default function MobileCardBody({days, current}: {days: daysInfo, current: currentDayInfo}) {
    return(
        <div className="flex flex-col flex-grow bg-gray-200 dark:bg-zinc-700 rounded-2xl p-4">
            <Tabs variant="underlined" aria-label="Dynamic tabs">
                <Tab title='Daily forecast'>
                    <MobileWeatherDailyForecast days={days}/>
                </Tab>
                <Tab title='Todays highlights'>
                    <TodaysHighlights days={days} current={current}/>
                </Tab>
            </Tabs>
        </div>
    )
}