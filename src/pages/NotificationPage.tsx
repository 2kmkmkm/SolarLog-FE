import NotificationItem from "@components/notification/NotificationItem";
import type { notificationType } from "../types/notificationType";

const list: notificationType[] = [
  {
    alarmId: 1,
    alarmDate: "2025-04-05T10:15:00Z",
    modelName: "LG NeON R 405W",
    eventType: "결함",
    isRead: true,
  },
  {
    alarmId: 2,
    alarmDate: "2025-04-12T14:30:00Z",
    modelName: "Hanwha Q.PEAK DUO 400W",
    eventType: "오염",
    isRead: false,
  },
  {
    alarmId: 3,
    alarmDate: "2025-04-18T09:00:00Z",
    modelName: "LG NeON H 390W",
    eventType: "결함",
    isRead: false,
  },
  {
    alarmId: 4,
    alarmDate: "2025-04-25T16:45:00Z",
    modelName: "JA Solar DeepBlue 410W",
    eventType: "오염",
    isRead: true,
  },
  {
    alarmId: 5,
    alarmDate: "2025-04-28T08:20:00Z",
    modelName: "LG NeON R 405W",
    eventType: "결함",
    isRead: true,
  },
  {
    alarmId: 6,
    alarmDate: "2025-05-02T11:10:00Z",
    modelName: "Hanwha Q.PEAK DUO 400W",
    eventType: "오염",
    isRead: false,
  },
  {
    alarmId: 7,
    alarmDate: "2025-05-07T13:00:00Z",
    modelName: "JA Solar DeepBlue 410W",
    eventType: "결함",
    isRead: false,
  },
  {
    alarmId: 8,
    alarmDate: "2025-05-10T15:40:00Z",
    modelName: "LG NeON H 390W",
    eventType: "오염",
    isRead: true,
  },
  {
    alarmId: 9,
    alarmDate: "2025-05-15T09:25:00Z",
    modelName: "LG NeON R 405W",
    eventType: "결함",
    isRead: false,
  },
  {
    alarmId: 10,
    alarmDate: "2025-05-20T18:55:00Z",
    modelName: "Hanwha Q.PEAK DUO 400W",
    eventType: "오염",
    isRead: true,
  },
  {
    alarmId: 11,
    alarmDate: "2025-05-23T07:30:00Z",
    modelName: "JA Solar DeepBlue 410W",
    eventType: "결함",
    isRead: true,
  },
  {
    alarmId: 12,
    alarmDate: "2025-05-29T12:05:00Z",
    modelName: "LG NeON H 390W",
    eventType: "오염",
    isRead: false,
  },
];

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
      {sortedMonths.map((month) => (
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
      ))}
    </div>
  );
}
