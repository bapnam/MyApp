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
    updateGioHangs: (state, action) => {
      state.KhachHangID = action.payload.KhachHangID;
      state.SanPham = action.payload.SanPham;
    },
  },
});

console.log(11111111111111);

export const { updateGioHangs } = gioHangSlice.actions;
export default gioHangSlice.reducer;
