import { createSlice } from "@reduxjs/toolkit";
import type { panelInfoType, installInfoType } from "../types/userType";
import { login } from "./authThunk";

const initialState: panelInfoType & installInfoType = {
  modelName: "",
  maker: "",
  serialNum: "",
  installDate: "",
  installLocation: "",
  initialPower: "",
};

const panelSlice = createSlice({
  name: "panel",
  initialState,
  reducers: {
    setPanelInfo(state, action) {},
    setInstallInfo(state) {},
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {});
  },
});

export const { setPanelInfo, setInstallInfo } = panelSlice.actions;
export default panelSlice.reducer;
