import { postLogin } from "@apis/user";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { decodeToken } from "@utils/decodeToken";
import { AxiosError } from "axios";

export const login = createAsyncThunk(
  "auth/login",
  async (
    { userId, password }: { userId: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await postLogin(userId, password);

      if (!res.success) {
        return rejectWithValue(res.message);
      }

      const token = res.data.accessToken;

      localStorage.setItem("token", token);
      const payload = decodeToken(token);

      return {
        token,
        userId: payload.sub,
        installLocation: payload.installLocation,
        success: res.success,
        message: res.message,
      };
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      return rejectWithValue(error.response?.data?.message ?? "로그인 실패");
    }
  }
);
