import NotificationItem from "@components/notification/NotificationItem";
import type { notificationType } from "../types/notificationType";

const list: notificationType[] = [];

const groupByMonth = (list: notificationType[]) => {
  return list.reduce((acc, item) => {
    const monthKey = `${new Date(item.alarmDate).getFullYear()}년 ${
      new Date(item.alarmDate).getMonth() + 1
    }월`;
    if (!acc[monthKey]) acc[monthKey] = [];
    acc[monthKey].push(item);
    return acc;
  }, {} as Record<string, notificationType[]>);
};

const grouped = groupByMonth(list);

const sortedMonths = Object.keys(grouped).sort((a, b) => {
  const [yearA, monthA] = a.match(/\d+/g)!.map(Number);
  const [yearB, monthB] = b.match(/\d+/g)!.map(Number);

  if (yearA !== yearB) return yearB - yearA;
  return monthB - monthA;
});

export default function NotificationPage() {
  return (
    <div className="p-4 flex flex-col gap-4">
      {sortedMonths.length > 0 ? (
        sortedMonths.map((month) => (
          <div key={month} className="flex flex-col gap-2">
            <div className="heading2 text-sub">{month}</div>
            <div className="flex flex-col gap-px">
              {grouped[month]
                .slice()
                .reverse()
                .map((item) => (
                  <NotificationItem key={item.alarmId} {...item} />
                ))}
            </div>
          </div>
        ))
      ) : (
        <div className="body2 text-gray text-center mt-4">
          데이터가 없습니다
        </div>
      )}
    </div>
  );
}
