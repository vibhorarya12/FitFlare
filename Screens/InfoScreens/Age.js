import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import ScrollPicker from "react-native-wheel-scrollview-picker";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");

export default function Age() {
  const navigation = useNavigation();
  const [ageValue, setAgeValue] = useState("15");
  const handleButton = () => {
     navigation.navigate('dashboard');
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ flex: 1 }}
        resizeMode="cover"
        source={require("../../assets/backgroundImages/shoes.jpg")}
      >
        <View style={styles.textContainer}>
          <Text
            style={{
              color: "white",
              fontSize: width * 0.07,
              fontWeight: "bold",
              textShadowColor: "rgba(0, 0, 0, 0.8)",
              textShadowOffset: { width: 3, height: 2 },
              textShadowRadius: 6,
            }}
          >
            Your age ?
          </Text>
        </View>
        <View style={styles.ageContainer}>
          <View style={styles.wheelScroller}>
            <ScrollPicker
              dataSource={Array.from({ length: 87 }, (_, index) => index + 14)}
              selectedIndex={1}
              renderItem={(data, index) => (
                <TouchableOpacity key={index} style={styles.item}>
                  <Text style={styles.itemText}>{data}</Text>
                </TouchableOpacity>
              )}
              onValueChange={(data, selectedIndex) => setAgeValue(data)}
              wrapperHeight={height * 0.5} // Adjust this value as needed
              wrapperBackground="transparent"
              itemHeight={60}
              highlightColor="#ea2b04"
              highlightBorderWidth={2}
            />
          </View>
          <View style={styles.ageValue}>
            <Text
              style={{
                color: "#eb3349",
                fontSize: width * 0.08,
                fontWeight: "bold",
                textShadowColor: "rgba(0, 0, 0, 0.8)",
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 6,
              }}
            >
              {ageValue + " yrs"}
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.dataText}>
            We are committed to safeguarding your privacy by ensuring the
            confidentiality of your data.
          </Text>
          <TouchableOpacity
            style={{ backgroundColor: "transparent" }}
            onPress={handleButton}
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
                Done
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    borderColor: "white",

    backgroundColor: "black",
    flexDirection: "column",
  },
  textContainer: {
    flex: 2,
    borderColor: "white",

    alignItems: "center",
    justifyContent: "center",
    marginTop: height * 0.1,
  },
  ageContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 6,
    borderColor: "white",

    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 2,
    borderColor: "white",

    justifyContent: "center",
    alignItems: "center",
    gap: height * 0.03,
  },
  wheelScroller: {
    width: width * 0.6,
    borderColor: "white",

    flex: 8,
  },
  ageValue: {
    width: width * 0.6,
    flex: 2,
    borderColor: "white",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    height: height * 0.05,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
     fontSize: width * 0.06,
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.9)",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 6,
  },
  button: {
    width: width * 0.3,
    justifyContent: "center",
    alignItems: "center",
    height: height * 0.05,
    borderRadius: 20,
  },
  dataText: {
    color: "white",
    fontSize: width * 0.04,
  },
});
