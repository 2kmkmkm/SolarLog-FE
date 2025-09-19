import WeatherBox from "@components/home/WeatherBox";
import TodayGeneration from "@components/home/TodayGeneration";
import Card from "@components/common/Card";
import TodayGraph from "@components/home/TodayGraph";

export default function HomePage() {
  return (
    <div className="pt-4 flex flex-col gap-3 flex-1">
      <div className="px-4 space-y-3">
        <WeatherBox />
        <TodayGeneration />
      </div>
      <Card>
        <TodayGraph />
      </Card>
    </div>
  );
}
