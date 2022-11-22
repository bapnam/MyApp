import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  StatusBar,
  Dimensions,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { COLORS, FONTS, SIZES, icons, images } from "../../constants";
import requestAxios from "../utils/requestAxios";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const LineDivider = () => {
  return (
    <View style={{ width: 1, paddingVertical: 18 }}>
      <View
        style={{
          flex: 1,
          borderLeftColor: COLORS.lightGray,
          borderLeftWidth: 1,
        }}
      ></View>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  //*************** */
  const [sach, setSach] = useState();
  const [arrSach, setArrSach] = useState([]);

  const gioHang = useSelector((state) => state.gioHang)

  useEffect(() => {
    const getAll = async () => {
      await requestAxios
        .get("/sanpham/getall")
        .then((res) => {
          const valueBooks = res.data.map((item) => {
            return {
              _id: item._id,
              TenSanPham: item.TenSanPham,
              NXB: item.NXB.TenNXB,
              TacGia: item.TacGia.map((i) => {
                return i.TenTacGia;
              }),
              SoLuong: item.SoLuong,
              LoaiSach: item.LoaiSach.map((i) => {
                return i.TenLoaiSach;
              }),
              Gia: item.Gia,
              HinhAnh: item.HinhAnh,
              MoTa: item.MoTa,
            };
          });

          setSach(valueBooks);

          // LOG
          const d = new Date();
          // console.log(
          //   "\n==>NLOG-1 TIME==> " + d.toLocaleTimeString() + ": ",
          //   valueBooks
          // );
          // console.log("\n==>NLOG-Home TIME==> " + d.toLocaleTimeString() + ": ", ress);
          // LOG

          // setArrSach(sach)
          // console.log("SACH: ", arrSach[0].NXB.TenNXB);
        })
        .catch((err) => {
          console.log("LOI: ", err);
        });
    };

    getAll();
    console.log("GIOHANG: home: ", gioHang);
    
  }, []);

  //********************* */
  //-------------------------------

  const profileData = {
    name: "Username",
    point: 200,
  };

  // const bookOtherWordsForHome = {
  //   _id: "as",
  //   TenSanPham: "Song",
  //   NXB: {
  //     TenNXB: "Thanh Nien",
  //   },
  //   TacGia: "Nguyễn Thị Xuân Quỳnh",
  //   SoLuong: 10,
  //   LoaiSach: ["635a404755117fc9e626ed32"],
  //   Gia: 200000,
  //   HinhAnh: "21",
  //   MoTa: "Tac gia: Xuan Quynh",
  //   navTintColor: "#000",
  // };

  // const bookTheMetropolis = {
  //   _id: "123",
  //   TenSanPham: "Song",
  //   NXB: {
  //     TenNXB: "Thanh Nien",
  //   },
  //   TacGia: "Nguyễn Thị Xuân Quỳnh",
  //   SoLuong: 10,
  //   LoaiSach: ["635a404755117fc9e626ed32"],
  //   Gia: 200000,
  //   HinhAnh: "19",
  //   MoTa: "Tac gia: Xuan Quynh",
  //   navTintColor: "#000",
  // };

  // const bookTheTinyDragon = {
  //   _id: "56",
  //   TenSanPham: "Song",
  //   NXB: {
  //     TenNXB: "Thanh Nien",
  //   },
  //   TacGia: "Nguyễn Thị Xuân Quỳnh",
  //   SoLuong: 10,
  //   LoaiSach: ["635a404755117fc9e626ed32"],
  //   Gia: 200000,
  //   HinhAnh: "20",
  //   MoTa: "Tac gia: Xuan Quynh",
  //   navTintColor: "#000",
  // };

  // const myBooksData = [
  //   {
  //     ...bookOtherWordsForHome,
  //   },
  //   {
  //     ...bookTheMetropolis,
  //   },
  //   {
  //     ...bookTheTinyDragon,
  //   },
  // ];

  const categoriesData = [
    {
      id: 1,
      categoryName: "Best Seller",
      books: sach,
    },
    {
      id: 2,
      categoryName: "The Latest",
      books: sach,
    },
    {
      id: 3,
      categoryName: "Coming Soon",
      books: sach,
    },
  ];

  //***********************
  //
  const [getProfile, setProfile] = useState(profileData);
  const [myBooks, setMyBooks] = useState(sach);
  const [categories, setCategories] = useState(categoriesData);
  const [selectedCategory, setSelectedCategory] = useState(1);

  const renderButtonSection = () => {
    return (
      <View
        style={{ flex: 1, justifyContent: "center", padding: SIZES.padding }}
      >
        <View
          style={{
            flexDirection: "row",
            height: 70,
            backgroundColor: COLORS.secondary,
            borderRadius: SIZES.radius,
          }}
        >
          {/* Clain */}
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => console.log("Claim")}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={icons.claim_icon}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.body4,
                  color: COLORS.white,
                }}
              >
                Claim
              </Text>
            </View>
          </TouchableOpacity>
          {/* Divider */}
          <LineDivider />

          {/* Get Point */}
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => console.log("Get Point")}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={icons.point_icon}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.body4,
                  color: COLORS.white,
                }}
              >
                Get Point
              </Text>
            </View>
          </TouchableOpacity>

          {/* Divider */}
          <LineDivider />

          {/* My Card */}
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => console.log("My Card")}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={icons.card_icon}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.body4,
                  color: COLORS.white,
                }}
              >
                My Card
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderHeader = (getProfile) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          paddingHorizontal: SIZES.padding,
          alignItems: "center",
        }}
      >
        {/* Greeting */}
        <View style={{ flex: 1 }}>
          <View style={{ marginRight: SIZES.padding }}>
            <Text style={{ ...FONTS.h3, color: COLORS.white }}>Good</Text>
            <Text style={{ ...FONTS.h2, color: COLORS.white }}>
              {getProfile.name}
            </Text>
          </View>
        </View>

        {/* Points */}
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            height: 40,
            paddingLeft: 3,
            paddingRight: SIZES.radius,
            borderRadius: 20,
            alignItems: "flex-end",
          }}
          onPress={() => {
            console.log("Point");
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 30,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 25,
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            >
              <Image
                source={icons.plus_icon}
                resizeMode="contain"
                style={{ width: 20, height: 20 }}
              />
            </View>
            <Text
              style={{
                marginLeft: SIZES.base,
                color: COLORS.white,
                ...FONTS.body3,
              }}
            >
              {getProfile.point} point
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderMyBookSection = (myBooks) => {
    const renderItem = ({ item, index }) => {
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            marginLeft: index == 0 ? SIZES.padding : 0,
            marginRight: SIZES.radius,
          }}
          onPress={() =>
            navigation.navigate("BookDetail", {
              book: item,
            })
          }
        >
          {/* Book Cover */}
          <Image
            // source={ images.otherWordsForHome }
            source={item.HinhAnh}
            resizeMode="cover"
            style={{
              width: 180,
              height: 250,
              borderRadius: 20,
            }}
          />

          {/* Book Info */}
          <View
            style={{
              marginTop: SIZES.radius,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={icons.clock_icon}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.lightGray,
              }}
            />
            <Text
              style={{
                marginLeft: 5,
                ...FONTS.body3,
                color: COLORS.lightGray,
                flex: 1,
                ellipsizeMode: "tail",
                numberOfLines: 1,
                width: 10,
              }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.TenSanPham}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{ flex: 1 }}>
        {/* Header */}
        <View
          style={{
            paddingHorizontal: SIZES.padding,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ ...FONTS.h2, color: COLORS.white }}>My Book</Text>
        </View>

        {/* Books */}
        <View style={{ flex: 1, marginTop: SIZES.padding }}>
          <FlatList
            data={sach}
            renderItem={renderItem}
            keyExtractor={(item) => `${item._id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  };

  const renderCategoryHeader = () => {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{ flex: 1, marginRight: SIZES.padding }}
          onPress={() => setSelectedCategory(item.id)}
        >
          {selectedCategory == item.id && (
            <Text style={{ ...FONTS.h2, color: COLORS.white }}>
              {item.categoryName}
            </Text>
          )}
          {selectedCategory != item.id && (
            <Text style={{ ...FONTS.h2, color: COLORS.lightGray }}>
              {item.categoryName}
            </Text>
          )}
        </TouchableOpacity>
      );
    };

    return (
      <View style={{ flex: 1, paddingLeft: SIZES.padding }}>
        <FlatList
          data={categories}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          horizontal
        />
      </View>
    );
  };

  const renderCategoryData = () => {
    var books = [];

    let selectedCategoryBooks = categories.filter(
      (a) => a.id == selectedCategory
    );

    if (selectedCategoryBooks.length > 0) {
      books = selectedCategoryBooks[0].books;
    }

    const renderItem = ({ item }) => {
      return (
        <View style={{ marginVertical: SIZES.base }}>
          <TouchableOpacity
            style={{ flex: 1, flexDirection: "row" }}
            onPress={() =>
              navigation.navigate("BookDetail", {
                book: item,
              })
            }
          >
            {/* Book Cover */}
            <Image
              source={item.HinhAnh}
              resizeMode="cover"
              style={{ width: 100, height: 150, borderRadius: 10 }}
            />

            <View style={{ flex: 1, marginLeft: SIZES.radius, width: "10%" }}>
              {/* Book name and author */}
              <View style={{ width: "100%", marginLeft: SIZES.base }}>
                <Text
                  style={{
                    paddingRight: SIZES.padding,
                    ...FONTS.h2,
                    color: COLORS.white,
                    flex: 1,
                    ellipsizeMode: "tail",
                    numberOfLines: 1,
                    width: "100%",
                  }}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {item.TenSanPham}
                </Text>
                <Text style={{ ...FONTS.h3, color: COLORS.lightGray }}>
                  {item.TacGia}
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
                >
                  {item.Gia}
                </Text>
              </View>
              {/* Buttons */}
              <View style={{ height: "40%" }}>
                {renderButtonAddGioHang(item)}
              </View>
            </View>
          </TouchableOpacity>
        </View>
      );
    };

    return (
      <View
        style={{
          width: windowWidth,
          marginTop: SIZES.radius,
          paddingLeft: SIZES.padding,
        }}
      >
        <FlatList
          data={sach}
          renderItem={renderItem}
          keyExtractor={(item) => `${item._id}`}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  };

  const renderButtonAddGioHang = (item) => {
    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        {/* Start Reading */}
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: COLORS.primary,
            marginHorizontal: SIZES.base,
            marginVertical: SIZES.base,
            borderRadius: SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() =>
            navigation.navigate("CartScreen", {
              book: item,
            })
          }
        >
          <Text style={{ ...FONTS.h4, color: COLORS.white }}>
            Thêm vào Giỏ hàng
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  //***********************
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.black }}>
      <StatusBar barStyle={"light-content"} />
      {/* Header Section */}
      <View style={{ height: 200 }}>
        {renderHeader(getProfile)}
        {renderButtonSection()}
      </View>

      {/* Body Section */}
      <ScrollView style={{ marginTop: SIZES.radius }}>
        {/* Books Section */}
        <View>{renderMyBookSection(myBooks)}</View>

        {/* Categories Section */}
        <View style={{ marginTop: SIZES.padding }}>
          <View>{renderCategoryHeader()}</View>

          <ScrollView horizontal={true} scrollEnabled={false}>
            <View>{renderCategoryData()}</View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
