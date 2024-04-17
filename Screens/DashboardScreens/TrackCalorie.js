import React from "react";
import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
const { width } = Dimensions.get("window");
export default function TrackCalorie() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 4 }}>
        <ImageBackground
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          resizeMode={"cover"}
          source={require("../../assets/backgroundImages/veg.jpeg")}
        >
          <CircularProgress
            value={1800}
            radius={width * 0.28}
            duration={2500}
            progressValueColor={"black"}
            progressValueStyle={{ fontSize: width * 0.11, opacity: 0.8 }}
            maxValue={2400}
            title={"kcal / 2400 kcal"}
            titleColor={"black"}
            titleStyle={{
              fontWeight: "bold",
              fontSize: width * 0.045,
              opacity: 0.8,
            }}
            activeStrokeWidth={width * 0.045}
            inActiveStrokeWidth={width * 0.019}
            activeStrokeColor={"#11998e"}
            activeStrokeSecondaryColor={"#38ef7d"}
          />
        </ImageBackground>
      </View>
      <View
        style={{
          flex: 6,
          borderColor: "black",
          backgroundColor: "white",

          alignItems: "center",
        }}
      >
        <View style={styles.WeekContainer}>
          
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  WeekContainer: {
    backgroundColor: "#E6E6E6",
    height: width * 0.16,
    width: width * 0.97,
    marginTop: 10,
    borderRadius: 30,
  },
});
