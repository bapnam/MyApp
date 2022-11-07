import React from "react";
import {View, Button} from "react-native";

function SearchScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Go to search"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}

export default SearchScreen;