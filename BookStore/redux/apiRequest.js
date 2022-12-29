import { useSelector } from "react-redux";
import requestAxios from "../view/utils/requestAxios";
import { createGioHangs, updateGioHangs } from "./slice/GioHangSlice";

const createGioHang = async (gioHang, dispatch) => {
  try {
    const gioTruocXuLy = gioHang.map((dataArr) => {
      return {
        KhachHangID: dataArr.KhachHangID._id,
        SanPham: dataArr.SanPham.map((i) => {
          return {
            SanPham_ID: i.SanPham_ID._id,
            TenSanPham: i.SanPham_ID.TenSanPham,
            HinhAnh: i.SanPham_ID.HinhAnh,
            Gia: i.SanPham_ID.Gia,
            SoLuongTong: i.SanPham_ID.SoLuong,
            SoLuongMua: i.SoLuong,
          };
        }),
      };
    });

    const data = {
      KhachHangID: gioTruocXuLy[0].KhachHangID,
      SanPham: gioTruocXuLy[0].SanPham.length > 0 ? gioTruocXuLy[0].SanPham : 0,
    };

    // console.log("LOG1: ", gioTruocXuLy);
    console.log("LOG2 apiRequest: ", data);
    dispatch(createGioHangs(data));
  } catch (error) {
    console.log("ERROR createGioHang apiRequest: ", error);
  }
};

const updateGioHang = (item, dispatch) => {
  try {
    const gioTruocXuLy = {
      KhachHangID: "idKhachHang",
      SanPham: {
        SanPham_ID: item._id,
        TenSanPham: item.TenSanPham,
        HinhAnh: item.HinhAnh,
        Gia: item.Gia,
        SoLuongTong: item.SoLuong,
        SoLuongMua: 1,
      },
    };

    console.log(gioTruocXuLy);
    dispatch(updateGioHangs(gioTruocXuLy))
  } catch (error) {
    console.log("ERROR updateGioHang apiRequest: ", error);
  }
};

export { createGioHang, updateGioHang };
