import Header from "./ui/header";
import Footer from "./ui/footer";
import MainCard from "./ui/mainCard";
import WeatherDashboard from "./ui/weather-dashboard/weather-dashboard";
import { weatherInfo } from "./lib/definitions";
import { fetchRealTimeWeather } from "./lib/data";

export default  async function Home() {

  const latitude: number = 45.61667;
  const longitude: number = 63.31667;
  const location = 'baikonur'
  const weatherData: weatherInfo = await fetchRealTimeWeather(latitude, longitude) as weatherInfo;
  const currenetDay = weatherData.current;
  const days = weatherData.daily;

  return (
    <>  
      <div className="flex flex-col h-screen">
        <Header/> 
        <main className="flex flex-grow p-5 bg-gray-300">
          <div className="flex flex-row flex-grow mx-auto max-w-full rounded-2xl">
            <div style={{width: '20%'}} className="flex flex-grow"> 
              <MainCard currentDay={currenetDay}/> 
            </div>
            <div style={{width: '80%'}} className="flex flex-grow">
              <WeatherDashboard 
              days={days} 
              currentDay={currenetDay}
              latitude={latitude}
              longitude={longitude}
              /> 
            </div>
          </div>
        </main>
        {/* <Footer/> */}
      </div>
    </>
  );
}
