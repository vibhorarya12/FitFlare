import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './DashboardScreens/Home';
import MonthlyStatsScreen from './DashboardScreens/MonthlyStats';



const Tab = createMaterialTopTabNavigator();


export default function DashBoardScreen() {
  return (
    <Tab.Navigator  initialRouteName='Home' screenOptions={{tabBarShowLabel:false,tabBarStyle:{display:'none'}, swipeEnabled:false}} backBehavior={'order'}  >
     <Tab.Screen  name='Home' component={Home}  />
     <Tab.Screen  name='monthly-screen' component={MonthlyStatsScreen}  />
    
    </Tab.Navigator>
  )
}
