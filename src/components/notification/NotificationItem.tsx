import { Icon } from "@iconify/react/dist/iconify.js";
import type { notificationType } from "../../types/notificationType";
import { formatIsoToDayOfWeekTime } from "@utils/DateUtils";

export default function NotificationItem({
  eventType,
  modelName,
  alarmDate,
  isRead = false,
}: notificationType) {
  const date = formatIsoToDayOfWeekTime(alarmDate);

  return (
    <button
      className={`${
        isRead && "opacity-50"
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
          에 ~~한 {eventType}이 감지되었습니다
        </span>
      </div>
    </button>
  );
}
