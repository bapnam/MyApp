import React from "react";
import { View, Button } from "react-native";

function CartScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Cart"
        // onPress={() => navigation.navigate()}
      />
    </View>
  );
}

export default CartScreen;
