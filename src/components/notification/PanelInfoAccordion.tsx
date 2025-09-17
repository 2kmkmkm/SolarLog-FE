import { getPanelInfo } from "@apis/info";
import Accordion from "@components/common/Accordion";
import Row from "@components/common/Row";
import { useQuery } from "@tanstack/react-query";

export default function PanelInfoAccordion() {
  const { data } = useQuery({
    queryKey: ["panelInfo"],
    queryFn: getPanelInfo,
  });

  const panel = data?.data;

  if (!panel) return null;

  console.log(panel);
  return (
    <Accordion title="패널 정보">
      <Row label="모델명" unit={panel.modelName} />
      <Row label="제조사" unit={panel.maker} />
      <Row label="시리얼 넘버" unit={panel.serialNum} />
    </Accordion>
  );
}
