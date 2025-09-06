export type notificationType = {
  alarmId?: number;
  eventType: "결함" | "오염";
  modelName: string;
  alarmDate: string;
  isRead: boolean;
};