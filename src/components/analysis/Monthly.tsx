import Badge from "@components/common/Badge";
import GreenBox from "@components/common/GreenBox";
import Row from "@components/common/Row";
import MonthlyCalendar from "./MonthlyCalendar";
import { useState } from "react";
import { subMonths } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import { getMonthlyGeneration } from "@apis/generation";

export default function Monthly() {
  const [selectedMonth, setSelectedMonth] = useState(subMonths(new Date(), 1));

  const year = selectedMonth.getFullYear();
  const month = selectedMonth.getMonth() + 1;

  const { data } = useQuery({
    queryKey: ["monthly", year, month],
    queryFn: () => getMonthlyGeneration(year, month),
  });

  const monthly = data?.data;

  if (!monthly) return null;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 w-full justify-center">
          <MonthlyCalendar
            currentMonth={selectedMonth}
            setCurrentMonth={setSelectedMonth}
          />
        </div>
        <div className="w-full h-44 border"></div>
      </div>
      <div className="w-full flex flex-col items-end">
        <Badge>
          <span className="body3_bold text-gray">전일 대비</span>
          {monthly.dayCompared > 0 ? (
            <span className="body3 text-pink">▲ +{monthly.dayCompared}%</span>
          ) : monthly.dayCompared < 0 ? (
            <span className="body3 text-blue">
              ▼ {Math.abs(monthly.dayCompared)}%
            </span>
          ) : (
            <span className="body3 text-gray">- 0%</span>
          )}
        </Badge>
      </div>
      <GreenBox>
        <Row label="최고 출력 일자" num={monthly.peakPowerTime} unit="시" />
        <Row label="최고 출력량" num={monthly.peakPower} unit="kW" />
        <Row label="총 발전량" num={monthly.totalMonthlyPower} unit="kW" />
        <Row
          label="CO₂ 절감량"
          num={monthly.co2Reduction}
          unit="kg"
          info="발전량(kWh) × 배출계수(kgCO₂/kWh)"
        />
      </GreenBox>
    </div>
  );
}
