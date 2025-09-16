import { createSlice } from "@reduxjs/toolkit";
import type { AuthState } from "../types/authType";

const initialState: AuthState = {
  token: null,
  userId: null,
  installLocation: null,
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
      state.token = null;
      state.userId = null;
      state.installLocation = null;
      localStorage.removeItem("token");
    },
  },
});

export const { clearToken, setToken } = authSlice.actions;
export default authSlice.reducer;
