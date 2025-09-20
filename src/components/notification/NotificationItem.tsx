import { Icon } from "@iconify/react/dist/iconify.js";
import type { notificationType } from "../../types/notificationType";
import { useNavigate } from "react-router-dom";
import { formatIsoToDayOfWeekTime } from "@utils/dateUtils";
import { postAlarmRead } from "@apis/detection";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function NotificationItem({
  alarmId,
  eventType,
  eventDetail,
  modelName,
  alarmDate,
  read,
}: notificationType) {
  const nav = useNavigate();
  const date = formatIsoToDayOfWeekTime(alarmDate);

  // userQuery 전역 캐시 핸들로, 캐시 무효화/강제 refetch 등에 사용
  const queryClient = useQueryClient();

  // invalidateQueries : 특정 queryKey와 연결된 캐시 데이터를 stale(구버전) 상태로 표시함
  // stale 상태가 되면,
  // 해당 데이터를 쓰는 컴포넌트가 마운트되어 있으면 자동으로 refetch 실행
  // 마운트되어 있지 않으면 다음에 해당 쿼리가 필요할 때 새로 fetch
  const { mutate: readAlarm } = useMutation({
    mutationFn: postAlarmRead,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["history"] });
    },
  });

  const handleItemClick = async () => {
    readAlarm(alarmId);
    nav(`/detection/${alarmId}`);
  };

  return (
    <button
      onClick={handleItemClick}
      className={`${
        read && "opacity-70 hover:opacity-30"
      } bg-white p-3 flex flex-col gap-2 rounded-[10px]`}
    >
      <div className="flex justify-between">
        <div className="flex gap-1">
          <Icon
            icon={eventType === "오염" ? "mdi:dirty" : "mingcute:fault-fill"}
            className="w-4 h-4 text-yellow"
          />
          <span className="body3 text-darkgray">{eventType}</span>
        </div>
        <span className="body3 text-gray">{date}</span>
      </div>
      <div className="flex whitespace-nowrap  w-full">
        <span className="body2_bold text-green">{modelName}</span>
        <span className="body2 text-darkgray truncate">
          에 {eventDetail}이 감지되었습니다
        </span>
      </div>
    </button>
  );
}
