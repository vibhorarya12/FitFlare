import React from 'react'
import { View, StyleSheet, ImageBackground} from 'react-native'

export default function TrackCalorie() {
  return (
    <View style={styles.container}>
     <ImageBackground style={{flex:1}} resizeMode='cover' source={require('../../assets/backgroundImages/fruits.jpg')}>
      <View style={{flex:4, borderColor:'black'}}>

      </View>
      <View style={{flex:6, borderColor:'black',  backgroundColor:'white', borderTopLeftRadius:45, borderTopRightRadius:45, opacity:0.75, elevation:10}}>

      </View>
     </ImageBackground>
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
       
    }
})