import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";

import { COLORS, FONTS, SIZES, icons, images } from "../../../constants";

const renderCategoryData = (props) => {
  const [categories, setCategories] = useState(props.categories);
  const [selectedCategory, setSelectedCategory] = useState(
    props.selectedCategory
  );
  const [navigation, setNavigation] = useState(props.navigation);
  var books = [];

  let selectedCategoryBooks = categories.filter(
    (a) => a.id == selectedCategory
  );

  if (selectedCategoryBooks.length > 0) {
    books = selectedCategoryBooks[0].books;
    console.log("SL: ", selectedCategoryBooks.length);
    console.log("SACH: ", selectedCategoryBooks);
  }
  else {
    console.log(selectedCategoryBooks.length);
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

          <View style={{ flex: 1, marginLeft: SIZES.radius }}>
            {/* Book name and author */}
            <View>
              <Text
                style={{
                  paddingRight: SIZES.padding,
                  ...FONTS.h2,
                  color: COLORS.white,
                }}
              >
                {item.TenSanPham}
              </Text>
              {/* <Text style={{ ...FONTS.h3, color: COLORS.lightGray }}>
                {item.author}
              </Text> */}
            </View>

            {/* Book Info */}
            <View style={{ flexDirection: "row", marginTop: SIZES.radius }}>
              <Image
                source={icons.dollar}
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

            {/* Genre */}
            {/* <View style={{ flexDirection: "row", marginTop: SIZES.base }}>
              {item.genre.includes("Adventure") && (
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    padding: SIZES.base,
                    marginRight: SIZES.base,
                    backgroundColor: COLORS.darkGreen,
                    height: 40,
                    borderRadius: SIZES.radius,
                  }}
                >
                  <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>
                    Adventure
                  </Text>
                </View>
              )}
              {item.genre.includes("Romance") && (
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    padding: SIZES.base,
                    marginRight: SIZES.base,
                    backgroundColor: COLORS.darkRed,
                    height: 40,
                    borderRadius: SIZES.radius,
                  }}
                >
                  <Text style={{ ...FONTS.body3, color: COLORS.lightRed }}>
                    Romance
                  </Text>
                </View>
              )}
              {item.genre.includes("Drama") && (
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    padding: SIZES.base,
                    marginRight: SIZES.base,
                    backgroundColor: COLORS.darkBlue,
                    height: 40,
                    borderRadius: SIZES.radius,
                  }}
                >
                  <Text style={{ ...FONTS.body3, color: COLORS.lightBlue }}>
                    Drama
                  </Text>
                </View>
              )}
            </View> */}
          </View>
        </TouchableOpacity>

        {/* Bookmark Button */}
        {/* <TouchableOpacity
            style={{ position: "absolute", top: 5, right: 15 }}
            onPress={() => console.log("Bookmark")}
          >
            <Image
              source={icons.bookmark_icon}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.lightGray,
              }}
            />
          </TouchableOpacity> */}
      </View>
    );
  };

  return (
    <View
      style={{ flex: 1, marginTop: SIZES.radius, paddingLeft: SIZES.padding }}
    >
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default renderCategoryData;
