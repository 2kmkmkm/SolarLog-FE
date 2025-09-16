import type { APIResponseType } from "../types/responseType";
import type { installationInfoType, panelType } from "../types//userType";
import { instance } from "./instance";

export const getPanelInfo = () => instance.get<APIResponseType<panelType>>("/mypage/panel").then((res)=>res.data);

export const getInstallationInfo = () => instance.get<APIResponseType<installationInfoType>>("/mypage/installation").then((res)=>res.data);

