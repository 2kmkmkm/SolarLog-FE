import { createSlice } from "@reduxjs/toolkit";
import type { AuthState } from "../types/authType";
import { login } from "./authThunk";

const initialState: AuthState = {
  token: null,
  userId: null,
  installLocation: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      state.installLocation = action.payload.installLocation;
    },
    clearToken(state) {
      state.token = undefined;
      state.userId = null;
      state.installLocation = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true; // 로그인 시작
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false; // 로그인 성공
        state.token = action.payload.token;
        state.userId = action.payload.userId;
        state.installLocation = action.payload.installLocation;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false; // 로그인 실패
      });
  },
});

export const { clearToken, setToken } = authSlice.actions;
export default authSlice.reducer;
