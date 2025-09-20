import Badge from "@components/common/Badge";
import GreenBox from "@components/common/GreenBox";
import Row from "@components/common/Row";
import DailyCalendar from "./DailyCalendar";
import { useState } from "react";
import { subDays } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import { getDailyGeneration } from "@apis/generation";

export default function Daily() {
  const [selectedDate, setSelectedDate] = useState(subDays(new Date(), 1));

  const year = selectedDate.getFullYear();
  const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
  const day = String(selectedDate.getDate()).padStart(2, "0");

  const date = `${year}-${month}-${day}`;

  const { data } = useQuery({
    queryKey: ["daily", date],
    queryFn: () => getDailyGeneration(date),
  });

  const daily = data?.data;

  if (!daily) return null;

  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 w-full justify-center">
          <DailyCalendar
            currentDate={selectedDate}
            setCurrentDate={setSelectedDate}
          />
        </div>
        <div className="w-full h-44 border"></div>
      </div>
      <div className="w-full flex flex-col items-end">
        <Badge>
          <span className="body3_bold text-gray">전일 대비</span>
          {daily.dayCompared > 0 ? (
            <span className="body3 text-pink">▲ +{daily.dayCompared}%</span>
          ) : daily.dayCompared < 0 ? (
            <span className="body3 text-blue">
              ▼ {Math.abs(daily.dayCompared)}%
            </span>
          ) : (
            <span className="body3 text-gray">- 0%</span>
          )}
        </Badge>
      </div>
      <GreenBox>
        <Row label="최고 출력 시간대" num={daily.peakPowerTime} unit="시" />
        <Row label="최고 출력량" num={daily.peakPower} unit="kW" />
        <Row label="총 발전량" num={daily.totalDailyPower} unit="kW" />
        <Row
          label="CO₂ 절감량"
          num={daily.co2Reduction}
          unit="kg"
          info="발전량(kWh) × 배출계수(kgCO₂/kWh)"
        />
      </GreenBox>
    </div>
  );
}
