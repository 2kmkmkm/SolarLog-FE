import { Icon } from "@iconify/react/dist/iconify.js";
import Badge from "@components/common/Badge";
import GreenBox from "@components/common/GreenBox";
import Row from "@components/common/Row";

export default function Daily() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 w-full justify-center">
          {/* 캘린더 기능 추가 */}
          <button>
            <Icon icon="ion:chevron-back" className="w-4 h-4 text-gray" />
          </button>
          <button className="body1 text-darkgray">2025년 9월 29일</button>
          <button>
            <Icon
              icon="ion:chevron-back"
              className="w-4 h-4 text-gray scale-x-[-1]"
            />
          </button>
        </div>
        <div className="w-full h-44 border"></div>
      </div>
      <div className="w-full flex flex-col items-end">
        <Badge>
          <span className="body3 text-gray">전일 대비</span>
          <span className="body3 text-pink">▲ +12%</span>
        </Badge>
      </div>
      <GreenBox>
        <Row label="최고 출력 시간대" num={13} unit="시" />
        <Row label="최고 출력량" num={11.4} unit="kW" />
        <Row label="총 발전량" num={43.1} unit="kW" />
        <Row label="CO₂ 절감량" num={0.01} unit="kg" />
      </GreenBox>
    </div>
  );
}
