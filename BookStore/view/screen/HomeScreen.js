import React from "react";
import {View, Button} from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}

export default HomeScreen;
