import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
const { height, width } = Dimensions.get("window");

export default function Gender() {
  const navigation = useNavigation();
  const [selectedGender, setSelectedGender] = useState(null);
  return (
    <View style={styles.container}>
      <ImageBackground style={{flex:1}} resizeMode="cover" source={require('../../assets/backgroundImages/pic.jpg')}>
      <View style={styles.textConatiner}>
      <Text
  style={{
    color: "white",
    fontSize: width * 0.08,
    fontWeight: "bold",
    textShadowColor: 'rgba(0, 0, 0, 0.8)', // Shadow color
    textShadowOffset: { width: 3, height: 4 }, // Shadow offset
    textShadowRadius: 6, // Shadow blur radius
  }}
>
  You are ?
</Text>

      </View>
      <View style={styles.genderContainer}>
        <TouchableOpacity  onPress={() => setSelectedGender("male")}>
          <LinearGradient
          start={{x: 0, y: 0}} end={{x: 1, y: 0}}
         colors={ selectedGender==='male'?['#4ca1af' ,'#c4e0e5']:['#eb3349' ,'#f45c43']}
            style={[
              styles.genderItems
            ]}
          >
            <Ionicons name="male-outline" size={width * 0.07} color="green" />
            <Text style={styles.itemText}>Male</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedGender("female")}>
          <LinearGradient
           start={{x: 0, y: 0}} end={{x: 1, y: 0}}
           colors={ selectedGender==='female'?['#4ca1af' ,'#c4e0e5']:['#eb3349' ,'#f45c43']}
            style={[
              styles.genderItems
            ]}
          >
            <Ionicons name="female-outline" size={width * 0.07} color="green" />
            <Text style={styles.itemText}>Female</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        {selectedGender ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Weight")}
          >
            <Ionicons
              name="arrow-forward-outline"
              size={width * 0.1}
              color="#ea2b04"
            />
          </TouchableOpacity>
        ) : null}
      </View>
      </ImageBackground>
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
    justifyContent:'center',
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
    backgroundColor: "white",
    borderRadius:20,
    elevation:5
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
    textShadowColor: 'rgba(0, 0, 0, 0.8)', // Shadow color
    textShadowOffset: { width: 3, height: 2 }, // Shadow offset
    textShadowRadius: 6, // Shadow blur radius
  },
});
