import { getPanelInfo } from "@apis/info";
import Box from "@components/common/Box";
import Row from "@components/common/Row";
import { useQuery } from "@tanstack/react-query";
import { getLeftLife, getStatus } from "@utils/panelUtils";

export default function PanelInfoBox() {
  const { data } = useQuery({
    queryKey: ["panelInfo"],
    queryFn: getPanelInfo,
  });

  const panel = data?.data;

  const leftLife = getLeftLife(panel?.leftLife);
  const status = getStatus(panel?.capability);

  if (!panel) return null;

  console.log(panel);

  return (
    <Box>
      <div className="heading1 text-sub">패널 정보</div>
      <Row label="모델명" unit={panel.modelName} />
      <Row label="제조사" unit={panel.maker} />
      <Row label="시리얼 넘버" unit={panel.serialNum} />
      <Row label="성능" unit={`${String(panel.capability)}%`} status={status} />
      <Row
        label="잔여 수명"
        unit={leftLife}
        info="잔여 수명 공식 추후에 추가"
      />
    </Box>
  );
}
