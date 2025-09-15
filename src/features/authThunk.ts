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
      const token = data.accessToken;
      const payload = decodeToken(token);

      return {
        token,
        userId: payload.userId,
        location: payload.location,
      };
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      return rejectWithValue(error.response?.data?.message ?? "Login failed");
    }
  }
);
