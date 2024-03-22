import { daysInfo } from "@/lib/definitions";
import { Tab, Tabs, Card, CardBody, CardHeader } from "@nextui-org/react";
import MobileWeatherDailyForecast from "../elements/weather-day/mobile-daily-forecast";
import { MobileUvIndex } from "../elements/highlights/uv-index";
import { Suspense } from "react";

export default function MobileCardBody({days}: {days: daysInfo}) {
    return(
        <div className="flex flex-col flex-grow bg-gray-200 dark:bg-zinc-700 rounded-2xl p-4">
            <Tabs variant="underlined" aria-label="Dynamic tabs">
                <Tab title='Daily forecast'>
                    <MobileWeatherDailyForecast days={days}/>
                </Tab>
                <Tab title='Todays highlights'>
                    <TodaysHighlights days={days}/>
                </Tab>
            </Tabs>
        </div>
    )
}

function TodaysHighlights(
    {days}: {days: daysInfo}
) {
    return(
        <div className="grid grid-cols-2 gap-2">
            <Suspense fallback={<>pchel</>}>
                <MobileUvIndex uvIndexMax={days.uvIndexMax[0]}/>
            </Suspense>
            <Card>
                <CardHeader>Chel</CardHeader>
                <CardBody>csdcsdc</CardBody>
            </Card>
            <Card>
                <CardHeader>Chel</CardHeader>
                <CardBody>csdcsdc</CardBody>
            </Card>
            <Card>
                <CardHeader>Chel</CardHeader>
                <CardBody>csdcsdc</CardBody>
            </Card>
        </div>
    )
}