import React from "react";
import { View, Button } from "react-native";

function NotificationScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Go to Notification"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}

export default NotificationScreen;
