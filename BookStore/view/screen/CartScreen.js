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
import { FONTS, COLORS, SIZES, icons } from "../../constants";

const CartScreen = ({ route, navigation }) => {
  const [book, setBook] = useState(null);
  const [scrollViewWholeHeight, setScrollViewWholeHeight] = useState(1);
  const [scrollViewVisibleHeight, setScrollViewVisibleHeight] = useState(0);

  // useEffect(() => {
  //   // let { book } = route.params;
  //   // setBook(book); book
  // }, []);

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
    // const indicatorSize =
    //   scrollViewWholeHeight > scrollViewVisibleHeight
    //     ? (scrollViewVisibleHeight * scrollViewVisibleHeight) /
    //       scrollViewWholeHeight
    //     : scrollViewVisibleHeight;

    // const difference =
    //   scrollViewVisibleHeight > indicatorSize
    //     ? scrollViewVisibleHeight - indicatorSize
    //     : 1;

    return (
      <View style={{ flex: 1, flexDirection: "row", padding: SIZES.padding }}>
        <ScrollView>
          <View style={{ marginVertical: SIZES.base, height: 150 }}>
            <TouchableOpacity
              style={{ flex: 1, flexDirection: "row" }}
              // onPress={() =>
              //   navigation.navigate("BookDetail", {
              //     book: item,
              //   })
              // }
            >
              {/* Book Cover */}
              <Image
                source={23}
                resizeMode="cover"
                style={{ width: "25%", height: "auto", borderRadius: 10 }}
              />

              <View style={{ flex: 1, marginLeft: SIZES.radius, width: "10%" }}>
                {/* Book name */}
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
                    Tên SP
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
                    500
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ marginVertical: SIZES.base }}>
            <TouchableOpacity
              style={{ flex: 1, flexDirection: "row" }}
              // onPress={() =>
              //   navigation.navigate("BookDetail", {
              //     book: item,
              //   })
              // }
            >
              {/* Book Cover */}
              <Image
                source={21}
                resizeMode="cover"
                style={{ width: "20%", height: 150, borderRadius: 10 }}
              />

              <View style={{ flex: 1, marginLeft: SIZES.radius, width: "10%" }}>
                {/* Book name */}
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
                    Tên SP
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
                    500
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ marginVertical: SIZES.base }}>
            <TouchableOpacity
              style={{ flex: 1, flexDirection: "row" }}
              // onPress={() =>
              //   navigation.navigate("BookDetail", {
              //     book: item,
              //   })
              // }
            >
              {/* Book Cover */}
              <Image
                source={21}
                resizeMode="cover"
                style={{ width: "20%", height: 150, borderRadius: 10 }}
              />

              <View style={{ flex: 1, marginLeft: SIZES.radius, width: "10%" }}>
                {/* Book name */}
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
                    Tên SP
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
                    500
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ marginVertical: SIZES.base }}>
            <TouchableOpacity
              style={{ flex: 1, flexDirection: "row" }}
              // onPress={() =>
              //   navigation.navigate("BookDetail", {
              //     book: item,
              //   })
              // }
            >
              {/* Book Cover */}
              <Image
                source={21}
                resizeMode="cover"
                style={{ width: "20%", height: 150, borderRadius: 10 }}
              />

              <View style={{ flex: 1, marginLeft: SIZES.radius, width: "10%" }}>
                {/* Book name */}
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
                    Tên SP
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
                    500
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ marginVertical: SIZES.base }}>
            <TouchableOpacity
              style={{ flex: 1, flexDirection: "row" }}
              // onPress={() =>
              //   navigation.navigate("BookDetail", {
              //     book: item,
              //   })
              // }
            >
              {/* Book Cover */}
              <Image
                source={21}
                resizeMode="cover"
                style={{ width: "20%", height: 150, borderRadius: 10 }}
              />

              <View style={{ flex: 1, marginLeft: SIZES.radius, width: "10%" }}>
                {/* Book name */}
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
                    Tên SP
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
                    500
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ marginVertical: SIZES.base }}>
            <TouchableOpacity
              style={{ flex: 1, flexDirection: "row" }}
              // onPress={() =>
              //   navigation.navigate("BookDetail", {
              //     book: item,
              //   })
              // }
            >
              {/* Book Cover */}
              <Image
                source={21}
                resizeMode="cover"
                style={{ width: "20%", height: 150, borderRadius: 10 }}
              />

              <View style={{ flex: 1, marginLeft: SIZES.radius, width: "10%" }}>
                {/* Book name */}
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
                    Tên SP
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
                    500
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  };

  // const renderCategoryData = () => {
  //   var books = [];

  //   let selectedCategoryBooks = categories.filter(
  //     (a) => a.id == selectedCategory
  //   );

  //   if (selectedCategoryBooks.length > 0) {
  //     books = selectedCategoryBooks[0].books;
  //   }

  //   const renderItem = ({ item }) => {
  //     return (
  //       <View style={{ marginVertical: SIZES.base }}>
  //         <TouchableOpacity
  //           style={{ flex: 1, flexDirection: "row" }}
  //           onPress={() =>
  //             navigation.navigate("BookDetail", {
  //               book: item,
  //             })
  //           }
  //         >
  //           {/* Book Cover */}
  //           <Image
  //             source={item.HinhAnh}
  //             resizeMode="cover"
  //             style={{ width: 100, height: 150, borderRadius: 10 }}
  //           />

  //           <View style={{ flex: 1, marginLeft: SIZES.radius, width: "10%" }}>
  //             {/* Book name and author */}
  //             <View style={{ width: "100%", marginLeft: SIZES.base }}>
  //               <Text
  //                 style={{
  //                   paddingRight: SIZES.padding,
  //                   ...FONTS.h2,
  //                   color: COLORS.white,
  //                   flex: 1,
  //                   ellipsizeMode: "tail",
  //                   numberOfLines: 1,
  //                   width: "100%",
  //                 }}
  //                 numberOfLines={1}
  //                 ellipsizeMode="tail"
  //               >
  //                 {item.TenSanPham}
  //               </Text>
  //               <Text style={{ ...FONTS.h3, color: COLORS.lightGray }}>
  //                 {item.TacGia}
  //               </Text>
  //             </View>

  //             {/* Book Info */}
  //             <View
  //               style={{
  //                 flexDirection: "row",
  //                 marginTop: SIZES.radius,
  //                 marginLeft: SIZES.base,
  //               }}
  //             >
  //               <Image
  //                 source={icons.dong_icon}
  //                 resizeMode="contain"
  //                 style={{
  //                   width: 20,
  //                   height: 20,
  //                   tintColor: COLORS.lightGray,
  //                 }}
  //               />
  //               <Text
  //                 style={{
  //                   ...FONTS.body3,
  //                   color: COLORS.lightGray,
  //                   paddingHorizontal: SIZES.radius,
  //                 }}
  //               >
  //                 {item.Gia}
  //               </Text>
  //             </View>
  //             {/* Buttons */}
  //             <View style={{ height: "40%" }}>
  //               {renderButtonAddGioHang(item)}
  //             </View>
  //           </View>
  //         </TouchableOpacity>
  //       </View>
  //     );
  //   };

  //   return (
  //     <View
  //       style={{
  //         width: windowWidth,
  //         marginTop: SIZES.radius,
  //         paddingLeft: SIZES.padding,
  //       }}
  //     >
  //       <FlatList
  //         data={sach}
  //         renderItem={renderItem}
  //         keyExtractor={(item) => `${item._id}`}
  //         showsVerticalScrollIndicator={false}
  //       />
  //     </View>
  //   );
  // };

  const renderBottomButton = () => {
    return (
      <View style={{ flex: 1, flexDirection: "column", padding: SIZES.radius }}>
        <Text style={{ ...FONTS.h3, color: COLORS.white, height: "50%" }}>
          Start Reading
        </Text>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={{ ...FONTS.h3, color: COLORS.white, width: "60%" }}>hahahahah</Text>
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
      <View style={{ height: "70%" }}>{renderBookDescription()}</View>

      {/* Buttons */}
      <View style={{ height: "23%", flexDirection: "column" }}>
        {renderBottomButton()}
      </View>
    </View>
  );
  // } else {
  //   return <></>;
  // }
};

export default CartScreen;
