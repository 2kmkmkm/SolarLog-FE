import { getInstallationInfo } from "@apis/info";
import Accordion from "@components/common/Accordion";
import Row from "@components/common/Row";
import { useQuery } from "@tanstack/react-query";
import { formatIsoToDotDate } from "@utils/dateUtils";

export default function InstallationInfoAccordion() {
  const { data } = useQuery({
    queryKey: ["installationInfo"],
    queryFn: getInstallationInfo,
  });

  const installation = data?.data;

  if (!installation) return null;

  return (
    <Accordion title="설치 정보">
      <Row label="설치일" unit={formatIsoToDotDate(installation.installDate)} />
      <Row label="설치 위치" unit={installation.installLocation} />
      <Row label="최초 출력값" unit={`${installation.initialPower} kw`} />
    </Accordion>
  );
}
