import { useSelector } from "react-redux";
import requestAxios from "../view/utils/requestAxios";
import { updateGioHangs } from "./slice/GioHangSlice";

const updateGioHang = async (gioHang, dispatch) => {
  try {
    const gh = {
      KhachHangID: "kakakak",
      SanPham: [
        {
          SanPham_ID: "kakakak",
          TenSanPham: "kakakak",
          SoLuongTong: 1,
          HinhAnh: "kakakak",
          Gia: 1,
          SoLuongMua: 1,
        },
      ],
    };

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

    console.log("LOG1: ", gioTruocXuLy);
    console.log("LOG2: ", data);
    dispatch(updateGioHangs(data));
  } catch (error) {
    console.log("JAJAJ: ", error);
  }
};

export { updateGioHang };
