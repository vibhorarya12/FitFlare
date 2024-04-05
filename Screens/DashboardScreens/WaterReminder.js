import { View , Text , StyleSheet} from "react-native";


export default function WaterReminder (){
    return(
        <View style={styles.container}>
           <View style={styles.ProgressContainer}>
           
           </View>
           <View style={styles.ReminderSetter}></View>
        </View>
    )
}

const styles = StyleSheet.create({

  container:{
    display: "flex",
    flex: 1,
    backgroundColor: "#E1E6E1",
    flexDirection: "column",
  },
  ProgressContainer:{
   
    borderColor:'black',
    borderWidth:1,
    flex:5

  },
  
  ReminderSetter:{
    
    borderColor:'black',
    borderWidth:1,
    flex:5
  }

})