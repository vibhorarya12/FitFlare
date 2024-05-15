import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Dimensions } from "react-native";
import { Accelerometer } from "expo-sensors";
import CircularProgress from "react-native-circular-progress-indicator";
const {width} = Dimensions.get('window');
export default function StepCounter() {
  const [steps, setSteps] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);
  const [lastTimeStamp, setLastTimeStamp] = useState(0);
  const [orientation, setOrientation] = useState("PORTRAIT");

  useEffect(() => {
    let subscription;
    Accelerometer.isAvailableAsync().then((result) => {
      if (result) {
        subscription = Accelerometer.addListener((accelerometerData) => {
          const { x, y } = accelerometerData;
          const threshold = 0.1;
          const timeStamp = new Date().getTime();
          // Check orientation
          const { height, width } = Dimensions.get("window");
          const newOrientation = height > width ? "PORTRAIT" : "LANDSCAPE";
          if (newOrientation !== orientation) {
            setOrientation(newOrientation);
            return; // Don't count steps if orientation changes
          }

          // Low-pass filter for X-axis
          const alphaX = 0.4;
          const filteredX = alphaX * lastX + (1 - alphaX) * x;

          // Low-pass filter for Y-axis
          const alphaY = 0.4;
          const filteredY = alphaY * lastY + (1 - alphaY) * y;

          if (
            Math.abs(filteredX - lastX) > threshold &&
            Math.abs(filteredY - lastY) > threshold &&
            !isCounting &&
            timeStamp - lastTimeStamp > 500
          ) {
            setIsCounting(true);
            setLastX(filteredX);
            setLastY(filteredY);
            setLastTimeStamp(timeStamp);
            setSteps((prev) => prev + 1);
            setTimeout(() => {
              setIsCounting(false);
            }, 800);
          }
        });
      } else {
        console.log("Accelerometer not available");
      }
    });
    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, [isCounting, lastX, lastY, lastTimeStamp, orientation]);

  const resetSteps = () => {
    setSteps(0);
  };

  return (
    // <View style={styles.container}>
    //   <Text style={styles.steps}>Steps: {steps}</Text>
    //   <Button title="Reset" onPress={resetSteps} />
    //   <StatusBar style="auto" />
    // </View>
    <CircularProgress
    value={steps}
    radius={width * 0.35}
    duration={1500}
    progressValueColor={"black"}
    progressValueStyle={{ fontSize: width * 0.12, opacity: 0.7 }}
    maxValue={3000}
    
    title={"Steps today"}
    titleColor={"black"}
    titleStyle={{
      fontWeight: "bold",
      fontSize: width * 0.05,
      opacity: 0.7,
    }}
    activeStrokeWidth={width * 0.05}
    inActiveStrokeWidth={width * 0.02}
    activeStrokeColor={"#ff5f6d"}
    activeStrokeSecondaryColor={"#ffc371"}
  />
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
