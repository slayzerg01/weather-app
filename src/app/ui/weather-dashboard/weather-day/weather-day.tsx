import Image from "next/image";

function WeatherDay(): JSX.Element {
    return (
        <div style={{width: '12%'}} className="flex flex-col justify-around items-center bg-white rounded-xl">
            <h2 className="text-black text-lg text-center font-semibold">Mon</h2>
            <Image className="" src="/sun-cloudy.png" width="100" height="100" alt="fdf"></Image>
            <p className="text-black">15°<span className="text-gray-500">/-5°</span></p>
        </div>
    );
}

export default WeatherDay;
