import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { COLORS, FONTS, icons, images, SIZES } from "../../../constants";
import { updateGioHang } from "../../../redux/apiRequest";
import { updateUser } from "../../../redux/slice/LoginSlice";

import requestAxios from "../../utils/requestAxios";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const state = useSelector((s) => s.stateLogin.stateLogin);
  const [dataGH, setDataGH] = useState({});

  const [dataUser, setDataUser] = useState({});

  var d = useSelector((s) => s.gioHang);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateUser(dataUser));
  }, [dataUser]);

  const handleLogin = () => {
    const user = {
      SDT: "0915900674",
      MatKhau: "12345678",
    };
    const post = async () => {
      await requestAxios
        .post("/khachhang/dangnhap", user)
        .then(async (res) => {
          // console.log(res.data);
          const userData = {
            stateLogin: res.data.stateLogin,
            idUser: res.data.idUser,
            nameUser: res.data.nameUser,
          };
          setDataUser(userData);
          if (dataUser.stateLogin == "NoPassword") {
            console.log("NoPassword");
          } else if (dataUser.stateLogin == "NoUser") {
            console.log("NoUser");
          } else if (dataUser.stateLogin == "Yes") {
            console.log("BookStore");
            await requestAxios
              .post("/giohang/getbyidkh", {
                KhachHangID: "637258e9e2d54ada862da556",
              })
              .then((res) => {
                dispatch(updateUser(dataUser));
                updateGioHang(res.data, dispatch);
                navigation.navigate("BookStore");
              })
              .catch((err) => {
                console.log("ERRR: login: ", err);
              });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const goHome = () => {};

    post();
    goHome();
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* image book store */}
      <Image style={{ marginBottom: 30 }} source={icons.bookstore} />

      {/* input user name */}
      <View
        style={{
          backgroundColor: "#FFC0CB",
          borderRadius: 30,
          width: "80%",
          height: 50,
          marginBottom: 20,
          alignItems: "center",
        }}
      >
        <TextInput
          style={{
            ...FONTS.h3,
            height: "auto",
            flex: 1,
            padding: 10,
            marginLeft: 20,
            marginRight: 20,
          }}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      {/* input password */}
      <View
        style={{
          backgroundColor: "#FFC0CB",
          borderRadius: 30,
          width: "70%",
          height: 45,
          marginBottom: 20,
          alignItems: "center",
        }}
      >
        <TextInput
          style={{
            ...FONTS.h3,
            height: 50,
            flex: 1,
            padding: 10,
          }}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={{ height: 30, marginBottom: 30 }}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* button login */}
      <TouchableOpacity
        style={{
          width: "80%",
          borderRadius: 25,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 40,
          backgroundColor: "#FF1493",
        }}
        onPress={handleLogin}
      >
        <Text style={{}}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
