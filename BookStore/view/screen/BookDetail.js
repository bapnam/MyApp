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

// const LineDivider = () => {
//   return (
//     <View style={{ width: 1, paddingVertical: 5 }}>
//       <View
//         style={{
//           flex: 1,
//           borderLeftColor: COLORS.lightGray2,
//           borderLeftWidth: 1,
//         }}
//       ></View>
//     </View>
//   );
// };

const BookDetail = ({ route, navigation }) => {
  const [book, setBook] = useState(null);
  const [scrollViewWholeHeight, setScrollViewWholeHeight] = useState(1);
  const [scrollViewVisibleHeight, setScrollViewVisibleHeight] = useState(0);

  const indicator = new Animated.Value(0);

  useEffect(() => {
    let { book } = route.params;
    setBook(book);
  }, [book]);

  const renderBookInfoSection = () => {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={book.HinhAnh}
          resizeMode="cover"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        />

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
            height: 80,
            alignItems: "flex-end",
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
                tintColor: book.navTintColor,
              }}
            />
          </TouchableOpacity>

          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={{ ...FONTS.h2, color: book.navTintColor }}>
              Book Detail
            </Text>
          </View>

          {/* <TouchableOpacity
            style={{ marginRigth: SIZES.base }}
            onPress={() => console.log("Click More")}
          >
            <Image
              source={icons.more_icon}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: book.navTintColor,
                alignSelf: "flex-end",
              }}
            />
          </TouchableOpacity> */}
        </View>

        {/* Book Cover */}
        <View
          style={{ flex: 5, paddingTop: SIZES.padding2, alignItems: "center" }}
        >
          <Image
            source={book.HinhAnh}
            resizeMode="contain"
            style={{
              flex: 1,
              width: 150,
              height: "auto",
            }}
          />
        </View>

        {/* Book Name and Author */}
        <View
          style={{ flex: 1.8, alignItems: "center", justifyContent: "center" }}
        >
          <Text
            style={{ ...FONTS.h2, color: book.navTintColor }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {book.TenSanPham}
          </Text>
          <Text style={{ ...FONTS.body3, color: book.navTintColor }}>
            {book.TacGia}
          </Text>
        </View>
      </View>
    );
  };

  const renderBookDescription = () => {
    const indicatorSize =
      scrollViewWholeHeight > scrollViewVisibleHeight
        ? (scrollViewVisibleHeight * scrollViewVisibleHeight) /
          scrollViewWholeHeight
        : scrollViewVisibleHeight;

    const difference =
      scrollViewVisibleHeight > indicatorSize
        ? scrollViewVisibleHeight - indicatorSize
        : 1;

    return (
      <View style={{ flex: 1, flexDirection: "row", padding: SIZES.padding }}>
        {/* Custom Scrollbar */}
        <View
          style={{ width: 4, height: "100%", backgroundColor: COLORS.gray1 }}
        >
          <Animated.View
            style={{
              width: 4,
              height: indicatorSize,
              backgroundColor: COLORS.lightGray4,
              transform: [
                {
                  translateY: Animated.multiply(
                    indicator,
                    scrollViewVisibleHeight / scrollViewWholeHeight
                  ).interpolate({
                    inputRange: [0, difference],
                    outputRange: [0, difference],
                    extrapolate: "clamp",
                  }),
                },
              ],
            }}
          />
        </View>

        {/* Description */}
        <ScrollView
          contentContainerStyle={{ paddingLeft: SIZES.padding2 }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onContentSizeChange={(width, height) => {
            setScrollViewWholeHeight(height);
          }}
          onLayout={({
            nativeEvent: {
              layout: { x, y, width, height },
            },
          }) => {
            setScrollViewVisibleHeight(height);
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: indicator } } }],
            { useNativeDriver: false }
          )}
        >
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.white,
              marginBottom: SIZES.padding,
            }}
          >
            Mô tả
          </Text>
          <Text style={{ ...FONTS.body2, color: COLORS.lightGray }}>
            {book.MoTa}
          </Text>
        </ScrollView>
      </View>
    );
  };

  const renderBottomButton = () => {
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
            navigation.navigate("CartScreen")
          }
        >
          <Text style={{ ...FONTS.h3, color: COLORS.white }}>
            Start Reading
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  if (book) {
    return (
      <View style={{ flex: 1, backgroundColor: COLORS.black }}>
        {/* Book Cover Section */}
        <View style={{ flex: 3 }}>{renderBookInfoSection()}</View>

        {/* Description */}
        <View style={{ flex: 2 }}>{renderBookDescription()}</View>

        {/* Buttons */}
        <View style={{ height: 70, marginBottom: 30 }}>
          {renderBottomButton()}
        </View>
      </View>
    );
  } else {
    return <></>;
  }
};

export default BookDetail;
