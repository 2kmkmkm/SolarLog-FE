import { createSlice } from "@reduxjs/toolkit";
import type { AuthState } from "../types/authType";
import { login } from "./authThunk";

const initialState: AuthState = {
  token: undefined,
  userId: null,
  installLocation: null,
  isLoading: false,     // 로그인 API 상태
  initialized: false,   // 앱 시작 시 토큰 복구 여부
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      state.installLocation = action.payload.installLocation;
      state.initialized = true;
    },
    clearToken(state) {
      state.token = null;
      state.userId = null;
      state.installLocation = null;
      state.initialized = true;
      localStorage.removeItem("token");
    },
    finishInit(state) {
      state.initialized = true; // 토큰 없더라도 복구 시도 끝
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.userId = action.payload.userId;
        state.installLocation = action.payload.installLocation;
        state.initialized = true;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.initialized = true;
      });
  },
});

export const { clearToken, setToken, finishInit } = authSlice.actions;
export default authSlice.reducer;
