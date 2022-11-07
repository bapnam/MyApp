import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { COLORS, FONTS, SIZES, icons, images } from "../../../constants";

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

const renderButtonSection = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", padding: SIZES.padding }}>
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

export default renderButtonSection;
