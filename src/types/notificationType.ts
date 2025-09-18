export type notificationType = {
  alarmId: number;
  eventType: "결함" | "오염";
  eventDetail: "전기적" | "물리적" | "조류 배설물" | "먼지" | "눈";
  modelName: string;
  alarmDate: string;
  read: boolean;
};

export type notificationDetailType = {
  eventType: string;
  eventDetail: string;
  alarmDate: Date;
  image: string;
};
