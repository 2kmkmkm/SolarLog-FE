import Accordion from "@components/common/Accordion";
import Header from "@components/common/Header";
import Row from "@components/common/Row";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function DetectionPage() {
  return (
    <>
      <Header title="결함 감지" />
      <div className="w-full h-64 bg-bg flex items-center justify-center">
        <Icon icon="mdi-light:image" className="w-6 h-6 text-gray" />
      </div>
      <Accordion title="패널 정보">
        <Row label="모델명" unit="LG NeON R 405W" />
        <Row label="제조사" unit="LG Solar" />
        <Row label="시리얼 넘버" unit="LGNR405-JP-A9823746" />
        <Row label="성능 저하율" unit="98.9%" status="정상" />
        <Row label="잔여 수명" unit="2년 1개월" />
      </Accordion>
    </>
  );
}
