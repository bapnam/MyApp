import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { FONTS, COLORS, SIZES, icons } from "../../constants";

const LineDivider = () => {
  return (
    <View style={{ width: 1, paddingVertical: 5 }}>
      <View
        style={{
          flex: 1,
          borderLeftColor: COLORS.lightGray2,
          borderLeftWidth: 1,
        }}
      ></View>
    </View>
  );
};

const SettingScreen = ({ route, navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.black }}>
      <Text>Setting</Text>
    </View>
  );
};

export default SettingScreen;
