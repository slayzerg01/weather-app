import Image from "next/image";

export async function WindBlock (
    { windDirection, windSpeed }: 
    { 
        windDirection: number,
        windSpeed: number
    }
) {
    const clientDirection = get_wind_direction(windDirection);
    return (
        <>  
            <div className="flex flex-row flex-1 justify-between">
                <div className="flex flex-col">
                    <span className="self-start text-gray-700 text-bold text-2xl mb-6">Wind status</span>
                    <span className="flex ml-2 text-center text-gray-500 text-bold text-4xl">{windSpeed} m/s</span>
                </div>
                <div className="flex flex-1 flex-row items-center justify-end">
                    <span className="self-center mr-4 text-gray-500 text-bold text-4xl">{clientDirection.name}</span>
                    <Image style={{rotate: `${ clientDirection.degree - 45}deg`}} className="mr-6"
                    src="/navigator.png" width="100" height="100" alt="sunset image" />
                </div>
            </div>
        </>
    )
}

type ClientDirection = {
    degree: number;
    name: string;
}

function get_wind_direction(direction: number): ClientDirection {

    const degrees = [0, 45, 90, 135, 180, 225, 270, 315];
    const names = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']

    let min = 1000;
    let index = 0;

    degrees.map( (degree, i) => {
        let dif = Math.abs(degree - direction);
        if (dif < min) {
            min = dif;
            index = i;
        }
    });

    const result: ClientDirection = {
        degree: degrees[index],
        name: names[index]
    };

    return result;
}