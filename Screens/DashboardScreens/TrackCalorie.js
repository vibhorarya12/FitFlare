import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  ScrollView,
  Text,
} from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import { Button } from "react-native-paper";
const { width } = Dimensions.get("window");

const items = ["Today", "This Week", "This month"];

const CalorieProgress = ({ completed, total }) => {
  useEffect(() => {}, [completed, total]);

  return (
    <CircularProgress
      value={completed}
      radius={width * 0.28}
      duration={1500}
      progressValueColor={"black"}
      progressValueStyle={{ fontSize: width * 0.11, opacity: 0.8 }}
      maxValue={total}
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
  );
};
export default function TrackCalorie() {
  const [selected, setSelected] = useState("");
  const [currentStats, setCurrentStats] = useState({
    completed: 1800,
    total: 2400,
  });
  const handlePress = (query) => {
    
    if (query === "This Week") {
      setCurrentStats({ completed: 1800 * 7, total: 2400 * 7 });
      setSelected(query);
      return;
    }
    if (query === "This month") {
      setCurrentStats({ completed: 100000, total: 300000 });
      setSelected(query);
      return;
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 4 }}>
        <ImageBackground
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          resizeMode={"cover"}
          source={require("../../assets/backgroundImages/veg.jpeg")}
        >
          <CalorieProgress
            {...currentStats}
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
        <View style={styles.buttonContainer}>
          {items.map((val, index) => (
            <Button
              mode={"contained"}
              key={index}
              onPress={() => handlePress(val)}
              style={{
                height: "70%",
                backgroundColor: val === selected ? "#38ef7d" : "#11998e",
                elevation: 5,
              }}
              
            >
              {val}
            </Button>
          ))}
        </View>
        <View style={[styles.buttonContainer, { height: width * 0.8 }]}>
          <Text>{selected}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  buttonContainer: {
    backgroundColor: "#E6E6E6",
    height: width * 0.16,
    width: width * 0.97,
    marginTop: 10,
    borderRadius: 30,
    elevation: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
