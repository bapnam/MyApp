import { createSlice } from "@reduxjs/toolkit";

export const gioHangSlice = createSlice({
  name: "GioHang",
  initialState: {
    KhachHangID: "KhachHangID",
    SanPham: [
      {
        SanPham_ID: "SanPham_ID",
        TenSanPham: "TenSanPham",
        HinhAnh: "HinhAnh",
        Gia: 1,
        SoLuongTong: 1,
        SoLuongMua: 1,
      },
    ],
  },

  reducers: {
    createGioHangs: (state, action) => {
      state.KhachHangID = action.payload.KhachHangID;
      state.SanPham = action.payload.SanPham;
    },
    updateGioHangs: (state, action) => {
      state.KhachHangID = state.KhachHangID;
      state.SanPham = [...state.SanPham, action.payload.SanPham];
    },
  },
});

export const { updateGioHangs, createGioHangs } = gioHangSlice.actions;
export default gioHangSlice.reducer;
