import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");

export default function Gender() {
  const navigation = useNavigation();
  const [selectedGender, setSelectedGender] = useState(null);
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
        <TouchableOpacity onPress={() => setSelectedGender("male")}>
          <View
            style={[
              styles.genderItems,
              {
                backgroundColor: selectedGender === "male" ? "grey" : "#ea2b04",
              },
            ]}
          >
            <Ionicons name="male-outline" size={width * 0.07} color="green" />
            <Text style={styles.itemText}>Male</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedGender("female")}>
          <View
            style={[
              styles.genderItems,
              {
                backgroundColor:
                  selectedGender === "female" ? "grey" : "#ea2b04",
              },
            ]}
          >
            <Ionicons name="female-outline" size={width * 0.07} color="green" />
            <Text style={styles.itemText}>Female</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
      {selectedGender?<TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Weight")}>
          <Ionicons
            name="arrow-forward-outline"
            size={width * 0.08}
            color="#ea2b04"
          />
        </TouchableOpacity>:null}
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
    flex: 7,
    borderColor: "white",
    
    alignItems: "center",
    flexDirection: "column",
    gap: width * 0.03,
  },
  buttonContainer: {
    flex: 2,
    borderColor: "white",
    
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  genderItems: {
    width: width * 0.5,
    height: width * 0.13,

    borderRadius: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  itemText: {
    color: "white",
    fontSize: width * 0.04,
  },
});
