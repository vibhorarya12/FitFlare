import { Dimensions, Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { Button, TextInput } from "react-native-paper";

const { width, height } = Dimensions.get("window");
const PreSteps = ["1000", "4500", "6500", "8000"];
export default function SetGoal() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "white" }}
      contentContainerStyle={{ justifyContent: "center", alignItems: "center" , display:'flex', flexDirection:'column', gap:width*0.07}}
    >
      <View style={styles.header}>
        <Text style={{ fontSize: width * 0.05 }}>
          Set your daily step goals
        </Text>
      </View>
      
       <View style={{ borderColor:'black'}}>
       <Image
       resizeMode="contain"
      source={require('../../assets/beat.png')}
      style={{ width: width, height: width*0.5 , tintColor:'purple' }} 
    />
       </View>
       <View style={styles.SelectorBox}>
        <View style={styles.ButtonContainer}>
         {PreSteps.map((item, index)=>{
            return(
            <TouchableOpacity key={index} style={styles.StepButtons}>
                <Text style={{color:'white', fontWeight:'bold'}}>{item}</Text>
                  </TouchableOpacity>
            )
         })}
        </View>
       </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  header: {
    width: width * 0.97,
    height: width * 0.2,
    borderRadius: 25,
    borderWidth: 0.4,
    borderColor: "black",
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#D3C5E5",
  },
  SelectorBox:{
    width: width*0.98,
    height:height*0.56,
    borderRadius:20,
    borderColor:'black',
    backgroundColor: "#D3C5E5",
    position:'relative',
    alignItems:'center'
  },
 ButtonContainer:{
    
    borderColor: 'black',
    display :'flex',
    flexDirection: 'row',
    justifyContent :'space-between',
    alignItems:'center',
    width:width*0.93,
    height : width*0.2,
 },
 StepButtons:{
    backgroundColor:'purple',
    width:width*0.2,
    height:width*0.1,
    borderRadius : 20,
    justifyContent:'center',
    alignItems:'center',
    elevation:5
 }
});
