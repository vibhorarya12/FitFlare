import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,  } from "react-native";
import OnBoardingScreen from "./Screens/onboarding";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import UserInfoBoarding from "./Screens/UserInfo";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getItem } from "./Utils/asyncStorage";
import DashBoardScreen from "./Screens/Dashboard";

const Stack = createNativeStackNavigator();

export default function App() {
 const [showOnboarding, setShowOnboarding] = useState(null);
//  useEffect(()=>{

//     AlreadyBoarded();
//  },[])
//  const AlreadyBoarded = async ()=>{
//   let onBoarded = await getItem("onboarded");

//   if(onBoarded==1){
//      setShowOnboarding(false);
//   }
//   else{
//         setShowOnboarding(true);
//   }
//  }

//  if(showOnboarding==null) return null;

//  if(showOnboarding){
//   return (
//     <>
//     <NavigationContainer>
//      <Stack.Navigator initialRouteName="onboard" screenOptions={{headerShown:false}}>
//       <Stack.Screen name="onboard"  component={OnBoardingScreen}/>
//       <Stack.Screen name="userinfo"  component={UserInfoBoarding}/>
//      </Stack.Navigator>
//     </NavigationContainer>
//      </>
//   );
//  }
//  else{
//   return (
//     <>
   
//     <NavigationContainer>
//      <Stack.Navigator screenOptions={{headerShown:false}}>
//       <Stack.Screen name="home"  component={DashBoardScreen}/>
//       <Stack.Screen name="userinfo"  component={UserInfoBoarding}/>
//      </Stack.Navigator>
//     </NavigationContainer>
//      </>
//   );
//  }
 

return (
      <>
      <NavigationContainer>
       <Stack.Navigator  screenOptions={{headerShown:false}}>
       
        <Stack.Screen name="dashboard"  component={DashBoardScreen}/>
       </Stack.Navigator>
      </NavigationContainer>
       </>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  steps: {
    color: "blue",
    fontSize: 40,
  },
});
