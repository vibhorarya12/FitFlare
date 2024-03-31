import React, {  useState } from "react";
import { StyleSheet, View, Dimensions, Button , Text} from "react-native";
import {LineChart}  from "react-native-chart-kit";
const { width, height } = Dimensions.get("window");
export default function MonthlyStatsScreen() {
  
  return (
    <View style={styles.container}>
       <View style={styles.GraphContainer}>
       <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
       </View>
      <View style={styles.StatsContainer}>
        
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
  GraphContainer: {
    borderColor: "black",
    borderWidth: 2,
    flex: 5,
    marginTop: width * 0.15,
    justifyContent: "center",
    alignItems: "center",
  },
  StatsContainer: {
    borderColor: "black",
    borderWidth: 2,
    flex: 5,
  },
});
