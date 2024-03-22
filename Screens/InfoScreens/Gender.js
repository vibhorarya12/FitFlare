import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
const { height, width } = Dimensions.get("window");

export default function Gender() {
  return (
    <View style={styles.container}>
      <View style={styles.textConatiner}>
        <Text
          style={{ color: "white", fontSize: width * 0.08, fontWeight: "bold" }}
        >
          You are ?
        </Text>
      </View>
      <View style={styles.genderContainer}>
        <TouchableOpacity>
          <View style={styles.genderItems}></View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.genderItems}></View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "column",
  },
  textConatiner: {
    flex: 1,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginTop: height * 0.1,
  },
  genderContainer: {
    flex: 9,
    borderColor: "white",
    alignItems: "center",
    flexDirection: "column",
  },
  genderItems: {
    width: width * 0.7,
    height: width * 0.18,
    backgroundColor: "#ea2b04",
    marginTop: 10,
    borderRadius: 30,
  
  },
});
