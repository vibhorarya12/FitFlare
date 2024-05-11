import { Dimensions, Text, View, StyleSheet, ScrollView, Image } from "react-native";
const { width, height } = Dimensions.get("window");
export default function SetGoal() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "black" }}
      contentContainerStyle={{ justifyContent: "center", alignItems: "center" , display:'flex', flexDirection:'column', gap:width*0.07}}
    >
      <View style={styles.header}>
        <Text style={{ fontSize: width * 0.05 , color:'white'}}>
          Set your daily step goals
        </Text>
      </View>
      <View >
       <View style={{borderWidth:1, borderColor:'black'}}>
       <Image
       resizeMode="contain"
      source={require('../../assets/beat.png')}
      style={{ width: width, height: width*0.5 , tintColor:'#f7a200' }} 
    />
       </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: width * 0.7,
    height: width * 0.15,
    borderRadius: 25,
    borderWidth: 0.4,
    borderColor: "black",
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#f7a200",
    
  },
});
