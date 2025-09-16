import { instance } from "@apis/instance";
import type {
  accountType,
  panelInfoType,
  installationInfoType,
} from "../types/userType";

export const postLogin = (userId: string, password: string) =>
  instance.post("/users/login", { userId, password }).then((res)=>res.data);

export const postSignup = (
  formData: accountType & panelInfoType & installationInfoType
) => instance.post("/signup", formData).then((res)=>res.data);

export const getCheckedId = (userId: string) =>
  instance.get("/signup/check-id", {params: {userId}}).then((res)=>res.data);
