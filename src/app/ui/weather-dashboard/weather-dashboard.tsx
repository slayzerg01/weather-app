import WeatherDay from "./weather-day/weather-day";
import styles from '@/app/ui/home.module.scss';

function WeatherDashboard () {
    
    // document.documentElement.style.setProperty(`--app-${prop}`, theme[prop]));
    return (
        <div className="w-full bg-gray-300">
            <div className="weather-week flex flex-row justify-around p-5">
                <WeatherDay/>
                <WeatherDay/>
                <WeatherDay/>
                <WeatherDay/>
                <WeatherDay/>
                <WeatherDay/>
                <WeatherDay/>
            </div>
            <div className={styles.semidonut} style={{'--percentage': '40'}}>
                5
            </div>
        </div>
    );
}

export default WeatherDashboard;