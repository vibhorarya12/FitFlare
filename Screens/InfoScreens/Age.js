import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  
} from "react-native";
import ScrollPicker from "react-native-wheel-scrollview-picker";
const { width, height } = Dimensions.get("window");

export default function Age() {
  const [ageValue, setAgeValue] = useState("15");
  const handleButton = () => {
    //  console.log("button prerssed");
  };
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text
          style={{ color: "white", fontSize: width * 0.07, fontWeight: "bold" }}
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
            wrapperBackground="black"
            itemHeight={60}
            highlightColor="#ea2b04"
            highlightBorderWidth={2}
          />
        </View>
        <View style={styles.ageValue}>
          <Text
            style={{
              color: "#ea2b04",
              fontSize: width * 0.07,
              fontWeight: "bold",
            }}
          >
            {ageValue + " yrs"}
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>

        <Text style={styles.dataText}>
        We are committed to safeguarding your privacy by ensuring the confidentiality of your data.
        </Text>
        <TouchableOpacity style={{backgroundColor:'transparent'}} onPress={handleButton}>
          <View style={styles.button}>
            <Text style={{color:'white', fontSize:width*0.04}}>Done</Text>
          </View>
        </TouchableOpacity>
      </View>
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
    display:'flex',
    flexDirection:'column',
    flex: 2,
    borderColor: "white",
    
    justifyContent: "center",
    alignItems: "center",
    gap:height*0.03
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
    height: height*0.05,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontSize: 17,
    color: "white",
  },
  button:{
    backgroundColor:'#ea2b04',
    width:width*0.2,
    justifyContent:'center',
    alignItems:'center',
    height:height*0.04,
    borderRadius:20
  },
  dataText:{
    color:'white',
    fontSize:width*0.03,
    
  }
});
