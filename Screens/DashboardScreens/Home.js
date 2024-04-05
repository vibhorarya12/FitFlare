import React, { useCallback, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import LottieView from "lottie-react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
const { width, height } = Dimensions.get("window");

export default function Home() {
  const navigation = useNavigation();
  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);
  const snapPoints = ["75%"];
  const handlePress = useCallback((index) => {
      sheetRef.current?.snapToIndex(index);
      setIsOpen(true);
    }, []);
    
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.ProgressContainer}>
          <View style={styles.tabBarContainer}>
            <TouchableOpacity>
              <Ionicons
                name="accessibility"
                size={width * 0.07}
                color="#841DAD"
                style={{
                  paddingHorizontal: width * 0.03,
                  paddingVertical: width * 0.02,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.CircularProgress}>
            <CircularProgress
              value={1700}
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
          </View>
          <View style={styles.stats}>
            <View style={styles.statsItem}>
              <Ionicons name="fitness" size={width * 0.1} color="#CD2331" />
              <Text style={{ fontSize: width * 0.04 }}>300 Kcal</Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: width * 0.04,
                  opacity: 0.7,
                }}
              >
                Calories
              </Text>
            </View>
            <View style={styles.statsItem}>
              <Ionicons name="pie-chart" size={width * 0.1} color="#118AB2" />
              <Text style={{ fontSize: width * 0.04 }}>45%</Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: width * 0.04,
                  opacity: 0.7,
                }}
              >
                Today's goal
              </Text>
            </View>
            <View style={styles.statsItem}>
              <Ionicons name="walk" size={width * 0.1} color="#EAC435" />
              <Text style={{ fontSize: width * 0.04 }}>6Km</Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: width * 0.04,
                  opacity: 0.7,
                }}
              >
                Distance
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.FeatureContainer}>
          <TouchableOpacity
            style={styles.waterIntakeBox}
            onPress={() => navigation.navigate("monthly-screen")}
          >
            <LottieView
              source={require("../../assets/animations/running.json")}
              autoPlay
              loop
              style={{ flex: 7 }}
            />
            <Text
              style={{
                flex: 3,
                alignSelf: "center",
                fontWeight: "bold",
                fontSize: width * 0.04,
                opacity: 0.6,
              }}
            >
              Your monthly stats
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.monthlyStatsBox}
            onPress={() => handlePress(0)}
          >
            <LottieView
              source={require("../../assets/animations/intake.json")}
              autoPlay
              loop
              style={{ flex: 7 }}
            />
            <Text
              style={{
                flex: 3,
                alignSelf: "center",
                fontWeight: "bold",
                fontSize: width * 0.04,
                opacity: 0.6,
              }}
            >
              Water intake reminder
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.extraConatiner}>
          <View style={styles.extraBox}>
            <View style={styles.BoxItems}>
              <TouchableOpacity>
                <Ionicons name="scale" size={width * 0.11} color="#5B2A86" />
              </TouchableOpacity>
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "bold",
                  fontSize: width * 0.035,
                  opacity: 0.6,
                }}
              >
                Track Calories
              </Text>
            </View>
            <View style={styles.BoxItems}>
              <TouchableOpacity>
                <Ionicons
                  name="footsteps"
                  size={width * 0.11}
                  color="#FF6978"
                />
              </TouchableOpacity>
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "bold",
                  fontSize: width * 0.035,
                  opacity: 0.6,
                }}
              >
                Set Goal
              </Text>
            </View>
            <View style={styles.BoxItems}>
              <TouchableOpacity>
                <Ionicons name="timer" size={width * 0.11} color="#D62828" />
              </TouchableOpacity>
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "bold",
                  fontSize: width * 0.035,
                  opacity: 0.6,
                }}
              >
                Quick session
              </Text>
            </View>
          </View>
        </View>
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          onClose={() => setIsOpen(false)}
          index={-1}
          backgroundStyle={{borderTopLeftRadius:width*0.15 , borderTopRightRadius:width*0.15, elevation:5, backgroundColor:'#B8D0EB'}}
        >
          <BottomSheetView  style={styles.BottomSheetView} >
            <View style={styles.animationContainer}>
            <LottieView
              source={require("../../assets/animations/diet.json")}
              autoPlay
              loop
              style={{ flex: 1 , width:width*0.6 }} />
            </View>
            <View style={styles.WaterSelectorBox}>

            </View>
          </BottomSheetView>
        </BottomSheet>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#E1E6E1",
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
    gap: width * 0.02,
    marginTop: width * 0.02,
  },

  tabBarContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    // borderColor: "black",
    // borderWidth: 0.1,
    width: width * 0.9,
    justifyContent: "flex-end",
    borderRadius: 20,
    backgroundColor: "#E1E6E1",
  },

  CircularProgress: {
    flex: 7,
    borderColor: "black",
    // borderWidth: 2,
    display: "flex",
    justifyContent: "center",
  },
  stats: {
    flex: 2,
    borderColor: "black",
    width: width,
    display: "flex",
    flexDirection: "row",
    gap: width * 0.03,
    borderRadius: 20,
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
  FeatureContainer: {
    flex: 3,

    borderColor: "black",
    display: "flex",
    flexDirection: "row",
    gap: width * 0.04,
  },
  waterIntakeBox: {
    borderColor: "black",
    flex: 5,
    height: width * 0.4,
    alignSelf: "center",
    marginLeft: width * 0.03,
    borderRadius: 20,
    backgroundColor: "#D3C5E5",
    display: "flex",
    flexDirection: "column",
  },
  monthlyStatsBox: {
    borderColor: "black",
    flex: 5,
    height: width * 0.5,
    alignSelf: "center",
    marginRight: width * 0.03,
    borderRadius: 20,
    backgroundColor: "#D3C5E5",
    display: "flex",
    flexDirection: "column",
  },
  extraConatiner: {
    flex: 2,

    borderColor: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  extraBox: {
    backgroundColor: "#D3C5E5",
    width: width * 0.94,
    height: width * 0.3,
    borderRadius: 30,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  BoxItems: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  BottomSheetView:{
    flex:1,
    display:'flex',
    // borderWidth:1,
    borderColor:'black',
   flexDirection:'column',
   justifyContent:'center',
   alignItems:'center'
  },
  animationContainer:{
    flex:5,
    // borderWidth:1,
    borderColor:'black',
    width:width*0.75,
    justifyContent:'center',
    alignItems:'center'
    
  },
  WaterSelectorBox:{
    flex:5,
    // borderWidth:1,
    borderColor:'black',
    width:width*0.75
  }
});
