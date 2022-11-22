import React, { useEffect, useState } from "react";
import { View } from "react-native";
import RootView from "./view/RootView";
import store from "./redux/store";
import { Provider, useSelector } from "react-redux";
import requestAxios from "./view/utils/requestAxios";

const App = () => {
  // const [gioHang, setGioHang] = useState([]);

  // useEffect(() => {
  //   const get = async () => {
  //     await requestAxios
  //       .post("/giohang/getbyidkh", { KhachHangID: "637258e9e2d54ada862da556" })
  //       .then((res) => {
  //         setGioHang(res.data)
          

  //       })
  //       .catch((err) => {
  //         console.log("ERRR: ", err);
  //       });
  //   };

  //   get();
  // }, []);

  return (
    <Provider store={store}>
      <RootView />
    </Provider>
  );
};

export default App;
