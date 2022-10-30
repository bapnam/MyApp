import React from "react";
import { View, Button } from "react-native";

function SettingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Go to Setting"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}

export default SettingScreen;
