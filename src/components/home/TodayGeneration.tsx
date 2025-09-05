import Box from "@components/common/Box";
import GreenBox from "@components/common/GreenBox";
import Row from "@components/common/Row";
import { Icon } from "@iconify/react/dist/iconify.js";

type TodayGenerationProps = {
  power: number;
  totalDailyPower: number;
  cumulativePower: number;
};

export default function TodayGeneration({
  power,
  totalDailyPower,
  cumulativePower,
}: TodayGenerationProps) {
  return (
    <Box>
      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <Icon icon="game-icons:electric" className="text-sub w-5 h-5" />
          <span className="heading2 text-sub">오늘의 발전</span>
        </div>
        <button className="flex items-center gap-1">
          {/* 실시간 렌더링 추가 */}
          <span className="body3 text-gray">8.21 12:40</span>
          <Icon
            icon="ion:refresh-circle-outline"
            className="text-gray w-4 h-4"
          />
        </button>
      </div>
      <div className="flex items-center justify-between">
        <span className="body2 text-darkgray mx-1">누적 발전량</span>
        <div className="space-x-1">
          <span className="heading2 text-green">{cumulativePower}</span>
          <span className="body2 text-darkgray">MWh</span>
        </div>
      </div>
      <GreenBox>
        <Row label="현재 출력값" num={power} unit="kW" />
        <Row label="총 발전량" num={totalDailyPower} unit="kWh" />
      </GreenBox>
    </Box>
  );
}
