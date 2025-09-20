import Badge from "@components/common/Badge";
import GreenBox from "@components/common/GreenBox";
import Row from "@components/common/Row";
import MonthlyCalendar from "./MonthlyCalendar";
import { useState } from "react";
import { subMonths } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import { getMonthlyGeneration, getMonthlyGraph } from "@apis/generation";
import Graph from "@components/common/Graph";

export default function Monthly() {
  const [selectedMonth, setSelectedMonth] = useState(subMonths(new Date(), 1));

  const year = selectedMonth.getFullYear();
  const month = selectedMonth.getMonth() + 1;

  const { data: generation } = useQuery({
    queryKey: ["monthlyGeneration", year, month],
    queryFn: () => getMonthlyGeneration(year, month),
    select: (res) => res.data,
  });

  const { data: graphList } = useQuery({
    queryKey: ["dailyGraph", year, month],
    queryFn: () => getMonthlyGraph(year, month),
    select: (res) => res.data,
  });

  console.log("graphList: ", graphList);
  if (!generation || !graphList) return null;

  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 w-full justify-center">
          <MonthlyCalendar
            currentMonth={selectedMonth}
            setCurrentMonth={setSelectedMonth}
          />
        </div>
        <Graph list={graphList} label="일" dataKey="period" />
      </div>
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
        <Row label="최고 출력 일자" num={generation.peakPowerDay} unit="일" />
        <Row label="최고 출력량" num={generation.peakPower} unit="kW" />
        <Row label="총 발전량" num={generation.totalMonthlyPower} unit="kW" />
        <Row
          label="CO₂ 절감량"
          num={generation.co2Reduction}
          unit="kg"
          info="발전량(kWh) × 배출계수(kgCO₂/kWh)"
        />
      </GreenBox>
    </div>
  );
}
