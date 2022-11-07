import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import axios from "axios";
import RootView from "./view/RootView";
import React, { useEffect, useState } from "react";

export default function App() {
  return <RootView />;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 20,
//     paddingTop: 50,
//   },
// });
