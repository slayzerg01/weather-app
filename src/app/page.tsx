import Header from "./ui/header";
import Footer from "./ui/footer";
import MainCard from "./ui/mainCard";
import WeatherDashboard from "./ui/weather-dashboard/weather-dashboard";

export default function Home() {
  return (
    <>  
      <div className="flex flex-col h-screen">
        <Header/> 
        <main className="flex flex-grow p-5 bg-gray-300">
          <div className="flex flex-row flex-grow mx-auto max-w-full py-6 rounded-2xl sm:px-6 lg:px-8 bg-gray-200">
            <div style={{width: '20%'}} className="flex flex-grow"> 
              <MainCard/> 
            </div>
            <div style={{width: '80%'}} className="flex flex-grow">
              <WeatherDashboard/> 
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    </>
  );
}
