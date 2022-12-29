import React, { Component, useState } from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import TabNavigation from "./navigation/TabNavigation";
import BookDetail from "./screen/BookDetail";
import CartScreen from "./screen/CartScreen";
import LoginScreen from "./screen/login_logout/login";
import { useSelector } from "react-redux";
import RegisterScreen from "./screen/login_logout/register";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const RootView = () => {
  const [loaded] = useFonts({
    "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  });

  const Stack = createStackNavigator();
  // const [isLogin, setIsLogin] = useState();
  // // setIsLogin(
  // //   useSelector((s) => {
  // //     s.stateLogin.stateLogin;
  // //   })
  // // );

  if (!loaded) {
    return null;
  }

  function MyStack() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Login"}
      >
        {/* Tabs */}
        <Stack.Screen name="BookStore" component={TabNavigation} />
        
        {/* Screens */}
        <Stack.Screen
          name="BookDetail"
          component={BookDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        
        {/* Login */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    );
  }

  // if (!loaded) {
  //   return null;
  // }

  return (
    <NavigationContainer theme={theme}>
      <MyStack />
    </NavigationContainer>
  );
};

export default RootView;
