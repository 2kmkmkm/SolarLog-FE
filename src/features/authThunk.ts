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
      const { data } = await postLogin(userId, password);

      if (!data.success) {
        return rejectWithValue(data.message);
      }

      const token = data.accessToken;

      localStorage.setItem("token", token);
      const payload = decodeToken(token);

      return {
        token,
        userId: payload.userId,
        installLocation: payload.installLocation,
        success: data.success,
        message: data.message,
      };
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      return rejectWithValue(error.response?.data?.message ?? "Login failed");
    }
  }
);
