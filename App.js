import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,  } from "react-native";
import OnBoardingScreen from "./Screens/onboarding";
import UserInfo from "./Screens/UserInfo";
import Gender from "./Screens/InfoScreens/Gender";


export default function App() {
  

  return (
    <>
     {/* <OnBoardingScreen/> */}
    <Gender/>
    
     </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  steps: {
    color: "blue",
    fontSize: 40,
  },
});
