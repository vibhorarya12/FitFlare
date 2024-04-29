import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  ScrollView,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import { Button, TextInput } from "react-native-paper";
import { BarChart } from "react-native-chart-kit";
const { width } = Dimensions.get("window");

const items = ["Today", "This Week", "This month"];
const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
     
    },
  ],
};
const CalorieProgress = ({ completed, total }) => {
  useEffect(() => {
    console.log("mounted");
  }, [total, completed]);
  return (
    <CircularProgress
      value={completed}
      radius={width * 0.28}
      duration={1500}
      progressValueColor={"black"}
      progressValueStyle={{ fontSize: width * 0.07, opacity: 0.8 }}
      maxValue={total}
      title={`/ ${total} kcal`}
      titleColor={"black"}
      valueSuffix=" kcal"
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
  const [completed, setCompleted] = useState(1800);
  const [total, setTotal] = useState(2500);
  const handlePress = (query) => {
    if (query === "This Week") {
      setSelected(query);
      setCompleted(1000);
      setTotal(3000);
      return;
    }
    if (query === "This month") {
      setSelected(query);
      setCompleted(2000);
      setTotal(5000);
      return;
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={{ height: width * 0.8 }}>
        <ImageBackground
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          resizeMode={"cover"}
          source={require("../../assets/backgroundImages/veg.jpeg")}
        >
          <CalorieProgress completed={completed} total={total} />
        </ImageBackground>
      </View>
      <View
        style={{
          height: width * 1.17,
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
        <View style={styles.statsContainer}>
          <ScrollView
            style={{
              borderColor: "black",

              width: "70%",
            }}
            horizontal={true}
          >
            <BarChart
              fromZero={true}
              showBarTops={false}
              data={data}
              width={width}
              height={220}
              yAxisLabel="$"
              chartConfig={{
                // backgroundColor: "#e26a00",

                backgroundGradientFrom: "#E6E6E6",
                backgroundGradientTo: "#E6E6E6",
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(17, 153, 142, ${opacity})`, 
                labelColor: (opacity = 1) => `rgba(27, 29, 31, ${opacity})`,
                
                style: {
                  borderRadius: 2,
                },
                
              }}
              verticalLabelRotation={0}
            
            
            />
          </ScrollView>
          <View
            style={{
              borderColor: "black",
              flex: 1,
              width: "85%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Text>Set daily calorie goal</Text>
            <TextInput
              mode={"outlined"}
              keyboardType={"number-pad"}
              style={{ height: width * 0.08, width: width * 0.3 }}
              outlineColor="#11998e"
            />
            <Button mode={"contained"} style={{ backgroundColor: "#11998e" }}>
              set
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
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
  statsContainer: {
    backgroundColor: "#E6E6E6",
    height: width * 0.8,
    width: width * 0.97,
    marginTop: 10,
    borderRadius: 30,
    elevation: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
