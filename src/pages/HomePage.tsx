import WeatherBox from "@components/home/WeatherBox";
import TodayGeneration from "@components/home/TodayGeneration";
import Card from "@components/common/Card";

export default function HomePage() {
  return (
    <div className="pt-4 flex flex-col gap-3 flex-1">
      <div className="px-4 space-y-3">
        <WeatherBox location="광주광역시 북구 용봉동" />
        <TodayGeneration
          cumulativePower={500.5}
          totalDailyPower={40.2}
          power={12.1}
        />
      </div>
      <Card>그래프</Card>
    </div>
  );
}
