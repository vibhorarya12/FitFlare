import React, { useState } from "react";
import { View, StyleSheet, ImageBackground, Dimensions , ScrollView, Text} from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import HorizontalPicker from "@vseslav/react-native-horizontal-picker";
const { width } = Dimensions.get("window");
const Items = ["Today", "This week", "This Month"];

const rednerItem = (item, index) => (
  <View style={{flex:1}}>
    <Text style={{fontWeight: "bold",
              fontSize: width * 0.045,
              opacity: 0.8,}}>
      {item}
    </Text>
  </View>
);
export default function TrackCalorie() {
  const [selected, setSelected] = useState("Today");
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
        <HorizontalPicker
      data={Items}
      renderItem={rednerItem}
      itemWidth={80}
      onChange={(item)=> setSelected(Items[item])}
      focusable={true}
    />
        </View>
        <View style={[styles.WeekContainer, {height:width*0.8}]}>
        <Text>
          {selected}
        </Text>
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
    elevation:5
  },
});
