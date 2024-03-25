import { Card, CardBody, CardHeader } from "@nextui-org/react";
import ReactSpeedometer from "react-d3-speedometer"

export function MobileTemperatureHighlight({aparentTemperature}: {aparentTemperature: number}) {
    return(
        <Card className='dark:bg-zinc-800'>
            <CardHeader className="pb-0">Feels like {aparentTemperature}°</CardHeader>
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
                        value={aparentTemperature}
                        currentValueText={""}
                        needleColor={'#bac4c8'}
                        customSegmentStops={[-40, 10, 25, 45]}
                        segmentColors={["#0096c7", "#006400", "#ff6e00"]}
                    />
                </div>
            </CardBody>
        </Card>
    )
}