import type { APIResponseType } from "../types/responseType";
import type {
  todayGenerationType,
  graphType,
  analysisType,
} from "../types/generationType";
import { instance } from "./instance";

export const getTodayGeneration = () =>
  instance
    .get<APIResponseType<todayGenerationType>>("/dashboard/today")
    .then((res) => res.data);

export const getTodayGraph = () =>
  instance
    .get<APIResponseType<graphType[]>>("/dashboard/today-inquiry")
    .then((res) => res.data);

export const getDailyGeneration = (date: string) =>
  instance
    .get<APIResponseType<analysisType>>("/dashboard/daily", {
      params: { date },
    })
    .then((res) => res.data);

export const getDailyGraph = (date: string) =>
  instance
    .get<APIResponseType<graphType[]>>("/dashboard/daily-inquiry", {
      params: { date },
    })
    .then((res) => res.data);

export const getMonthlyGeneration = (year: number, month: number) =>
  instance
    .get<APIResponseType<analysisType>>("/dashboard/monthly", {
      params: { year, month },
    })
    .then((res) => res.data);

export const getMonthlyGraph = (year: number, month: number) =>
  instance
    .get<APIResponseType<graphType[]>>("/dashboard/monthly-inquiry", {
      params: { year, month },
    })
    .then((res) => res.data);
