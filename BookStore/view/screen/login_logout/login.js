import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  PermissionsAndroid,
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
// import ImagePicker from 'react-native-image-crop-picker';
import * as ImagePicker from "expo-image-picker";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

import requestAxios from "../../utils/requestAxios";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState({});

  const [isLogin, setIsLogin] = useState(false);
  const state = useSelector((s) => s.stateLogin.stateLogin);
  const [dataGH, setDataGH] = useState({});

  const [dataUser, setDataUser] = useState({});

  var d = useSelector((s) => s.gioHang);

  const dispatch = useDispatch();

  const [image, setImage] = useState(null);
  const cameraImages = async () => {
    // let result = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.All,
    //   allowsEditing: false,
    //   aspect: [4, 3],
    //   quality: 1,

    // });

    // console.log(result);
    // if (!result.canceled) {
    //   setImage(result.uri);
    // }

    const result = await launchImageLibrary({
      mediaType: "photo",
    });
  };

  ////////////////////////////////
  const code = () => {
    const deleteHoaDon = async () => {
      axios
        .delete("http://10.10.35.90:9000/v1/hoadon/delete/" + "63845a8494b6c21069d1c16c")
        .then((res) => {
          console.log("deletehahah");
        })
        .catch((er) => {
          console.log(er);
        });
    };
    deleteHoaDon();

    const getbyid = async () => {
      axios
        .get("http://10.10.35.90:9000/v1/hoadon/getbyid/" + "63845e3594b6c21069d1c173")
        .then((res) => {
          console.log(res.data);
        })
        .catch((er) => {
          console.log(er);
        });
    };
    getbyid()
  };

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
            Alert.alert("", "Sai m???t kh???u!", [
              {
                text: "OK",
              },
            ]);
          } else if (userData.stateLogin == "NoUser") {
            Alert.alert("", "B???n ch??a ????ng k?? t??i kho???n!", [
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
      Alert.alert("", "B???n ch??a nh???p s??? ??i???n tho???i!", [
        {
          text: "OK",
        },
      ]);
    } else if (user.MatKhau == "") {
      Alert.alert("", "B???n ch??a nh???p m???t kh???u!", [
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
      {/* <Image style={{ marginBottom: 30, width: 200, height: 200  }} source={{uri: image.source}} /> */}
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      {/* input user name */}
      <View
        style={{
          backgroundColor: COLORS.white,
          borderRadius: 30,
          width: "80%",
          height: 50,
          marginBottom: 20,
          alignItems: "center",
        }}
      >
        <TextInput
          style={{
            ...FONTS.h4,
            flex: 1,
            padding: 10,
            marginLeft: 20,
            marginRight: 20,
            alignItems: "center",
            width: "80%",
          }}
          placeholder="S??? ??i???n tho???i"
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
          backgroundColor: COLORS.white,
          borderRadius: 30,
          width: "80%",
          height: 45,
          marginBottom: 20,
          alignItems: "center",
        }}
      >
        <TextInput
          style={{
            ...FONTS.h4,
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
        onPress={code}
      >
        <Text>????ng Nh???p</Text>
      </TouchableOpacity>

      {/* button register */}
      <View
        style={{
          width: "100%",
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 40,
          flexDirection: "row",
        }}
        // onPress={}
      >
        <Text>B???n ch??a c?? t??i kho???n?</Text>
        <TouchableOpacity style={{}}>
          <Text style={{ color: COLORS.primary, ...FONTS.h4 }}> T???o m???i</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
