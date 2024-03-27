import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import Ionicons from "@expo/vector-icons/Ionicons";
const { width, height } = Dimensions.get("window");

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.ProgressContainer}>
        <View style={styles.CircularProgress}>
          <CircularProgress
            value={60}
            radius={width * 0.35}
            duration={1500}
            progressValueColor={"black"}
            progressValueStyle={{ fontSize: width * 0.12, opacity: 0.7 }}
            maxValue={100}
            title={"Steps today"}
            titleColor={"black"}
            titleStyle={{
              fontWeight: "bold",
              fontSize: width * 0.05,
              opacity: 0.7,
            }}
            activeStrokeWidth={width * 0.05}
            inActiveStrokeWidth={width * 0.02}
          />
        </View>
        <View style={styles.stats}>
          <View style={styles.statsItem}>
            <Ionicons name="fast-food" size={width * 0.1} color="#7209B7"  />
            <Text style={{fontSize:width*0.04}}>300 Kcal</Text>
            <Text style={{fontWeight:'bold', fontSize:width*0.03}}>Calories</Text>
          </View>
          <View style={styles.statsItem}>
          <Ionicons name="pie-chart" size={width * 0.1} color="#118AB2" />
            <Text style={{fontSize:width*0.04}}>45%</Text>
            <Text style={{fontWeight:'bold', fontSize:width*0.03}}>Today's goal</Text>
          </View>
          <View style={styles.statsItem}>
          <Ionicons name="walk" size={width * 0.1} color="#EAC435" />
            <Text style={{fontSize:width*0.04}}>6Km</Text>
            <Text style={{fontWeight:'bold', fontSize:width*0.03}}>Distance</Text>
          </View>
        </View>
      </View>
      <View style={styles.CurrentStatsContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
  },
  ProgressContainer: {
    flex: 6,
    // borderWidth: 2,
    // borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },

  CircularProgress: {
    flex: 8,
    borderColor: "black",
    // borderWidth: 2,
    display: "flex",
    justifyContent: "flex-end",
  },
  stats: {
    flex: 2,
    borderColor: "black",
    // borderWidth: 2,
    width: width,
    display: "flex",
    flexDirection: "row",
    gap: width * 0.03,
  },
  statsItem: {
    flex: 1,
    borderColor: "black",
    // borderWidth: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  CurrentStatsContainer: {
    flex: 4,
    // borderWidth: 2,
    borderColor: "black",
  },
});
