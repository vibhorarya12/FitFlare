import React from "react";
import { StyleSheet, View, Dimensions,  Text ,TouchableOpacity } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { LinearGradient } from "expo-linear-gradient";
import {Bar}  from 'react-native-progress';
const { width, height } = Dimensions.get("window");
export default function MonthlyStatsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.GraphContainer}>
      <View style={styles.GraphBox}>
        <LineChart
          data={{
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], // x axis
            datasets: [
              {
                data: [5, 10, 17, 14, 7, 20, 35],
              },
            ],
          }}
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
        <TouchableOpacity
            style={{ backgroundColor: "transparent" }}
           
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
                Day
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        <TouchableOpacity
            style={{ backgroundColor: "transparent" }}
           
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
       

        <View style={styles.BarContainers}>
                 <Bar borderWidth={0} animated={true} progress={0.3} width={500} color="red"/>
        </View>
        <View style={styles.BarContainers}></View>
        <View style={styles.BarContainers}></View>
        <View style={styles.BarContainers}></View>
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
    // borderWidth: 2,
    flex: 5,
    marginTop: width * 0.15,
    justifyContent: "center",
    alignItems: "center",
    display:'flex',
    flexDirection:'column'
    
  },
  GraphBox:{
    flex:8,
    display:'flex',
    // borderWidth:2,
    borderColor:'black',
    justifyContent:'flex-end'
   
  },
  SelectorBox:{
    flex:2,
    width:width*0.97,
    
    borderColor:'black',
    display:'flex',
    flexDirection:'row',
    gap:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:'#D3C5E5',
    elevation:5
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
    borderWidth: 2,
    flex: 5,
    flexDirection:'column'
  },
  BarContainers:{
    borderColor: "black",
    borderWidth: 2,
    display:'flex',
    flexDirection:'row',
    flex :1,
    justifyContent:'center',

  }
});
