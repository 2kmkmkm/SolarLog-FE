import Badge from "@components/common/Badge";
import GreenBox from "@components/common/GreenBox";
import Row from "@components/common/Row";
import Calendar from "./CalendarModal";
import { useState } from "react";
import { subDays } from "date-fns";

export default function Daily() {
  const [selectedDate, setSelectedDate] = useState(subDays(new Date(), 1));

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 w-full justify-center">
          <Calendar
            currentDate={selectedDate}
            setCurrentDate={setSelectedDate}
          />
        </div>
        <div className="w-full h-44 border"></div>
      </div>
      <div className="w-full flex flex-col items-end">
        <Badge>
          <span className="body3_bold text-gray">전일 대비</span>
          <span className="body3 text-pink">▲ +12%</span>
        </Badge>
      </div>
      <GreenBox>
        <Row label="최고 출력 시간대" num={13} unit="시" />
        <Row label="최고 출력량" num={11.4} unit="kW" />
        <Row label="총 발전량" num={43.1} unit="kW" />
        <Row
          label="CO₂ 절감량"
          num={0.01}
          unit="kg"
          info="발전량(kWh) × 배출계수(kgCO₂/kWh)"
        />
      </GreenBox>
    </div>
  );
}
