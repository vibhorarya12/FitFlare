import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Switch,
  TouchableOpacity,
  ImageBackground
 
} from "react-native";
import ScrollPicker from "react-native-wheel-scrollview-picker";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const Weight = () => {
  const navigation = useNavigation();
  const [isKilogram, setIsKilogram] = useState(true);
  const [selectedWeight, setSelectedWeight] = useState("17");
  const lbsData = Array.from({ length: 661 }, (_, index) => index + 35);
  const kgData = Array.from({ length: 300 }, (_, index) => index + 16);

  const handleSwitch = useCallback(() => {
    setIsKilogram((prev) => !prev);
  }, []);

  const handleValueChange = useCallback((data) => {
    setSelectedWeight(data);
  }, []);
  const handleButton = () => {
    navigation.navigate('Height');
  };
  return (
    <View style={styles.container}>
      <ImageBackground style={{flex:1}} resizeMode="cover" source={require('../../assets/backgroundImages/fit.jpg')}>
      <View style={styles.textContainer}>
        <Text
          style={{ color: "white", fontSize: width * 0.07, fontWeight: "bold" }}
        >
          Your Current Weight?
        </Text>
        <View style={styles.WeightContainer}>
          <View style={styles.switchContainer}>
            <Text
              style={{
                color: "white",
                fontSize: width * 0.06,
                fontWeight: "bold",
                opacity: isKilogram ? 0.3 : 1,
              }}
            >
              Lbs
            </Text>
            <Switch
              style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
              trackColor={{ false: "#ea2b04", true: "#ea2b04" }}
              thumbColor={"white"}
              onValueChange={handleSwitch}
              value={isKilogram}
            />
            <Text
              style={{
                color: "white",
                fontSize: width * 0.06,
                fontWeight: "bold",
                opacity: !isKilogram ? 0.3 : 1,
              }}
            >
              Kg
            </Text>
          </View>
          <View style={styles.wheelScrollerContainer}>
            <View style={styles.wheelScroller}>
              <ScrollPicker
                dataSource={isKilogram ? kgData : lbsData}
                selectedIndex={1}
                renderItem={(data, index) => (
                  <MemoizedPickerItem key={index} data={data} />
                )}
                onValueChange={handleValueChange}
                wrapperHeight={height * 0.5}
                wrapperBackground="transparent"
                itemHeight={60}
                highlightColor="#ea2b04"
                highlightBorderWidth={2}
              />
            </View>
            <View style={styles.weightValue}>
              <Text
                style={{
                  color: "#ea2b04",
                  fontSize: width * 0.08,
                  fontWeight: "bold",
                }}
              >
                {selectedWeight
                  ? selectedWeight + (isKilogram ? " Kg" : " Lbs")
                  : ""}
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleButton}>
                <Ionicons
                  name="arrow-forward-outline"
                  size={width * 0.08}
                  color="#ea2b04"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      </ImageBackground>
    </View>
  );
};

const MemoizedPickerItem = React.memo(({ data }) => (
  <TouchableOpacity style={styles.item}>
    <Text style={styles.itemText}>{data}</Text>
  </TouchableOpacity>
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "column",
  },
  textContainer: {
    flex: 1,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginTop: height * 0.1,
  },
  WeightContainer: {
    flex: 9,
    borderColor: "white",
    alignItems: "center",
    flexDirection: "column",
    gap: width * 0.03,
    width: width,
  },
  switchContainer: {
    borderColor: "white",

    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },
  wheelScrollerContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 9,
    borderColor: "white",

    gap: height * 0.05,
    width: width,
    alignItems: "center",
  },
  wheelScroller: {
    width: width * 0.6,
    borderColor: "white",

    flex: 6,
  },
  weightValue: {
    width: width * 0.6,
    borderColor: "white",
    flex: 2,
    alignItems: "center",
  },

  buttonContainer: {
    width: width,
    borderColor: "white",
    flex: 2,
    alignItems: "center",

    display: "flex",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "transparent",
  },
  item: {
    height: height*0.05,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontSize: 18,
    color: "white",
  },
});

export default Weight;
