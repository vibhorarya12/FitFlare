import { Dimensions, Text, View , StyleSheet, ScrollView} from "react-native";
const {width, height} = Dimensions.get('window');
export default function SetGoal (){

    return(<ScrollView style={{flex :1, backgroundColor:'white' }} contentContainerStyle={{justifyContent:'center', alignItems:'center'}}>
        <View style={styles.header}>
    <Text style={{fontSize:width*0.05}}>Set your daily step goals</Text>
        </View>
    </ScrollView>)
}

const styles = StyleSheet.create({
   header : {
    width: width*0.97,
    height : width*0.2,
    elevation :2,
    borderRadius :20,
    marginTop: 5,
    justifyContent:'center',
    alignItems:'center',
    display :'flex',
    flexDirection:'row'


   }
})