import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { LinearGradient } from "expo-linear-gradient";
import { Bar } from "react-native-progress";
const { width, height } = Dimensions.get("window");
import Ionicons from "@expo/vector-icons/Ionicons";
import { weeklyData, monthlyData } from "../../Utils/Data";

export default function MonthlyStatsScreen() {
  const [Data, setData] = useState(weeklyData);
  return (
    
    <View style={styles.container}>
      <View style={styles.HeaderContainer}>
        <View style={styles.headerBox}>
          <Ionicons name="analytics" size={width * 0.16} color="#CB793A" />
          <Text
            style={{ fontSize: width * 0.05, fontWeight: "bold", opacity: 0.6 }}
          >
            Your Monthly Stats
          </Text>
        </View>
      </View>
      <View style={styles.GraphContainer}>
        <View style={styles.GraphBox}>
          <LineChart
            data={Data}
            width={Dimensions.get("window").width * 0.98} // from react-native
            height={width * 0.61}
            yAxisSuffix="-stps"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              // backgroundColor: "#e26a00",
              backgroundGradientFrom: "#540D6E",
              backgroundGradientTo: "#540D6E",
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 2,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "red",
              },
            }}
            withVerticalLines={false}
            withHorizontalLines={false}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 10,
            }}
          />
        </View>
        <View style={styles.SelectorBox}>
          <TouchableOpacity style={{ backgroundColor: "transparent" }}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#eb3349", "#f45c43"]}
              style={styles.button}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: width * 0.04,
                  textShadowColor: "rgba(0, 0, 0, 0.8)",
                  textShadowOffset: { width: 3, height: 2 },
                  textShadowRadius: 6,
                }}
              >
                Day
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: "transparent" }}
            onPress={() => setData(weeklyData)}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#eb3349", "#f45c43"]}
              style={styles.button}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: width * 0.04,
                  textShadowColor: "rgba(0, 0, 0, 0.8)",
                  textShadowOffset: { width: 3, height: 2 },
                  textShadowRadius: 6,
                }}
              >
                Week
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: "transparent" }}
            onPress={() => setData(monthlyData)}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#eb3349", "#f45c43"]}
              style={styles.button}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: width * 0.04,
                  textShadowColor: "rgba(0, 0, 0, 0.8)",
                  textShadowOffset: { width: 3, height: 2 },
                  textShadowRadius: 6,
                }}
              >
                Month
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.StatsContainer}>
        <View
          style={[
            styles.BarContainers,
            { flex: 0.5, justifyContent: "flex-end", flexDirection: "column" },
          ]}
        >
          <Text
            style={{
              color: "black",
              fontSize: width * 0.055,
              fontWeight: "bold",
              opacity: 0.7,
            }}
          >
            Last 7 Days
          </Text>
        </View>
        <View style={styles.BarContainers}>
          <View
            style={{
              borderColor: "black",
              flex: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="fitness" size={width * 0.1} color="#CD2331" />
          </View>
          <Bar
            borderWidth={0}
            animated={true}
            progress={0.6}
            borderRadius={10}
            height={20}
            width={500}
            color="#CD2331"
            style={{
              height: 20,
              borderWidth: 1,
              borderColor: "transparent",
              flex: 8,
              marginRight: width * 0.05,
              elevation: 2,
            }}
            unfilledColor="#CFC7D2"
          />
        </View>
        <View style={styles.BarContainers}>
          <View
            style={{
              borderColor: "black",
              flex: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="bicycle" size={width * 0.1} color="#52489C" />
          </View>
          <Bar
            borderWidth={0}
            animated={true}
            progress={0.9}
            borderRadius={10}
            height={20}
            width={500}
            color="#52489C"
            style={{
              height: 20,
              borderWidth: 1,
              borderColor: "transparent",
              flex: 8,
              marginRight: width * 0.05,
              elevation: 2,
            }}
            unfilledColor="#CFC7D2"
          />
        </View>
        <View style={styles.BarContainers}>
          <View
            style={{
              borderColor: "black",
              flex: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="water" size={width * 0.1} color="#3DA5D9" />
          </View>
          <Bar
            borderWidth={0}
            animated={true}
            progress={0.8}
            borderRadius={10}
            height={20}
            width={500}
            color="#3DA5D9"
            style={{
              height: 20,
              borderWidth: 1,
              borderColor: "transparent",
              flex: 8,
              marginRight: width * 0.05,
              elevation: 3,
            }}
            unfilledColor="#CFC7D2"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#E1E6E1",
    flexDirection: "column",
  },
  HeaderContainer: {
    marginTop: width * 0.02,
    borderColor: "black",
    // borderWidth: 2,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  headerBox: {
    flex: 1,
    flexDirection: "row",
    borderColor: "black",
    width: width * 0.95,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#D3C5E5",
    borderRadius: 20,
    elevation: 5,
  },
  GraphContainer: {
    borderColor: "black",
    // borderWidth: 2,
    flex: 5,

    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  GraphBox: {
    flex: 8,
    display: "flex",
    // borderWidth:2,
    borderColor: "black",
    justifyContent: "flex-end",
  },
  SelectorBox: {
    flex: 2,
    width: width * 0.97,

    borderColor: "black",
    display: "flex",
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#D3C5E5",
    elevation: 5,
  },
  button: {
    width: width * 0.27,
    justifyContent: "center",
    alignItems: "center",
    height: height * 0.05,
    borderRadius: 25,
  },
  StatsContainer: {
    borderColor: "black",

    flex: 4,
    flexDirection: "column",
  },
  BarContainers: {
    borderColor: "black",
    // borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
