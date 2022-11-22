import { configureStore } from "@reduxjs/toolkit";
import gioHangSlice from "./slice/GioHangSlice";
import loginSlice from "./slice/LoginSlice";

export default configureStore({
  reducer: {
    gioHang: gioHangSlice,
    stateLogin: loginSlice,
  },
});
