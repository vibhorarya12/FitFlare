import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { setItem } from "../Utils/asyncStorage";
const { width } = Dimensions.get("window");
export default function OnBoardingScreen() {
  const navigation = useNavigation();
  const handleDone = ()=>{
   
    navigation.navigate("userinfo");
    setItem("onboarded", "1");
  }
  return (
    <View style={styles.container}>
      <Onboarding
        containerStyles={{ paddingHorizontal: 15 }}
        bottomBarHighlight={false}
        showSkip={false}
        onDone={handleDone}
        pages={[
          {
            backgroundColor: "#628920",
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require("../assets/animations/walking.json")}
                  autoPlay
                  loop
                  style={{ flex: 1 }}
                />
              </View>
            ),
            title: "FitFlare",
            subtitle: "Your Step Tracking Companion",
          },
          {
            backgroundColor: "#e89a39",
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require("../assets/animations/eating.json")}
                  autoPlay
                  loop
                  style={{ flex: 1 }}
                />
              </View>
            ),
            title: "Calorie Counter",
            subtitle:
              "Easily track calories with FitFlare and reach your health goals",
          },
          {
            backgroundColor: "#007ac7",
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require("../assets/animations/water.json")}
                  autoPlay
                  loop
                  style={{ flex: 1 }}
                />
              </View>
            ),
            title: "HydroAlert",
            subtitle:
              "FitFlare's HydroAlert keeps you hydrated with timely reminders",
          },
        ]}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
});
