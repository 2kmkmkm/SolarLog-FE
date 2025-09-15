import { instance } from "@apis/instance";

export const postLogin = (userId: string, password: string) =>
  instance.post("/users/login", { userId, password });
