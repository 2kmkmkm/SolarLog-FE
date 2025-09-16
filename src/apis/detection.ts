import type { APIResponseType } from "../types/responseType";
import type { notificationType } from "../types/notificationType";
import { instance } from "./instance";

export const postFCMToken = (fcmToken: string) => instance.post("/fcm/registers", fcmToken);

export const getHistoryList = () => instance.get<APIResponseType<notificationType[]>>("/history").then((res)=>res.data);

export const getHistoryDetail = () => instance.get("/history/details").then((res)=>res.data);

export const postAlarmRead = (alarmId: number) => instance.post(`/alarm/read/${alarmId}`).then((res)=>res.data);