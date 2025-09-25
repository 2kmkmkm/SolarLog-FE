import Header from "@components/common/Header";
import InstallationInfoAccordion from "@components/notification/InstallationInfoAccordion";
import PanelInfoAccordion from "@components/notification/PanelInfoAccordion";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useQuery } from "@tanstack/react-query";
import { formatIsoToDotDay } from "@utils/dateUtils";
import { getHistoryDetail } from "@apis/detection";
import { useGlobalLoading } from "@hooks/useGlobalLoading";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import LoadingScreen from "@components/common/LoadingScreen";

export default function DetectionPage() {
  const { isLoading, delay } = useGlobalLoading();
  const nav = useNavigate();
  const { alarmId } = useParams();

  useEffect(() => {
    if (delay) nav("/*");
  }, [delay, nav]);

  const { data } = useQuery({
    queryKey: ["detection", alarmId],
    queryFn: () => getHistoryDetail(alarmId ?? ""),
  });

  const detection = data?.data;

  if (!detection) return null;

  console.log(detection);

  return (
    <>
      <Header title={`${detection.eventType} 감지`} />
      <div className="relative flex flex-col flex-1">
        {isLoading && <LoadingScreen />}
        <div className="flex flex-col p-4 gap-4">
          <div className="flex flex-col gap-1">
            <div className="heading2 text-darkgray text-center">
              {formatIsoToDotDay(detection.alarmDate)}
            </div>
            <div className="body2 text-darkgray text-center">
              패널에{" "}
              <span className="body2_bold text-sub">
                {detection.eventDetail}
              </span>
              이 발생했습니다.
            </div>
          </div>

          <div className="w-full h-64 bg-bg flex items-center justify-center">
            {detection.image ? (
              <img src={detection.image} className="w-full h-full" />
            ) : (
              <Icon icon="mdi-light:image" className="w-6 h-6 text-gray" />
            )}
          </div>

          <PanelInfoAccordion />
          <InstallationInfoAccordion />
        </div>
      </div>
    </>
  );
}
