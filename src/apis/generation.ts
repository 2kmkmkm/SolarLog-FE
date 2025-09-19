import type { APIResponseType } from "../types/responseType";
import type {
  todayGenerationType,
  graphType,
  analysisType,
} from "../types/generation";
import { instance } from "./instance";

export const getTodayGeneration = () =>
  instance
    .get<APIResponseType<todayGenerationType>>("/dashboard/today")
    .then((res) => res.data);

export const getTodayGraph = () =>
  instance
    .get<APIResponseType<graphType[]>>("/dashboard/today-inquiry")
    .then((res) => res.data);

export const getDailyGeneration = (year: number, month: number, day: number) =>
  instance
    .get<APIResponseType<analysisType>>("/dashboard/daily", {
      params: { year, month, day },
    })
    .then((res) => res.data);

export const getDailyGraph = (year: number, month: number, day: number) =>
  instance
    .get<APIResponseType<graphType[]>>("/dashboard/daily-inquiry", {
      params: { year, month, day },
    })
    .then((res) => res.data);

export const getMonthlyGeneration = (year: number, month: number) => {
  instance.get<APIResponseType<analysisType>>("/dashboard/monthly", {
    params: { year, month },
  });
};

export const getMontlyGraph = (year: number, month: number) => {
  instance.get<APIResponseType<graphType[]>>("/dashboard/monthly-inquiry", {
    params: { year, month },
  });
};
