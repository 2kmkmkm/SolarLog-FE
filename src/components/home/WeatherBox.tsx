import { Icon } from "@iconify/react/dist/iconify.js";

type WeatherBoxProps = {
  location: string;
  temperature: number;
  humidity: number;
  weather?: string;
};

export default function WeatherBox({
  location,
  temperature,
  humidity,
}: WeatherBoxProps) {
  return (
    <div className="flex px-4 py-3 bg-white rounded-2xl shadow-box justify-between items-center">
      <span className="body2">{location}</span>
      <div className="flex gap-2">
        <div className="flex gap-px items-center">
          <Icon
            icon="fluent:temperature-16-regular"
            className="text-sub w-5 h-5"
          />
          <span className="body3">{temperature}C</span>
        </div>
        <div className="flex gap-px items-center">
          <Icon
            icon="material-symbols-light:humidity-mid"
            className="text-skyblue w-5 h-5"
          />
          <span className="body3">{humidity}%</span>
        </div>
      </div>
      <Icon
        icon="streamline-ultimate:weather-sun-bold"
        className="text-yellow w-6 h-6"
      />
    </div>
  );
}
