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
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

export default function Height() {
  const [heightValue, setHeightVlaue] = useState("26");
  const navigation = useNavigation();
  const handleButton = () => {
    navigation.navigate("Age");
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ flex: 1 }}
        resizeMode="cover"
        source={require("../../assets/backgroundImages/height.jpg")}
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
            Your height ?
          </Text>
        </View>
        <View style={styles.heightContainer}>
          <View style={styles.wheelScroller}>
            <ScrollPicker
              dataSource={Array.from({ length: 230 }, (_, index) => index + 25)}
              selectedIndex={1}
              renderItem={(data, index) => (
                <TouchableOpacity key={index} style={styles.item}>
                  <Text style={styles.itemText}>{data}</Text>
                </TouchableOpacity>
              )}
              onValueChange={(data, selectedIndex) => setHeightVlaue(data)}
              wrapperHeight={height * 0.5} // Adjust this value as needed
              wrapperBackground="transparent"
              itemHeight={60}
              highlightColor="#ea2b04"
              highlightBorderWidth={2}
            />
          </View>
          <View style={styles.heightValue}>
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
              {heightValue + " cms"}
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={{
              backgroundColor: "transparent",
              backgroundColor: "white",
              borderRadius: 20,
              elevation: 5,
            }}
            onPress={handleButton}
          >
            <Ionicons
              name="arrow-forward-outline"
              size={width * 0.1}
              color="#ea2b04"
            />
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
  heightContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 6,
    borderColor: "white",

    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 2,
    borderColor: "white",

    justifyContent: "center",
    alignItems: "center",
  },
  wheelScroller: {
    width: width * 0.6,
    borderColor: "white",

    flex: 8,
  },
  heightValue: {
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
});
