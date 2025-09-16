import { instance } from "@apis/instance";
import type {
  accountType,
  panelInfoType,
  installInfoType,
} from "../types/userType";

export const postLogin = (userId: string, password: string) =>
  instance.post("/users/login", { userId, password });

export const postSignup = (
  formData: accountType & panelInfoType & installInfoType
) => instance.post("/signup", { formData });

export const postCheckedId = (userId: string) =>
  instance.post(`/signup/check-id?userId=${userId}`);
