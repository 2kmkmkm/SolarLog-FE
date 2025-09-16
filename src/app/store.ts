import { configureStore } from "@reduxjs/toolkit";
import authSlice from "@features/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  middleware: (getDefault) =>
    getDefault({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
