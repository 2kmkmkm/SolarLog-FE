import Box from "@components/common/Box";
import Row from "@components/common/Row";
import { formatIsoToDotDate } from "@utils/dateUtils";
import { getInstallationInfo } from "@apis/info";
import { useQuery } from "@tanstack/react-query";

export default function InstallationInfoBox() {
  const { data } = useQuery({
    queryKey: ["installationInfo"],
    queryFn: getInstallationInfo,
  });

  const installation = data?.data;

  if (!installation) return null;

  return (
    <Box>
      <div className="heading1 text-sub">설치 정보</div>
      <Row label="설치일" unit={formatIsoToDotDate(installation.installDate)} />
      <Row label="설치 위치" unit={installation.installLocation} />
      <Row label="최초 출력값" unit={`${installation.initialPower} kw`} />
    </Box>
  );
}
