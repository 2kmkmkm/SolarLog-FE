import { getPanelInfo } from "@apis/info";
import Box from "@components/common/Box";
import Row from "@components/common/Row";
import { useQuery } from "@tanstack/react-query";
import { getLeftLife } from "@utils/panelUtils";

export default function PanelInfoBox() {
  const { data } = useQuery({
    queryKey: ["panelInfo"],
    queryFn: getPanelInfo,
  });

  const panel = data?.data;

  const leftLife = getLeftLife(panel?.leftLife);

  if (!panel) return null;

  console.log(panel);

  return (
    <Box>
      <div className="heading1 text-sub">패널 정보</div>
      <Row label="모델명" unit={panel.modelName} />
      <Row label="제조사" unit={panel.maker} />
      <Row label="시리얼 넘버" unit={panel.serialNum} />
      <Row
        label="잔여 수명"
        num={leftLife}
        unit=""
        info="(현재 성능 - 80% 임계치) / 월별 평균 저하율"
      />
    </Box>
  );
}
