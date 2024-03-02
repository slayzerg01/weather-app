import styles from '@/app/ui/home.module.scss';

export async function UvIndex (
    { uvIndexMax }: 
    { 
        uvIndexMax: number, 
    }
) {
    return (
        <>
            <div className='flex flex-col'>
                <span className="text-gray-700 text-bold text-2xl mb-6">UV Index</span>
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