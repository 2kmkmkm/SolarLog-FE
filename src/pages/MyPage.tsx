import Badge from "@components/common/Badge";
import Box from "@components/common/Box";
import Row from "@components/common/Row";
import { useNavigate } from "react-router-dom";

export default function MyPage() {
  const nav = useNavigate();

  const handleLogoutClick = () => {
    // 로그아웃 로직 추가
    nav("/login");
  };
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-end">
          <span className="heading1 text-sub">02dlrudals</span>
          <span className="body1 text-darkgray pb-0.5">님, 안녕하세요!</span>
        </div>
        {/* 로그아웃 로직 추가 */}
        <Badge onClick={handleLogoutClick}>
          <span className="body3_bold text-gray">로그아웃</span>
        </Badge>
      </div>
      <Box>
        <div className="heading1 text-sub">패널 정보</div>
        <Row label="모델명" unit="LG NeON R 405W" />
        <Row label="제조사" unit="LG Solar" />
        <Row label="시리얼 넘버" unit="LGNR405-JP-A9823746" />
        <Row label="성능" unit="98.9%" status="정상" />
        <Row label="잔여 수명" unit="2y 1m" info="잔여 수명 공식 추후에 추가" />
      </Box>
      <Box>
        <div className="heading1 text-sub">설치 정보</div>
        <Row label="설치일" unit="2025.04.12" />
        <Row label="설치 위치" unit="광주광역시 북구 용봉동" />
        <Row label="최초 출력값" unit="4.19kW" />
      </Box>
    </div>
  );
}
