import Box from "@components/common/Box";
import GreenBox from "@components/common/GreenBox";
import Row from "@components/common/Row";
import { Icon } from "@iconify/react/dist/iconify.js";
import { formatIsoToMonthDayTime } from "@utils/dateUtils";
import { useEffect, useState } from "react";
import { getTodayGeneration } from "@apis/generation";
export default function TodayGeneration() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [rotating, setRotating] = useState(false);

  const [cumulativePower, setCumulativePower] = useState(0);
  const [power, setPower] = useState(0);
  const [totalDailyPower, setTotalDailyPower] = useState(0);

  const dateTime = formatIsoToMonthDayTime(currentTime);

  const fetchTodayGeneration = async () => {
    try {
      const res = await getTodayGeneration();

      if (res.success) {
        setCumulativePower(res.data.cumulativePower);
        setPower(res.data.power);
        setTotalDailyPower(res.data.totalDailyPower);
      } else alert(res.message);
    } catch (err) {
      console.log("fetchTodayGeneration Error: ", err);
    }
  };

  const handleTimeClick = () => {
    const time = new Date();

    fetchTodayGeneration();

    setRotating(true);
    setTimeout(() => setRotating(false), 1000);
    setCurrentTime(time);
  };

  useEffect(() => {
    fetchTodayGeneration();
  }, []);

  return (
    <Box>
      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <Icon icon="game-icons:electric" className="text-sub w-5 h-5" />
          <span className="heading2 text-sub">오늘의 발전</span>
        </div>
        <button className="flex items-center gap-1" onClick={handleTimeClick}>
          <span className="body3 text-gray">{dateTime}</span>
          <Icon
            icon="ion:refresh-circle-outline"
            className={`text-gray w-4 h-4 ${
              rotating ? "animate-spinOnce" : ""
            }`}
          />
        </button>
      </div>
      <div className="flex items-center justify-between">
        <span className="body2 text-darkgray mx-1">누적 발전량</span>
        <div className="space-x-1">
          <span className="heading2 text-green">
            {cumulativePower.toLocaleString()}
          </span>
          <span className="body2 text-darkgray">Wh</span>
        </div>
      </div>
      <GreenBox>
        <Row label="현재 출력값" num={Number(power.toFixed(1))} unit="W" />
        <Row
          label="총 발전량"
          num={Number(totalDailyPower.toFixed(1))}
          unit="Wh"
        />
      </GreenBox>
    </Box>
  );
}
