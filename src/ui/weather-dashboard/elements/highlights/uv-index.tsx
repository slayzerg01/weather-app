import styles from '@/ui/home.module.scss';
import { Card, CardBody, CardHeader } from '@nextui-org/react';

export async function UvIndex (
    { uvIndexMax }: 
    { 
        uvIndexMax: number, 
    }
) {
    return (
        <>
            <div className='flex flex-col'>
                <span className="text-gray-700 dark:text-white text-bold text-2xl mb-6">UV Index</span>
                <span className="ml-2 text-gray-500 text-bold text-4xl">{get_uv_index_status(uvIndexMax)}</span>
            </div>
            <div className={`${styles.semidonut} self-center mr-4`}
                style={
                    {['--percentage' as any] : `${uvIndexMax*8.33}`,
                    ['--fill' as any] : `${get_uv_index_color(uvIndexMax)}`}
                    }>
                    {uvIndexMax}
            </div>
            
        </>
    )
}

export async function MobileUvIndex (
    { uvIndexMax }: 
    { 
        uvIndexMax: number, 
    }
) {
    return (
        <Card className='dark:bg-zinc-800'>
            <CardHeader>UV Index</CardHeader>
            <CardBody className='flex flex-col'>
                <div className={`${styles.semidonutMobile} self-center mx-auto mb-2`}
                    style={
                        {['--percentage' as any] : `${uvIndexMax*8.33}`,
                        ['--fill' as any] : `${get_uv_index_color(uvIndexMax)}`}
                        }>
                        {uvIndexMax}
                </div>
                <span className="self-center text-bold">{get_uv_index_status(uvIndexMax)}</span>
            </CardBody>
        </Card>
    )
}

function get_uv_index_color(uvIndex: number) {
    if (uvIndex <= 2) {
        return '#00FF00'
    } else if (uvIndex <= 5) {
        return '#FFFF00'
    } else if (uvIndex <= 7) {
        return '#FFA500'
    } else if (uvIndex <= 10) {
        return '#ff0000'
    } else {
        return '#7F00FF'
    }
}

function get_uv_index_status(uvIndex: number) {
    if (uvIndex <= 2) {
        return 'Low'
    } else if (uvIndex <= 5) {
        return 'Moderate'
    } else if (uvIndex <= 7) {
        return 'High'
    } else if (uvIndex <= 10) {
        return 'Very High'
    } else {
        return 'Extreme'
    }
}