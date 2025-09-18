import { Icon } from "@iconify/react/dist/iconify.js";
import { fetchWeather } from "@apis/weather";
import { useAppSelector } from "@hooks/useRedux";
import { useQuery } from "@tanstack/react-query";

export default function WeatherBox() {
  const location = useAppSelector((state) => state.auth.installLocation);

  const { data: weather } = useQuery({
    queryKey: ["weather"],
    queryFn: () => fetchWeather(location ?? ""),
  });

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
