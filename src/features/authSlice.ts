import { createSlice } from "@reduxjs/toolkit";
import type { AuthState } from "../types/authType";

const initialState: AuthState = {
  token: null,
  userId: null,
  location: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      state.location = action.payload.location;
    },
    clearToken(state) {
      state.token = null;
      state.userId = null;
      state.location = null;
    },
  },
});

export const { clearToken, setToken } = authSlice.actions;
export default authSlice.reducer;
