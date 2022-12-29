import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { COLORS, FONTS, icons, images, SIZES } from "../../../constants";
import { createGioHang } from "../../../redux/apiRequest";
import { updateUser } from "../../../redux/slice/LoginSlice";

import requestAxios from "../../utils/requestAxios";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState({});

  const [isLogin, setIsLogin] = useState(false);
  const state = useSelector((s) => s.stateLogin.stateLogin);
  const [dataGH, setDataGH] = useState({});

  const [dataUser, setDataUser] = useState({});

  var d = useSelector((s) => s.gioHang);

  const dispatch = useDispatch();

  useEffect(() => {
    const u = {
      SDT: "0915900674",
      MatKhau: "12345678",
    };
    setUser(u);
  }, []);

  const handleLogin = () => {
    const getData = async (id) => {
      await requestAxios
        .post("/giohang/getbyidkh", {
          KhachHangID: "637258e9e2d54ada862da556",
        })
        .then((res) => {
          dispatch(updateUser(dataUser));
          createGioHang(res.data, dispatch);
          navigation.navigate("BookStore");
        })
        .catch((err) => {
          console.log("ERRR: login: ", err);
        });
    };
    const post = async () => {
      await requestAxios
        .post("/khachhang/dangnhap", { SDT: user.SDT, MatKhau: user.MatKhau })
        .then((res) => {
          // console.log(res.data);
          const userData = {
            stateLogin: res.data.stateLogin,
            idUser: res.data.idUser,
            nameUser: res.data.nameUser,
          };

          if (userData.stateLogin == "NoPassword") {
            Alert.alert("", "Sai mật khẩu!", [
              {
                text: "OK",
              },
            ]);
          } else if (userData.stateLogin == "NoUser") {
            Alert.alert("", "Bạn chưa đăng ký tài khoản!", [
              {
                text: "OK",
              },
            ]);
          } else {
            console.log("BookStore");
            setDataUser(userData);
            getData();
          }
        })
        .catch((error) => {
          console.log("ERR: ", error);
        });
    };

    const goHome = () => {
      Alert.alert("", typeof user.SDT, [
        {
          text: "OK",
        },
      ]);
    };

    if (user.SDT == "") {
      Alert.alert("", "Bạn chưa nhập số điện thoại!", [
        {
          text: "OK",
        },
      ]);
    } else if (user.MatKhau == "") {
      Alert.alert("", "Bạn chưa nhập mật khẩu!", [
        {
          text: "OK",
        },
      ]);
    } else {
      post();
    }
    

    // goHome();
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* image book store */}
      <Image style={{ marginBottom: 30 }} source={icons.bookstore} />

      {/* input user name */}
      <View
        style={{
          backgroundColor: COLORS.lightGray,
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
            flex: 1,
            padding: 10,
            marginLeft: 20,
            marginRight: 20,
            alignItems: "center",
            width: "80%",
          }}
          placeholder="Số điện thoại"
          placeholderTextColor="#003f5c"
          // value= "0915900674"
          onChangeText={(email) => {
            user.SDT = email;
            // console.log("MAMAM: ", user);
          }}
        />
      </View>

      {/* input password */}
      <View
        style={{
          backgroundColor: COLORS.lightGray,
          borderRadius: 30,
          width: "80%",
          height: 45,
          marginBottom: 20,
          alignItems: "center",
        }}
      >
        <TextInput
          style={{
            ...FONTS.h3,
            flex: 1,
            padding: 10,
            marginLeft: 20,
            marginRight: 20,
            alignItems: "center",
            width: "80%",
          }}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          // value= "12345678"
          onChangeText={(password) => {
            user.MatKhau = password;
            // console.log("MAMAM: ", user);
          }}
        />
      </View>

      {/* Forgot Password */}
      {/* <TouchableOpacity>
        <Text style={{ height: 30, marginBottom: 30 }}>Forgot Password?</Text>
      </TouchableOpacity> */}

      {/* button login */}
      <TouchableOpacity
        style={{
          width: "80%",
          borderRadius: 25,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 40,
          backgroundColor: COLORS.primary,
        }}
        onPress={handleLogin}
      >
        <Text style={{}}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
