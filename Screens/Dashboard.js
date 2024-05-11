import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './DashboardScreens/Home';
import MonthlyStatsScreen from './DashboardScreens/MonthlyStats';
import TrackCalorie from './DashboardScreens/TrackCalorie';
import SetGoal from './DashboardScreens/SetGoal';


const Stack = createStackNavigator();

export default function DashBoardScreen() {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen  name='monthly-screen' component={MonthlyStatsScreen} />
      <Stack.Screen  name='Track-Calorie' component={TrackCalorie} />
      <Stack.Screen  name='Set-Goal' component={SetGoal} />
      
      
    </Stack.Navigator>
  );
}
