import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from 'expo-font';
import TabNavigation from "./navigation/TabNavigation";
import BookDetail from "./screen/BookDetail";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"BookStore"}
    >
      {/* Tabs */}
      <Stack.Screen name="BookStore" component={TabNavigation} />
      {/* Screens */}
      <Stack.Screen name="BookDetail" component={BookDetail} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const RootView = () => {
  const [loaded] = useFonts({
    "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer theme={theme}>
      <MyStack />
    </NavigationContainer>
  );
};

export default RootView;
