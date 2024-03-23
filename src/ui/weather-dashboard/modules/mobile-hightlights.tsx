import { MobileUvIndex } from "../elements/highlights/uv-index";
import { MobileWindBlock } from "../elements/highlights/wind-block";
import { Suspense } from "react";
import { currentDayInfo, daysInfo } from "@/lib/definitions";
import { Tab, Tabs, Card, CardBody, CardHeader } from "@nextui-org/react";

export function TodaysHighlights(
    {days, current}: {days: daysInfo, current: currentDayInfo}
) {
    return(
        <div className="grid grid-cols-2 gap-2">
                <Suspense>
                    <MobileUvIndex uvIndexMax={days.uvIndexMax[0]}/>
                </Suspense>
                <Suspense>
                    <MobileWindBlock windDirection={current.windDirection} windSpeed={current.windSpeed}/>
                </Suspense>
                
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