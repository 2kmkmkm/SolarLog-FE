import Badge from "@components/common/Badge";
import GreenBox from "@components/common/GreenBox";
import Row from "@components/common/Row";
import DailyCalendar from "./DailyCalendar";
import { useState } from "react";
import { subDays } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import { getDailyGeneration, getDailyGraph } from "@apis/generation";
import Graph from "@components/common/Graph";
import { parseHours } from "@utils/parseHoursUtils";

export default function Daily() {
  const [selectedDate, setSelectedDate] = useState(subDays(new Date(), 1));

  const year = selectedDate.getFullYear();
  const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
  const day = String(selectedDate.getDate()).padStart(2, "0");
  const date = `${year}-${month}-${day}`;

  const { data: generation } = useQuery({
    queryKey: ["dailyGeneration", date],
    queryFn: () => getDailyGeneration(date),
    select: (res) => res.data,
  });

  const { data: graphList } = useQuery({
    queryKey: ["dailyGraph", date],
    queryFn: () => getDailyGraph(date),
    select: (res) => parseHours(res.data ?? []),
  });

  if (!generation || !graphList) return null;

  return (
    <div className="flex flex-col gap-3 py-4">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 w-full justify-center">
          <DailyCalendar
            currentDate={selectedDate}
            setCurrentDate={setSelectedDate}
          />
        </div>
        <Graph list={graphList} label="시" dataKey="hour" />
      </div>
      <div className="flex flex-col px-4 gap-3">
        <div className="w-full flex flex-col items-end">
          <Badge>
            <span className="body3_bold text-gray">전일 대비</span>
            {generation.dayCompared > 0 ? (
              <span className="body3 text-pink">
                ▲ +{generation.dayCompared}%
              </span>
            ) : generation.dayCompared < 0 ? (
              <span className="body3 text-blue">
                ▼ {Math.abs(generation.dayCompared)}%
              </span>
            ) : (
              <span className="body3 text-gray">- 0%</span>
            )}
          </Badge>
        </div>
        <GreenBox>
          <Row
            label="최고 출력 시간대"
            num={generation.peakPowerTime}
            unit="시"
          />
          <Row label="최고 출력량" num={generation.peakPower} unit="kW" />
          <Row label="총 발전량" num={generation.totalDailyPower} unit="kW" />
          <Row
            label="CO₂ 절감량"
            num={generation.co2Reduction}
            unit="kg"
            info="발전량(kWh) × 배출계수(kgCO₂/kWh)"
          />
        </GreenBox>
      </div>
    </div>
  );
}
