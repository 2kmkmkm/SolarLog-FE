import { Icon } from "@iconify/react/dist/iconify.js";
import { useState, useEffect } from "react";
import { getCoordsFromAddress, getWeather } from "@apis/weather";
import type { openWeatherType } from "../../types/weatherType";

export default function WeatherBox({ location }: { location: string }) {
  const [weather, setWeather] = useState<openWeatherType | null>(null);

  useEffect(() => {
    const handleWeatherSearch = async () => {
      try {
        const { lat, lon } = await getCoordsFromAddress(location);
        const weatherData = await getWeather(lat, lon);
        setWeather(weatherData);
      } catch (err) {
        console.error(err);
      }
    };

    handleWeatherSearch();
  }, []);

  return (
    <div className="flex px-4 py-3 bg-white rounded-2xl shadow-box justify-between items-center">
      <span className="body3">{location}</span>
      {weather && (
        <>
          <div className="flex gap-2">
            <div className="flex gap-px items-center">
              <Icon
                icon="fluent:temperature-16-regular"
                className="text-sub w-5 h-5"
              />
              <span className="body3">{weather.main.temp}°C</span>
            </div>
            <div className="flex gap-px items-center">
              <Icon
                icon="material-symbols-light:humidity-mid"
                className="text-skyblue w-5 h-5"
              />
              <span className="body3">{weather.main.humidity}%</span>
            </div>
          </div>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
            className="w-8 h-8"
          />
        </>
      )}
    </div>
  );
}
