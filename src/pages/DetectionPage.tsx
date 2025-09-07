import Accordion from "@components/common/Accordion";
import Header from "@components/common/Header";
import Row from "@components/common/Row";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function DetectionPage() {
  return (
    <>
      <Header title="결함 감지" />
      <div className="flex flex-col p-4 gap-4">
        <div className="w-full h-64 bg-bg flex items-center justify-center">
          <Icon icon="mdi-light:image" className="w-6 h-6 text-gray" />
        </div>

        <Accordion title="패널 정보">
          <Row label="모델명" unit="LG NeON R 405W" />
          <Row label="제조사" unit="LG Solar" />
          <Row label="시리얼 넘버" unit="LGNR405-JP-A9823746" />
        </Accordion>

        <Accordion title="설치 정보">
          <Row label="설치일" unit="2025.04.12" />
          <Row label="설치 위치" unit="광주광역시 북구 용봉동" />
          <Row label="최초 출력값" unit="4.19kW" />
        </Accordion>
      </div>
    </>
  );
}
