'use client'
import { MobileUvIndex } from "../elements/highlights/uv-index";
import { MobileWindBlock } from "../elements/highlights/wind-block";
import { MobileSunriseSunsetBlock } from "../elements/highlights/sunrise-sunset";
import { MobileHumidityBlock } from "../elements/highlights/humidity";
import { MobileAirQualityBlock } from "../elements/highlights/air-quality";
import { MobileSurfacePressure } from "../elements/highlights/pressure";
import { Suspense, useEffect } from "react";
import { currentDayInfo, daysInfo } from "@/lib/definitions";
import { AirQuality } from "@/lib/definitions";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import ReactSpeedometer from "react-d3-speedometer"

export function TodaysHighlights(
    {days, current, airquality}: {days: daysInfo, current: currentDayInfo, airquality: AirQuality}
) {
    return(
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                <Card className='dark:bg-zinc-800'>
                    <CardHeader className="pb-0">Feels like {current.aparentTemperature}°</CardHeader>
                    <CardBody className='flex flex-row pt-0 justify-between items-center'>
                        <div style={{height: "80px", overflow: 'hidden'}}>
                            <ReactSpeedometer
                                maxSegmentLabels={0}
                                width={140}
                                height={140}
                                needleHeightRatio={0.7}
                                ringWidth={10}
                                minValue={-40}
                                maxValue={45}
                                value={current.aparentTemperature}
                                currentValueText={""}
                                needleColor={'#bac4c8'}
                                customSegmentStops={[-40, 10, 25, 45]}
                                segmentColors={["#0096c7", "#006400", "#ff6e00"]}
                            />
                        </div>
                    </CardBody>
                </Card>
                <MobileSurfacePressure surfacePressure={current.surfacePressure}/>
                <Suspense>
                    <MobileUvIndex uvIndexMax={airquality.uvIndex}/>
                </Suspense>
                <Suspense>
                    <MobileWindBlock windDirection={current.windDirection} windSpeed={current.windSpeed}/>
                </Suspense>
                <MobileSunriseSunsetBlock sunrise={days.sunrise[0]} sunset={days.sunset[0]}/>
                <MobileHumidityBlock humidity={current.relativeHumidity}/>
                
                <MobileAirQualityBlock airquality={airquality}/>
                
        </div>
    )
}