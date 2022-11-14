import React from "react";
import { Image } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screen/HomeScreen";
import SearchScreen from "../screen/SearchScreen";
import SettingScreen from "../screen/SettingScreen";
import { COLORS } from "../../constants";
import { icons } from "../../constants";
import CartScreen from "../screen/CartScreen";

const tabOptions = {
  showLabel: false,
  style: {
    height: "50%",
    backgroundColor: COLORS.black,
    padding: 24
  },
};

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? COLORS.white : COLORS.gray;

          switch (route.name) {
            case "Home":
              return (
                <Image
                  source={icons.dashboard_icon}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );

            case "Search":
              return (
                <Image
                  source={icons.search_icon}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );

            case "Cart":
              return (
                <Image
                  source={icons.cart_icon}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );

            case "Setting":
              return (
                <Image
                  source={icons.menu_icon}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );
          }
        },
        // tabBarActiveTintColor: "red",
        // tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: "8%",
          backgroundColor: COLORS.black,
          padding: 3
        },
        headerShown: false,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Cart" component={CartScreen} options={{ tabBarBadge: 3 }} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
