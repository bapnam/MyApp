import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
} from "react-native";
import { useSelector } from "react-redux";
import { FONTS, COLORS, SIZES, icons } from "../../constants";

// const gioHang = useSelector((state) => {
//   state.gioHang.khachHangID;
// });

const CartScreen = ({ route, navigation }) => {
  const [book, setBook] = useState(null);
  const [scrollViewWholeHeight, setScrollViewWholeHeight] = useState(1);
  const [scrollViewVisibleHeight, setScrollViewVisibleHeight] = useState(0);

  const gioHang = useSelector((state) => state.gioHang);

  useEffect(() => {
    // updateGioHang("id", dispatch)
    console.log("GIO: ", gioHang);
  }, []);

  const renderHeaderCart = () => {
    return (
      <View style={{ height: "100%" }}>
        {/* Color Overlay */}
        <View
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: "rgba(240,240,232,0.9)",
          }}
        ></View>

        {/* Navigation header */}
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: SIZES.radius,
            height: "100%",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{ marginLeft: SIZES.base }}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={icons.back_arrow_icon}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: "#000",
              }}
            />
          </TouchableOpacity>

          <View
            style={{
              alignItems: "center",
              justifyContent: "flex-start",
              paddingLeft: SIZES.padding,
            }}
          >
            <Text style={{ ...FONTS.h2 }}>Giỏ hàng</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderBookDescription = () => {
    return gioHang.SanPham.length > 0 ? (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          paddingLeft: SIZES.padding,
        }}
      >
        <ScrollView>
          {gioHang.SanPham.map((items) => (
            <View style={{ marginVertical: SIZES.base }}>
              <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}>
                {/* Book Cover */}
                <Image
                  source={{
                    uri: "http://10.10.43.8:9000/publics/images/HinhAnh-1668677136887.jpg",
                  }}
                  resizeMode="cover"
                  style={{ width: "20%", height: 150, borderRadius: 10 }}
                />

                <View
                  style={{ flex: 1, marginLeft: SIZES.radius, width: "10%" }}
                >
                  {/* Book name */}
                  <View style={{ width: "100%", marginLeft: SIZES.base }}>
                    <Text
                      style={{
                        paddingRight: SIZES.padding,
                        ...FONTS.h2,
                        color: COLORS.white,
                        flex: 1,

                        width: "100%",
                      }}
                    >
                      {items.TenSanPham}
                    </Text>
                  </View>

                  {/* Book Info */}
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: SIZES.radius,
                      marginLeft: SIZES.base,
                    }}
                  >
                    <Image
                      source={icons.dong_icon}
                      resizeMode="contain"
                      style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.lightGray,
                      }}
                    />
                    <Text
                      style={{
                        ...FONTS.body3,
                        color: COLORS.lightGray,
                        paddingHorizontal: SIZES.radius,
                      }}
                    >{items.Gia}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    ) : (
      <></>
    );
  };

  const renderBottomButton = () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          padding: SIZES.radius,
          // borderTopColor: COLORS.lightBlue,
          // borderTopWidth: 2,
          elevation: 3,
        }}
      >
        <Text style={{ ...FONTS.h3, color: COLORS.white, height: "30%" }}>
          Start Reading
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            height: "70%",
            // borderTopColor: COLORS.lightBlue,
            // borderTopWidth: 2,
            elevation: 4,
          }}
        >
          <Text
            style={{
              ...FONTS.h4,
              color: COLORS.white,
              marginHorizontal: SIZES.base,
              marginVertical: SIZES.base,
              width: "55%",
              textAlignVertical: "center",
            }}
          >
            Tổng thanh toán:{" "}
          </Text>
          <TouchableOpacity
            alignItems="flex-end"
            style={{
              backgroundColor: COLORS.primary,
              marginHorizontal: SIZES.base,
              marginVertical: SIZES.base,
              borderRadius: SIZES.radius,
              alignItems: "center",
              justifyContent: "center",
              width: "40%",
            }}
            onPress={() => navigation.navigate()}
          >
            <Text style={{ ...FONTS.h3, color: COLORS.white }}>
              Start Reading
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  // if (book) {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.black }}>
      {/* Book Cover Section */}
      <View style={{ height: "7%" }}>{renderHeaderCart()}</View>

      {/* Description */}
      <View style={{ height: "78%" }}>{renderBookDescription()}</View>

      {/* Buttons */}
      <View style={{ height: "15%", flexDirection: "column" }}>
        {renderBottomButton()}
      </View>
    </View>
  );
  // } else {
  //   return <></>;
  // }
};

export default CartScreen;
